import {
  json,
  redirect,
  type ActionArgs,
  type LoaderArgs,
} from "@remix-run/node";
import { useLoaderData, useNavigate, useParams } from "@remix-run/react";

import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuickcheckQuestionEmail } from "emails";
import { map, pipe } from "remeda";
import invariant from "tiny-invariant";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { generateTokenAndSendSMS } from "~/notifications/twilio.server";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendEmail } from "~/utils/email/postmark/email";
import { VERCEL_URL } from "~/utils/envs.server";
import { remixI18next } from "~/utils/i18next.server";
import { parseSchema } from "~/utils/parseSchema";

import {
  formatUserInputFromImport,
  parseCreateUserRequest,
} from "~/models/api";
import { getQuestionData } from "~/models/question";
import { buildTaxonTrees } from "~/models/taxonomy";
import { generateNextQuestionForUser } from "~/models/user";

import { CreateUserForm, UsersTable } from "~/components";

export const adminActionSchema = z.object({
  type: z.enum([
    "TOGGLE_SMS_ENABLED",
    "GENERATE_TOKEN_AND_SEND_SMS",
    "RESET_USER",
    "LOGIN_USER",
    "SEND_QUESTION_EMAIL",
  ]),
  userId: z.string(),
});

export type AdminAction = z.infer<typeof adminActionSchema>;

export const parseAdminActionRequest = (formData?: FormData) => {
  const data = formData?.get("data");
  return parseSchema(data, adminActionSchema);
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const { tenantId } = params;
  invariant(tenantId, "Tenant ID not found");

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const users = (await adminApolloClient.getTenantUsers({ tenantId })) ?? [];
  return json({ users }, { status: 200 });
};

export const action = async ({ request, params }: ActionArgs) => {
  try {
    const { tenantId } = params;
    invariant(tenantId, "Tenant ID not found");

    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const formData = await request.formData();

    const createUserInput = parseCreateUserRequest(formData);

    if (createUserInput) {
      await adminApolloClient.upsertUser(
        formatUserInputFromImport(createUserInput),
      );
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

      const taxonTrees = await buildTaxonTrees();

      const enrollments = pipe(
        taxonTrees,
        map((tree) =>
          adminApolloClient.enrollUser(`${tree.rootNode.id}`, uuidv4(), {
            userId: adminAction.userId,
          }),
        ),
      );

      await Promise.all(enrollments);
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
      const user = await adminApolloClient.getUserEmailData({
        userId: adminAction.userId,
      });

      invariant(user, "No user found");

      const nextQuestion =
        user?.next_question ??
        (await generateNextQuestionForUser(request, adminAction.userId));

      invariant(nextQuestion, "Next question not found");

      const { questionItem, enrollmentTaxonomy } =
        await getQuestionData(nextQuestion);

      const activeToken = user.active_tokens[0]?.id ?? "";

      const t = await remixI18next.getFixedT(user.language_preference);

      const result = await sendEmail(
        user?.email,
        t("emails.question.subject.on_a_roll", {
          first_name: user.first_name,
          weeks: 5,
        }),
        <QuickcheckQuestionEmail
          questionItem={questionItem}
          enrollmentTaxonomy={enrollmentTaxonomy}
          token={activeToken}
          domain={VERCEL_URL}
          questionId={nextQuestion.id}
          t={t}
          userData={user}
        />,
      );
    }

    const { type, userId } = adminAction ?? {};

    return json({ type, userId, ...adminAction }, { status: 200 });
  } catch (error) {
    return json({ type: undefined, userId: undefined, error }, { status: 500 });
  }
};

export default function Page() {
  const { users } = useLoaderData<typeof loader>();
  const { tenantId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-primary-dark">
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 desktop:px-8">
            <div className="flex items-center justify-between mb-8">
              <button
                className="flex items-center"
                onClick={() => navigate("/admin")}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-primary-75 w-6 text-center text-4xl leading-6 sm:text-base sm:w-[10px]"
                />
                <div className="ml-4 font-bold text-primary-75">Tenants</div>
              </button>
              <h1 className="text-4xl font-bold text-center uppercase">
                {tenantId}
              </h1>
              <div />
            </div>
            <div className="mb-8 overflow-hidden">
              <UsersTable users={users} link />
            </div>
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}
