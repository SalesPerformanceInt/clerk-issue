import { json, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendDailyEmail } from "~/utils/email/sendDailyEmail.server";

import { verifyApiRequest } from "~/models/api";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    verifyApiRequest(request);

    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const users = await adminApolloClient.getUsersForDailyEmail();

    invariant(users, "Error fetching users");

    const userEmails = users.map(
      async (user) => await sendDailyEmail(user.user_id, request),
    );

    await Promise.all(userEmails);

    return json({ users });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
