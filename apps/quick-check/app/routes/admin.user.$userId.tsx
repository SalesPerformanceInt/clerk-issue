import {
  json,
  redirect,
  type ActionArgs,
  type LoaderArgs,
} from "@remix-run/node";
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";

import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import invariant from "tiny-invariant";
import { z } from "zod";
import { generateTokenAndSendSMS } from "~/notifications/twilio.server";

import { Button } from "quickcheck-shared";

import {
  getAdminApolloClientFromRequest,
  type EnrollUserEnrollment,
  type User_Answer,
} from "~/graphql";

import { sendDailyEmail } from "~/utils/email/sendDailyEmail.server";
import { parseSchema } from "~/utils/parseSchema";

import { buildTaxonTrees, treeNodeToRawNodeDatum } from "~/models/taxonomy";

import { UsersTable } from "~/components";

import { parseAdminActionRequest } from "./admin.tenant.$tenantId";

export const loader = async ({ request, params }: LoaderArgs) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const { userId } = params;
  invariant(userId, "No User ID found");

  const user = await adminApolloClient?.getUserData({ userId });
  invariant(user, "No User found");

  const taxonTrees = await buildTaxonTrees();
  const courses = taxonTrees.map((tree) =>
    treeNodeToRawNodeDatum(tree.rootNode),
  );

  return json({ user, courses }, { status: 200 });
};

const userActionSchema = z.object({
  type: z.enum(["ENROLL", "UNENROLL"]),
  taxonomyId: z.string().nullable(),
  enrollmentId: z.string().nullable(),
});

type UserAction = z.infer<typeof userActionSchema>;

const parseUserActionRequest = (formData?: FormData) => {
  const data = formData?.get("data");
  return parseSchema(data, userActionSchema);
};

export const action = async ({ request, params }: ActionArgs) => {
  try {
    const { userId } = params;
    invariant(userId, "No User ID found");
    const formData = await request.formData();
    const data = formData.get("data");

    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    const userAction = parseUserActionRequest(formData);

    if (userAction?.type === "ENROLL" && userAction?.taxonomyId) {
      const enrollment: EnrollUserEnrollment = {
        start_date: DateTime.now().toISO()!,
        expiration_date: DateTime.now().plus({ weeks: 12 }).toISO()!,
      };

      await adminApolloClient.enrollUser(userAction?.taxonomyId, enrollment, {
        userId,
      });
    }

    if (userAction?.type === "UNENROLL" && userAction?.enrollmentId) {
      await adminApolloClient.unenrollUser(userAction?.enrollmentId, {
        userId,
      });
    }

    const adminAction = parseAdminActionRequest(formData);

    if (adminAction?.type === "TOGGLE_SMS_ENABLED") {
      await adminApolloClient.toggleUserSMSEnabled({
        userId: adminAction.userId,
      });
    }

    if (adminAction?.type === "GENERATE_TOKEN_AND_SEND_SMS") {
      const user = await adminApolloClient.getUser({
        userId: adminAction.userId,
      });

      invariant(user, "No user found");

      await generateTokenAndSendSMS(user, request);
    }

    if (adminAction?.type === "RESET_USER") {
      await adminApolloClient.resetUser({ userId: adminAction.userId });
    }

    if (adminAction?.type === "LOGIN_USER") {
      const user = await adminApolloClient.getUser({
        userId: adminAction.userId,
      });

      invariant(user, "No user found");

      const activeToken = user.active_tokens[0]?.id ?? "";

      return redirect(`/token/${activeToken}`);
    }

    if (adminAction?.type === "SEND_QUESTION_EMAIL") {
      await sendDailyEmail(adminAction.userId, request);
    }

    return json(formData);
  } catch (error) {
    console.log("ERROR", error);
    return json({ error }, { status: 500 });
  }
};

const formatUserAnswer = (
  userAnswer?: Pick<User_Answer, "correct" | "created_at">,
) => {
  if (!userAnswer) return null;
  const date = DateTime.fromISO(userAnswer.created_at).toFormat("LLL dd yyyy");
  const icon = userAnswer.correct ? "✅" : "❌";

  return `${icon} ${date}`;
};

export default function Page() {
  const { user, courses } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const navigate = useNavigate();

  const { state, formData } = useNavigation();

  return (
    <div className="p-8 bg-primary-dark">
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 desktop:px-8">
            <div className="flex items-center justify-between mb-8">
              <button
                className="flex items-center"
                onClick={() => navigate(`/admin/tenant/${user?.tenant_id}`)}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-primary-75 w-6 text-center text-4xl leading-6 sm:text-base sm:w-[10px]"
                />
                <div className="ml-4 font-bold text-primary-75">
                  {user?.tenant_id}
                </div>
              </button>
              <h1 className="text-4xl font-bold text-center">
                {`${user?.first_name} ${user?.last_name} (${user.user_id})`}
              </h1>
              <div />
            </div>
            <div className="mb-8 overflow-hidden">
              <UsersTable users={[user]} />
            </div>
            <div className="mb-8 overflow-hidden">
              <table className="min-w-full text-sm text-left table-auto">
                <thead className="font-medium bg-white border-b">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Course
                    </th>
                    <th scope="col" className="w-full px-6 py-4">
                      # Questions
                    </th>
                    <th scope="col" className="w-1 px-6 py-4 whitespace-nowrap">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, row) => {
                    const enrollment = user?.user_enrollments.find(
                      ({ taxonomy_id }) =>
                        taxonomy_id === course.attributes?.uid,
                    );

                    return (
                      <tr
                        key={course.name}
                        className={`border-b ${
                          row % 2 === 0 ? "bg-neutral-100" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {course.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {enrollment?.user_questions_aggregate.aggregate
                            ?.count ?? null}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <Button
                            background="light"
                            variant={!!enrollment ? "primary" : "secondary"}
                            loading={
                              state !== "idle" &&
                              parseUserActionRequest(formData)?.taxonomyId ===
                                course.attributes?.uid
                            }
                            onClick={() => {
                              const payload: UserAction = {
                                type: !!enrollment ? "UNENROLL" : "ENROLL",
                                taxonomyId: `${course.attributes?.uid}` ?? null,
                                enrollmentId: enrollment?.id || null,
                              };
                              const data = JSON.stringify(payload);
                              const formData = new FormData();
                              formData.append("data", data);

                              submit(formData, {
                                method: "POST",
                              });
                            }}
                            className="w-20 h-8 py-0"
                          >
                            {enrollment ? "Unenroll" : "Enroll"}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="overflow-hidden">
              <table className="min-w-full text-sm text-left table-auto">
                <thead className="font-medium bg-white border-b">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Question
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Active On
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-4">
                      1st Answer
                    </th>
                    <th scope="col" className="px-6 py-4">
                      2nd Answer
                    </th>
                    <th scope="col" className="px-6 py-4">
                      3rd Answer
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Retired On
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user?.user_questions.map((question, row) => {
                    const course = courses.find(
                      (course) =>
                        question.user_enrollment.taxonomy_id ===
                        course.attributes?.uid,
                    );

                    return (
                      <tr
                        key={question.id}
                        className={`border-b ${
                          row % 2 === 0 ? "bg-neutral-100" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {question.title || question.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {DateTime.fromISO(question.active_on ?? "", {
                            zone: "utc",
                          }).toFormat("LLL dd yyyy")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {course?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatUserAnswer(question.user_answers?.[0])}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatUserAnswer(question.user_answers?.[1])}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatUserAnswer(question.user_answers?.[2])}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {question.retired_on &&
                            DateTime.fromISO(question.retired_on).toISODate()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
