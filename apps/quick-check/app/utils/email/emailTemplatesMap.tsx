import type { Namespace, TFunction } from "i18next";
import type { MessageSendingResponse } from "postmark/dist/client/models";

import { MatchedMap } from "quickcheck-shared";

import type {
  GetUserEmailData,
  NotificationUserEnrollmentFragment,
} from "~/graphql";

import {
  sendUserAwayEmailTemplate,
  sendUserEnrollmentEmailTemplate,
  sendUserInactiveEmailTemplate,
  sendUserQuestionEmailTemplate,
  sendUserRequestedLinkEmailTemplate,
} from "./emailTemplates";

/**
 * Email Templates
 */

export type EmailTemplate =
  | { type: "Inactive"; data: null }
  | { type: "Away"; data: null }
  | {
      type: "Enrollment";
      data: { enrollment: NotificationUserEnrollmentFragment };
    }
  | { type: "Question"; data: null }
  | { type: "RequestedLink"; data: null };

export type Template = EmailTemplate["type"];

/**
 * Email Templates Fn
 */

export type EmailTemplatesArgs = {
  userId: string;
  user: GetUserEmailData;
  t: TFunction<Namespace, undefined>;
  loginUrl: string;
};

export type EmailTemplatesFn = (
  request: Request,
  args: EmailTemplatesArgs,
  data?: EmailTemplate["data"],
) => Promise<{
  type: EmailTemplate["type"];
  text: string;
  emailResponse: MessageSendingResponse;
}>;

/**
 * Email Templates Map
 */

export const emailTemplateMap = new MatchedMap<
  EmailTemplate["type"],
  EmailTemplatesFn
>([
  ["Inactive", sendUserInactiveEmailTemplate],
  ["Away", sendUserAwayEmailTemplate],
  ["Enrollment", sendUserEnrollmentEmailTemplate],
  ["Question", sendUserQuestionEmailTemplate],
  ["RequestedLink", sendUserRequestedLinkEmailTemplate],
  ["_", sendUserInactiveEmailTemplate],
]);
