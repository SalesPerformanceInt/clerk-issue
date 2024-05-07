import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "@remix-run/react";

import { faChevronLeft, faTrash } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import { first } from "remeda";
import { v4 as uuidV4 } from "uuid";
import { z } from "zod";

import { Button, invariant, simpleErrorResponse } from "quickcheck-shared";

import {
  getAdminApolloClientFromRequest,
  type EnrollUserEnrollment,
  type User_Answer,
} from "~/graphql";

import { formatDate } from "~/utils/date";
import { useOutletContext } from "~/utils/outletContext";
import { parseSchema } from "~/utils/parseSchema";

import { performAdminAction } from "~/models/admin";
import { handleUserEnrollment } from "~/models/enrollment";
import { authAdminSession } from "~/models/session";
import { buildTaxonTrees, treeNodeToRawNodeDatum } from "~/models/taxonomy";

import { UsersTable } from "~/components";
import {
  useIsLoading,
  useMakeUserAction,
} from "~/components/UsersTable/components/UserRow";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const authAdmin = await authAdminSession(request);
  if (authAdmin) return authAdmin;

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const { userId } = params;
  invariant(userId, "No User ID found");

  const user = await adminApolloClient?.getAdminUserData({ userId });
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

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { userId } = params;
    invariant(userId, "No User ID found");

    const requestForAdminAction = request.clone();

    const formData = await request.formData();

    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    const user = await adminApolloClient.getUser({ userId });

    const userAction = parseUserActionRequest(formData);

    if (user && userAction?.type === "ENROLL" && userAction?.taxonomyId) {
      const enrollment: Omit<EnrollUserEnrollment, "user_id" | "topic_id"> = {
        enrollment_id: uuidV4(),
        start_date: DateTime.now().toISO()!,
        expiration_date: DateTime.now().plus({ weeks: 12 }).toISO()!,
      };

      const enrollmentActionResponse = await handleUserEnrollment({
        request,
        user: { userId, tenantId: user.tenant_id },
        enrollmentNewData: enrollment,
        taxonomyId: userAction.taxonomyId,
      });

      return json({ ok: true, ...enrollmentActionResponse });
    }

    if (userAction?.type === "UNENROLL" && userAction?.enrollmentId) {
      await adminApolloClient.unenrollUser(userAction?.enrollmentId, {
        userId,
      });
      return json({ ok: true });
    }

    return performAdminAction(requestForAdminAction);
  } catch (error) {
    return simpleErrorResponse(error);
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

  const { isAdminEnabled } = useOutletContext();

  const productSurvey = first(user.product_surveys);

  const isLoading = useIsLoading(user);
  const makeUserAction = useMakeUserAction(user);

  return (
    <div className="sm:p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 desktop:px-8">
            <div className="mb-8 flex items-center justify-between px-4 pt-4 sm:p-0">
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
                      Survey
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sentiment
                    </th>
                    <th scope="col" className="w-full px-6 py-4">
                      Comment
                    </th>
                    {isAdminEnabled && (
                      <th
                        scope="col"
                        className="w-1 whitespace-nowrap px-6 py-4"
                      >
                        Delete
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-100">
                    <td className="whitespace-nowrap px-6 py-4">
                      {formatDate(productSurvey?.created_at) || "---"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {productSurvey?.sentiment}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {productSurvey?.comment}
                    </td>
                    {isAdminEnabled && (
                      <td className="whitespace-nowrap px-6 py-4 text-center">
                        <Button
                          disabled={!productSurvey}
                          loading={isLoading("RESET_SURVEY")}
                          onClick={makeUserAction("RESET_SURVEY")}
                          className="h-8 w-auto py-0"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-8 overflow-hidden">
              <table className="min-w-full table-auto text-left text-sm">
                <thead className="border-b bg-white font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-4">
                      # Questions
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Enrolled Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Expiration Date
                    </th>

                    {isAdminEnabled && (
                      <th
                        scope="col"
                        className="w-1 whitespace-nowrap px-6 py-4"
                      >
                        View
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, row) => {
                    const enrollment = user?.user_enrollments.find(
                      ({ taxonomy_id }) =>
                        taxonomy_id === course.attributes?.uid,
                    );

                    if (!isAdminEnabled && !enrollment) return null;

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
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatDate(enrollment?.created_at)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatDate(enrollment?.start_date)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatDate(enrollment?.expiration_date)}
                        </td>

                        {isAdminEnabled && (
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
                                  taxonomyId:
                                    `${course.attributes?.uid}` ?? null,
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
                        )}
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
                          {formatDate(question.active_on)}
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
