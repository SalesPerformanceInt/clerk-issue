import { json, type ActionArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { simpleErrorResponse } from "quickcheck-shared";

import { sendDailyEmail } from "~/utils/email/sendDailyEmail.server";

export const action = async ({ request, params }: ActionArgs) => {
  try {
    const { userId } = params;
    invariant(userId, "Missing User ID");

    console.log("/api/email/user", userId);

    await sendDailyEmail(userId, request);

    return json({ userId });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
