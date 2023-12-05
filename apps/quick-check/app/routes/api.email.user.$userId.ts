import { json, type ActionArgs } from "@remix-run/node";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { sendDailyEmail } from "~/utils/email/sendDailyEmail.server";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request, params }: ActionArgs) => {
  try {
    const { userId } = params;
    invariant(userId, "Missing User ID");

    const result = await sendDailyEmail(userId, request);

    return json({ userId, ...result });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
