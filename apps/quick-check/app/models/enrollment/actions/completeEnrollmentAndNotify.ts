import { waitUntil } from "@vercel/functions";

import {
  getAdminApolloClientFromRequest,
  type NotificationUserEnrollmentFragment,
} from "~/graphql";

import { sendNotification } from "~/models/notification/notificationSender";
import { getAdminDataFromFromSession } from "~/models/session";

export const completeEnrollmentAndNotify = async (
  request: Request,
  enrollment: NotificationUserEnrollmentFragment,
) => {
  const [now] = await getAdminDataFromFromSession(request);

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  waitUntil(
    sendNotification({
      now,
      request,
      userId: enrollment.user_id,
      template: {
        notificationType: "CompletedEnrollment",
        notificationEnrollment: enrollment,
      },
    }),
  );

  waitUntil(
    adminApolloClient.createEvent(
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
    ),
  );
};
