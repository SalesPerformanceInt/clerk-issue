import {
  json,
  redirect,
  type ActionArgs,
  type LoaderArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import invariant from "tiny-invariant";
import { z } from "zod";
import { getAdminApolloClient } from "~/graphql";
import { createUserActionSchema } from "~/graphql/mutations";
import { generateTokenAndSendSMS } from "~/notifications/twilio.server";

import { parseSchema } from "~/utils/parseSchema";

import { CreateUserForm, UsersTable } from "~/components";

export const adminActionSchema = z.object({
  type: z.enum([
    "TOGGLE_SMS_ENABLED",
    "GENERATE_TOKEN_AND_SEND_SMS",
    "RESET_USER",
    "LOGIN_USER",
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
      await getAdminApolloClient().resetUser(adminAction.userId);
    }

    if (adminAction?.type === "LOGIN_USER") {
      const user = await getAdminApolloClient().getUser(adminAction.userId);
      invariant(user, "No user found");
      const activeToken = user.active_tokens[0]?.id ?? "";
      return redirect(`/t/${activeToken}`);
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
    <div className="bg-plum-100 p-8">
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
