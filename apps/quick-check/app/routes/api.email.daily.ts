import { json, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { IMPORT_SECRET_KEY, VERCEL_URL } from "~/utils/envs.server";


export const loader = async ({ request }: LoaderArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const users = await adminApolloClient.getUsersForDailyEmail();

    invariant(users, "Error fetching users");

    const userEmails = users.map(
      async (user) =>
        await fetch(`${VERCEL_URL}/api/email/user/${user.user_id}`, {
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
