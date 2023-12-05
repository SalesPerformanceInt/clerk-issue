import {
  EnrollUserEnrollment,
  getAdminApolloClientFromRequest,
} from "~/graphql";

import { getToday } from "~/utils/date";
import { sendEnrollmentEmail } from "~/utils/email/sendEnrollmentEmail";

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

  const [now] = await getAdminDataFromFromSession(request);

  const today = getToday(now);

  const firstQuestion = enrollment?.first_question[0];

  if (enrollment && firstQuestion?.active_on === today) {
    await sendEnrollmentEmail(enrollment, request);
  }

  return enrollment;
};
