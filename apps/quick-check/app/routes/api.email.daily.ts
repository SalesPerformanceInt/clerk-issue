import { json, type LoaderFunctionArgs } from "@vercel/remix";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { APP_DOMAIN, IMPORT_SECRET_KEY } from "~/utils/envs.server";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const users = await adminApolloClient.getUsersForDailyEmail();

    invariant(users, "Error fetching users");

    const userEmails = users.map(
      async (user) =>
        await fetch(`${APP_DOMAIN}/api/email/user/${user.user_id}`, {
          method: "POST",
          headers: {
            Authorization: IMPORT_SECRET_KEY,
          },
        }),
    );

    await Promise.all(userEmails);

    return json({ users });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
