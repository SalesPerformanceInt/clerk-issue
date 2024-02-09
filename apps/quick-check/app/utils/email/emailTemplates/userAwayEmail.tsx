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

  const text = loginUrl;

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.away.subject.come_back"),
    TextBody: text,
    HtmlBody: render(
      <QuickcheckQuestionEmail
        t={t}
        questionId={nextQuestion.id}
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        loginUrl={loginUrl}
        header={{
          url: loginUrl,
          text: t("emails.away.header"),
        }}
        footer={{
          url: loginUrl,
          text: t("emails.question.footer.unanswered", {
            count: user.unanswered_questions,
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
