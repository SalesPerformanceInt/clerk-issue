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
import { generateTokenAndSendSMS } from "~/notifications/twilio.server";
import { DateTime } from "luxon";
import { z } from "zod";

import { Button, invariant } from "quickcheck-shared";

import {
  getAdminApolloClientFromRequest,
  type EnrollUserEnrollment,
  type User_Answer,
} from "~/graphql";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";
import { parseSchema } from "~/utils/parseSchema";

import { enrollUser } from "~/models/enrollment";
import { buildTaxonTrees, treeNodeToRawNodeDatum } from "~/models/taxonomy";

import { UsersTable } from "~/components";

import { parseAdminActionRequest } from "./admin.tenant.$tenantId";

export const config = {
  maxDuration: 300,
};

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

    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    const userAction = parseUserActionRequest(formData);

    const user = await adminApolloClient.getUser({ userId });

    if (user && userAction?.type === "ENROLL" && userAction?.taxonomyId) {
      const enrollment: EnrollUserEnrollment = {
        start_date: DateTime.now().toISO()!,
        expiration_date: DateTime.now().plus({ weeks: 12 }).toISO()!,
      };

      await enrollUser(
        { userId, tenantId: user.tenant_id },
        userAction.taxonomyId,
        enrollment,
        request,
      );
    }

    if (userAction?.type === "UNENROLL" && userAction?.enrollmentId) {
      await adminApolloClient.unenrollUser(userAction?.enrollmentId, {
        userId,
      });
    }

    const adminAction = parseAdminActionRequest(formData);

    if (adminAction?.type === "TOGGLE_SMS_ENABLED") {
      await adminApolloClient.toggleUserDailyEmailEnabled({
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
      await sendEmailTemplate(request, adminAction.userId);
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
    <div className="bg-primary-dark p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 desktop:px-8">
            <div className="mb-8 flex items-center justify-between">
              <button
                className="flex items-center"
                onClick={() => navigate(`/admin/tenant/${user?.tenant_id}`)}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-6 text-center text-4xl leading-6 text-primary-75 sm:w-[10px] sm:text-base"
                />
                <div className="ml-4 font-bold text-primary-75">
                  {user?.tenant_id}
                </div>
              </button>
              <h1 className="text-center text-4xl font-bold">
                {`${user?.first_name} ${user?.last_name} (${user.user_id})`}
              </h1>
              <div />
            </div>
            <div className="mb-8 overflow-hidden">
              <UsersTable users={[user]} />
            </div>
            <div className="mb-8 overflow-hidden">
              <table className="min-w-full table-auto text-left text-sm">
                <thead className="border-b bg-white font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Course
                    </th>
                    <th scope="col" className="w-full px-6 py-4">
                      # Questions
                    </th>
                    <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
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
                        <td className="whitespace-nowrap px-6 py-4">
                          {course.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {enrollment?.user_questions_aggregate.aggregate
                            ?.count ?? null}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
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
                            className="h-8 w-20 py-0"
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
              <table className="min-w-full table-auto text-left text-sm">
                <thead className="border-b bg-white font-medium">
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
                        <td className="whitespace-nowrap px-6 py-4">
                          {question.title || question.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {DateTime.fromISO(question.active_on ?? "").toFormat(
                            "LLL dd yyyy",
                          )}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {course?.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatUserAnswer(question.user_answers?.[0])}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatUserAnswer(question.user_answers?.[1])}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatUserAnswer(question.user_answers?.[2])}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
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
