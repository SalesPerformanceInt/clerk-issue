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
  invariant(
    user.user_question_activated_today,
    "Active User Question not found",
  );

  const { questionItem, enrollmentTaxonomy } = await getQuestionData(
    user.user_question_activated_today,
  );

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.question.subject", {
      first_name: user.first_name,
    }),
    TextBody: loginUrl,
    HtmlBody: render(
      <QuickcheckQuestionEmail
        t={t}
        questionId={user.user_question_activated_today.id}
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        loginUrl={loginUrl}
        footer={{
          url: loginUrl,
          titleText: t("emails.question.footer.unanswered", {
            unanswered: t("common.unanswered", {
              count: user.unanswered_questions,
            }),
            courses_capabilities: t("common.courses_capabilities", {
              count: user.active_enrollments,
            }),
          }),
          subtitleText: t("emails.question.footer.jump_back"),
        }}
      />,
    ),
  });

  return {
    type: "Away",
    emailResponse,
  };
};
