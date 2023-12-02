import { contentStack } from "~/contentstack.server";
import { QuickcheckEnrollmentEmail } from "emails";
import invariant from "tiny-invariant";

import { NotificationUserEnrollmentFragment } from "~/graphql";

import { sendEmail } from "~/utils/email/postmark/email";
import { remixI18next } from "~/utils/i18next.server";
import { getLoginUrl } from "~/utils/urls";

import { getUserActiveToken } from "~/models/token";

export const sendEnrollmentEmail = async (
  enrollment: NotificationUserEnrollmentFragment,
  request: Request,
) => {
  const { user } = enrollment;

  const activeToken = (
    await getUserActiveToken(request, {
      userId: user.user_id,
      tenantId: user.tenant_id,
    })
  ).id;

  const t = await remixI18next.getFixedT(user.language_preference);

  const loginUrl = getLoginUrl(activeToken, request);

  const firstQuestion = enrollment.first_question[0];

  invariant(firstQuestion, "No question found");

  const enrollmentTaxonomy = await contentStack.getTaxonomy(
    enrollment.taxonomy_id,
  );

  invariant(enrollmentTaxonomy, "No taxonomy found");

  const response = await sendEmail(
    user.email,
    t("email.enrollment.subject", {
      first_name: user.first_name,
      course_name: enrollmentTaxonomy.display_name,
    }),
    loginUrl,
    <QuickcheckEnrollmentEmail
      enrollmentTaxonomy={enrollmentTaxonomy}
      loginUrl={loginUrl}
      questionId={firstQuestion.id}
      t={t}
      userData={user}
    />,
  );

  return {
    type: "active",
    response,
  };
};