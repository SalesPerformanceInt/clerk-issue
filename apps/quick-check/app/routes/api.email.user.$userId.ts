import { json, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendDailyEmail } from "~/utils/email/sendDailyEmail.server";

import { verifyApiRequest } from "~/models/api";

export const loader = async ({ request, params }: LoaderArgs) => {
  try {
    const { userId } = params;
    invariant(userId, "Missing User ID");

    verifyApiRequest(request);

    await sendDailyEmail(userId, request);

    return json({ userId });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
