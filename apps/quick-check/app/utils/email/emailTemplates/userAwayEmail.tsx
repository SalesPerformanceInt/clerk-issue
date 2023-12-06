import { QuickcheckQuestionEmail, render } from "emails";

import { invariant } from "quickcheck-shared";

import { sendEmail } from "~/utils/email/postmark/email";

import { getQuestionData } from "~/models/question";
import { generateNextQuestionForUser } from "~/models/user";

import type { EmailTemplatesFn } from "../emailTemplatesMap";

/**
 * Send User Away Email Template
 */

export const sendUserAwayEmailTemplate: EmailTemplatesFn = async (
  request,
  { userId, user, t, loginUrl },
) => {
  const nextQuestion = await generateNextQuestionForUser(request, userId);

  invariant(nextQuestion, "Next question not found");

  const { questionItem, enrollmentTaxonomy } =
    await getQuestionData(nextQuestion);

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.away.subject.come_back"),
    TextBody: loginUrl,
    HtmlBody: render(
      <QuickcheckQuestionEmail
        t={t}
        questionId={nextQuestion.id}
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        loginUrl={loginUrl}
        header={{
          url: loginUrl,
          titleText: t("emails.away.header.title"),
          subtitleText: t("emails.away.header.jump_back"),
        }}
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
