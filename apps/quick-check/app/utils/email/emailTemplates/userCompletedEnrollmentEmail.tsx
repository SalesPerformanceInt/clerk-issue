import { getContentStackClient } from "~/contentstack.server";
import { QuickcheckBasicEmail, render } from "emails";

import { invariant } from "quickcheck-shared";

import { sendEmail } from "~/utils/email/postmark/email";

import type { EmailTemplatesFn } from "../emailTemplatesMap";

export const sendUserCompletedEnrollmentEmail: EmailTemplatesFn = async (
  _request,
  { user, t, loginUrl },
  data,
) => {
  const enrollment = data?.enrollment;
  invariant(enrollment, "User Enrollment data not found");

  const contentStack = getContentStackClient(user.language_preference);

  const enrollmentTaxonomy = await contentStack.getTaxonomy(
    enrollment.taxonomy_id,
  );
  invariant(enrollmentTaxonomy, "No taxonomy found");

  const courseName = enrollmentTaxonomy.display_name;
  const firstName = user.first_name;

  const text = loginUrl;

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.completed_enrollment.subject", {
      first_name: firstName,
      course_name: courseName,
    }),
    TextBody: text,
    HtmlBody: render(
      <QuickcheckBasicEmail
        t={t}
        greetingsText={t("emails.completed_enrollment.greeting", {
          first_name: firstName,
        })}
        bodyText={t("emails.completed_enrollment.body", {
          course_name: courseName,
        })}
        button={{
          url: `${loginUrl}?p=/dashboard/enrollment/${enrollment.id}`,
          text: t("emails.completed_enrollment.button"),
        }}
        footerText={t("emails.completed_enrollment.footer")}
      />,
    ),
  });

  return {
    type: "Enrollment",
    emailResponse,
    text,
  };
};
