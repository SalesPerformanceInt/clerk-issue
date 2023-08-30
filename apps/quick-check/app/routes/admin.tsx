import {
  json,
  redirect,
  type ActionArgs,
  type LoaderArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { QuickcheckQuestionEmail } from "emails";
import { map, pipe } from "remeda";
import invariant from "tiny-invariant";
import { z } from "zod";
import { getAdminApolloClient } from "~/graphql";
import { createUserActionSchema } from "~/graphql/mutations";
import { generateTokenAndSendSMS } from "~/notifications/twilio.server";

import { sendEmail } from "~/utils/email";
import { VERCEL_URL } from "~/utils/envs.server";
import { remixI18next } from "~/utils/i18next.server";
import { parseSchema } from "~/utils/parseSchema";

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

const parseCreateUserRequest = (formData?: FormData) => {
  const data = formData && Object.fromEntries([...formData.entries()]);
  return parseSchema(data, createUserActionSchema);
};

export const loader = async ({ request }: LoaderArgs) => {
  const users = (await getAdminApolloClient().getAllUsers()) ?? [];
  return json({ users }, { status: 200 });
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();

    const createUserInput = parseCreateUserRequest(formData);

    if (createUserInput) {
      await getAdminApolloClient().createUser(createUserInput);
    }

    const adminAction = parseAdminActionRequest(formData);

    if (adminAction?.type === "TOGGLE_SMS_ENABLED") {
      await getAdminApolloClient().toggleUserSMSEnabled(adminAction.userId);
    }

    if (adminAction?.type === "GENERATE_TOKEN_AND_SEND_SMS") {
      const user = await getAdminApolloClient().getUser(adminAction.userId);
      invariant(user, "No user found");
      await generateTokenAndSendSMS(user, request);
    }

    if (adminAction?.type === "RESET_USER") {
      const adminApolloClient = getAdminApolloClient();
      await adminApolloClient.resetUser(adminAction.userId);

      const taxonTrees = await buildTaxonTrees();

      const enrollments = pipe(
        taxonTrees,
        map((tree) =>
          adminApolloClient.enrollUser(
            adminAction.userId,
            `${tree.rootNode.id}`,
          ),
        ),
      );

      await Promise.all(enrollments);
    }

    if (adminAction?.type === "LOGIN_USER") {
      const user = await getAdminApolloClient().getUser(adminAction.userId);
      invariant(user, "No user found");
      const activeToken = user.active_tokens[0]?.id ?? "";
      return redirect(`/t/${activeToken}`);
    }

    if (adminAction?.type === "SEND_QUESTION_EMAIL") {
      const user = await getAdminApolloClient().getUser(adminAction.userId);
      invariant(user, "No user found");

      const nextQuestion =
        user?.next_question ??
        (await generateNextQuestionForUser(adminAction.userId));

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
          userData={{
            unanswered: 17,
            courses_capabilities: 5,
          }}
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

  return (
    <div className="bg-primary-dark p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="mb-8 overflow-hidden">
              <UsersTable users={users} />
            </div>
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}
