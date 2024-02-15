import type { SyncUserEnrollment } from "~/graphql";

import { getToday } from "~/utils/date";
import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

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

  if (enrollment && firstQuestion?.active_on === today) {
    sendEmailTemplate(request, user.userId, now, {
      type: "Enrollment",
      data: { enrollment },
    });
  }
};
