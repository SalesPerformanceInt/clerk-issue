import type { SyncUserEnrollment } from "~/graphql";

import { getToday } from "~/utils/date";

import { sendNotification } from "~/models/notification/notificationSender";
import type { Schedule } from "~/models/notification/notificationService";
import { getAdminDataFromFromSession } from "~/models/session";
import type { BasicUserData } from "~/models/user";

/**
 * Notify UserEnrollment
 */

type NotifyUserEnrollmentProps = {
  request: Request;
  user: BasicUserData;
  enrollment: SyncUserEnrollment;
};

export const notifyUserEnrollment = async ({
  request,
  user,
  enrollment,
}: NotifyUserEnrollmentProps) => {
  const [now] = await getAdminDataFromFromSession(request);
  const today = getToday(now);

  const firstQuestion = enrollment?.first_question[0];

  if (enrollment && firstQuestion?.active_on) {
    const schedule: Schedule =
      firstQuestion.active_on > today
        ? { scheduledDate: firstQuestion.active_on }
        : { now: true };

    sendNotification({
      now,
      request,
      schedule,
      userId: user.userId,
      template: {
        notificationType: "NewEnrollment",
        notificationEnrollment: enrollment,
      },
    });
  }
};
