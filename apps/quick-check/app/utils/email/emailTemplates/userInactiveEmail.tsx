import { QuickcheckBasicEmail, render } from "emails";

import { invariant } from "quickcheck-shared";

import { sendEmail } from "~/utils/email/postmark/email";

import { generateNextQuestionForUser } from "~/models/user";

import type { EmailTemplatesFn } from "../emailTemplatesMap";

/**
 * Send User Inactive Email Template
 */

export const sendUserInactiveEmailTemplate: EmailTemplatesFn = async (
  request,
  { userId, user, t, loginUrl },
) => {
  const nextQuestion = await generateNextQuestionForUser(request, userId);

  invariant(nextQuestion, "Next question not found");

  const text = loginUrl;

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.inactive.subject"),
    TextBody: text,
    HtmlBody: render(
      <QuickcheckBasicEmail
        t={t}
        greetingsText={t("emails.inactive.greeting", {
          first_name: user.first_name,
        })}
        bodyText={t("emails.inactive.body")}
        button={{
          url: `${loginUrl}?p=/question/${nextQuestion.id}`,
          text: t("emails.enrollment.button"),
        }}
      />,
    ),
  });

  return {
    type: "Inactive",
    emailResponse,
    text,
  };
};
