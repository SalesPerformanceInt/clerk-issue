import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  enrollmentErrorResponse,
  type EnrollmentActionFn,
} from "../enrollment";
import { syncUserEnrollment } from "./syncUserEnrollment";

/**
 * Reset UserEnrollment
 */

export const resetUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  newEnrollmentData,
  taxonomyId,
  currentEnrollment,
}) => {
  const errorResponse = enrollmentErrorResponse(
    500,
    user.userId,
    newEnrollmentData.enrollment_id,
  );

  if (!currentEnrollment) return errorResponse;

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const resetEnrollment = await adminApolloClient.resetUserEnrollment(
    newEnrollmentData.enrollment_id,
  );

  if (!resetEnrollment) return errorResponse;

  await syncUserEnrollment({
    request,
    user,
    newEnrollmentData,
    taxonomyId,
  });

  adminApolloClient.createEvent(
    {
      type: "EnrollmentReset",
      data: {
        enrollment_id: resetEnrollment.id,
        taxonomy_id: resetEnrollment.taxonomy_id,
        previous_start_date: currentEnrollment.start_date,
        new_start_date: newEnrollmentData.start_date,
        previous_expiration_date: currentEnrollment.expiration_date,
        new_expiration_date: newEnrollmentData.expiration_date,
      },
    },
    user,
  );

  return {
    status: 202,
    message: "Enrollment reset successfully",
    user_id: user.userId,
    enrollment_id: resetEnrollment.id,
  };
};
