import { json, type ActionFunctionArgs } from "@remix-run/node";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { userId } = params;
    invariant(userId, "Missing User ID");

    const result = await sendEmailTemplate(request, userId);

    return json({ userId, ...result });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
