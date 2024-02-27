import {
  getAdminApolloClientFromRequest,
  type NotificationUserEnrollmentFragment,
} from "~/graphql";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

import { getAdminDataFromFromSession } from "~/models/session";

export const completeEnrollmentAndNotify = async (
  request: Request,
  enrollment: NotificationUserEnrollmentFragment,
) => {
  const [now] = await getAdminDataFromFromSession(request);

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  await sendEmailTemplate(request, enrollment.user_id, now, {
    type: "CompletedEnrollment",
    data: { enrollment },
  });

  await adminApolloClient.createEvent(
    {
      type: "EnrollmentCompleted",
      data: {
        enrollment_id: enrollment.id,
        score: enrollment.score,
        rank: enrollment.rank ?? 0,
        taxonomy_id: enrollment.taxonomy_id,
      },
    },
    { userId: enrollment.user_id, tenantId: enrollment.user.tenant_id },
  );
};
