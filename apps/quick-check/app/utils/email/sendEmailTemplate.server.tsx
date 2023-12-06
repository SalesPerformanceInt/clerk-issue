import { invariant } from "quickcheck-shared";

import {
  getAdminApolloClient,
  getAdminApolloClientFromRequest,
  type GetUserEmailData,
} from "~/graphql";

import { remixI18next } from "~/utils/i18next.server";
import { getLoginUrl } from "~/utils/urls";

import { getUserActiveToken } from "~/models/token";

import { emailTemplateMap, type EmailTemplate } from "./emailTemplatesMap";
import {
  getUserAwayTemplate,
  getUserInactiveTemplate,
  getUserQuestionActivatedTemplate,
} from "./userEmailDataValidation";

/**
 * Email Data Composition
 */

const getUserEmailData = async (
  request: Request,
  userId: string,
  now?: string,
) => {
  const adminApolloClient = now
    ? await getAdminApolloClient(now)
    : await getAdminApolloClientFromRequest(request);

  const user = await adminApolloClient.getUserEmailData({ userId });

  invariant(user, "No user found");

  return user;
};

const getUserEmailAdditionalData = async (
  request: Request,
  user: GetUserEmailData,
) => {
  const activeToken = (
    await getUserActiveToken(request, {
      userId: user.user_id,
      tenantId: user.tenant_id,
    })
  ).id;

  const t = await remixI18next.getFixedT(user.language_preference);

  const loginUrl = getLoginUrl(activeToken, request);

  return { t, loginUrl };
};

/**
 * Send Email Template
 */

export const sendEmailTemplate = async (
  request: Request,
  userId: string,
  now?: string,
  template?: EmailTemplate,
) => {
  const user = await getUserEmailData(request, userId, now);

  const { t, loginUrl } = await getUserEmailAdditionalData(request, user);

  const emailTemplate =
    template ||
    getUserInactiveTemplate(user, now) ||
    getUserAwayTemplate(user, now) ||
    getUserQuestionActivatedTemplate(user);

  if (!emailTemplate) return null;

  const emailTemplateSender = emailTemplateMap.get(emailTemplate.type);
  const emailTemplateResponse = await emailTemplateSender(
    request,
    { user, userId, t, loginUrl },
    emailTemplate.data,
  );

  return emailTemplateResponse;
};