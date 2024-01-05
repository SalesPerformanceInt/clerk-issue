import { getContentStackClient } from "~/contentstack.server";
import { QuickcheckBasicEmail, render } from "emails";

import { invariant } from "quickcheck-shared";

import { sendEmail } from "~/utils/email/postmark/email";

import type { EmailTemplatesFn } from "../emailTemplatesMap";

/**
 * Send User Enrollment Email Template
 */

export const sendUserEnrollmentEmailTemplate: EmailTemplatesFn = async (
  _request,
  { user, t, loginUrl },
  data,
) => {
  const enrollment = data?.enrollment;
  invariant(enrollment, "User Enrollment data not found");

  const firstQuestion = enrollment.first_question[0];
  invariant(firstQuestion, "No question found");

  const contentStack = getContentStackClient(user.language_preference);

  const enrollmentTaxonomy = await contentStack.getTaxonomy(
    enrollment.taxonomy_id,
  );
  invariant(enrollmentTaxonomy, "No taxonomy found");

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.enrollment.subject", {
      first_name: user.first_name,
      course_name: enrollmentTaxonomy.display_name,
    }),
    TextBody: loginUrl,
    HtmlBody: render(
      <QuickcheckBasicEmail
        t={t}
        greetingsText={t("emails.enrollment.greeting", {
          first_name: user.first_name,
        })}
        bodyText={t("emails.enrollment.body", {
          course_name: enrollmentTaxonomy.display_name,
        })}
        button={{
          url: `${loginUrl}?p=/question/${firstQuestion.id}`,
          text: t("emails.enrollment.button"),
        }}
      />,
    ),
  });

  return {
    type: "Enrollment",
    emailResponse,
  };
};
