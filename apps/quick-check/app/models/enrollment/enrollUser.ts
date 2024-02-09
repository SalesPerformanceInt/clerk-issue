import {
  EnrollUserEnrollment,
  getAdminApolloClientFromRequest,
} from "~/graphql";

import { getToday } from "~/utils/date";
import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

import { getAdminDataFromFromSession } from "~/models/session";
import { BasicUserData } from "~/models/user";

export const enrollUser = async (
  user: BasicUserData,
  taxonomyId: string,
  enrollmentData: EnrollUserEnrollment,
  request: Request,
) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const enrollment = await adminApolloClient.enrollUser(
    taxonomyId,
    enrollmentData,
    user,
  );

  if (enrollment) {
    await adminApolloClient.createEvent(
      {
        type: "EnrollmentAdded",
        data: {
          enrollment_id: enrollment.id,
          taxonomy_id: enrollment.taxonomy_id,
        },
      },
      user,
    );
  }

  const [now] = await getAdminDataFromFromSession(request);

  const today = getToday(now);

  const firstQuestion = enrollment?.first_question[0];

  if (enrollment && firstQuestion?.active_on === today) {
    await sendEmailTemplate(request, user.userId, now, {
      type: "Enrollment",
      data: { enrollment },
    });
  }

  return enrollment;
};
