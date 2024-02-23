import { QuickcheckQuestionEmail, render } from "emails";

import { invariant } from "quickcheck-shared";

import { sendEmail } from "~/utils/email/postmark/email";

import { getQuestionData } from "~/models/question";

import type { EmailTemplatesFn } from "../emailTemplatesMap";

/**
 * Send User Question Email Template
 */

export const sendUserQuestionEmailTemplate: EmailTemplatesFn = async (
  _request,
  { user, t, loginUrl },
) => {
  const unansweredQuestions = user.unanswered_questions ?? 1;

  invariant(
    user.user_question_activated_today,
    "Active User Question not found",
  );

  const { questionItem, enrollmentTaxonomy } = await getQuestionData(
    user.user_question_activated_today,
  );

  const text = loginUrl;

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.question.subject", {
      first_name: user.first_name,
      count: unansweredQuestions,
    }),
    TextBody: text,
    HtmlBody: render(
      <QuickcheckQuestionEmail
        t={t}
        questionId={user.user_question_activated_today.id}
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        loginUrl={loginUrl}
        footer={{
          url: loginUrl,
          text: t("emails.question.footer.unanswered", {
            count: unansweredQuestions,
          }),
        }}
      />,
    ),
  });

  return {
    type: "Away",
    emailResponse,
    text,
  };
};
