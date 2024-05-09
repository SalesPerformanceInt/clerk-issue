import { json, redirect } from "@remix-run/node";

import { generateTokenAndSendSMS } from "~/notifications/twilio.server";
import { z } from "zod";

import { invariant, supportedLngs } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";
import { parseSchema } from "~/utils/parseSchema";

import { getDeleteCookieHeaders } from "../session";

export const adminActionSchema = z.object({
  type: z.enum([
    "TOGGLE_SMS_ENABLED",
    "GENERATE_TOKEN_AND_SEND_SMS",
    "RESET_USER",
    "LOGIN_USER",
    "SEND_QUESTION_EMAIL",
    "TOGGLE_SHOW_LEADERBOARD",
    "CHANGE_LANGUAGE",
    "RESET_SURVEY",
    "RESET_SURVEY_DISMISSED",
  ]),
  userId: z.string(),
  tenantId: z.string(),
  language: z.enum(supportedLngs).optional(),
});

export type AdminAction = z.infer<typeof adminActionSchema>;

export const parseAdminActionRequest = (formData?: FormData) => {
  const data = formData?.get("data");
  return parseSchema(data, adminActionSchema);
};

export const performAdminAction = async (request: Request) => {
  const formData = await request.formData();

  const adminAction = parseAdminActionRequest(formData);

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  invariant(adminAction, "No action parsed");

  const proxyData = {
    userId: adminAction.userId,
    tenantId: adminAction.tenantId,
  };

  if (adminAction?.type === "RESET_SURVEY") {
    await adminApolloClient.resetSurveyResponse(proxyData);
  }

  if (adminAction?.type === "RESET_SURVEY_DISMISSED") {
    await adminApolloClient.updateUser({ survey_dismissed: null }, proxyData);
  }

  if (adminAction?.type === "TOGGLE_SMS_ENABLED") {
    await adminApolloClient.toggleUserDailyEmailEnabled(proxyData);
  }

  if (adminAction?.type === "TOGGLE_SHOW_LEADERBOARD") {
    await adminApolloClient.toggleUserShowLeaderboard(proxyData);
  }

  if (adminAction?.type === "GENERATE_TOKEN_AND_SEND_SMS") {
    const user = await adminApolloClient.getUser(proxyData);

    invariant(user, "No user found");

    await generateTokenAndSendSMS(user, request);
  }

  if (adminAction?.type === "RESET_USER") {
    await adminApolloClient.resetUser(proxyData);
    return json(adminAction, {
      headers: await getDeleteCookieHeaders(request),
    });
  }

  if (adminAction?.type === "LOGIN_USER") {
    const user = await adminApolloClient.getUser(proxyData);

    invariant(user, "No user found");

    const activeToken = user.active_tokens[0]?.id ?? "";

    return redirect(`/token/${activeToken}`);
  }

  if (adminAction?.type === "SEND_QUESTION_EMAIL") {
    await sendEmailTemplate(request, adminAction.userId);
  }

  if (adminAction?.type === "CHANGE_LANGUAGE" && adminAction.language) {
    await adminApolloClient.updateUser(
      { language_preference: adminAction.language },
      proxyData,
    );
  }

  return json(formData);
};
