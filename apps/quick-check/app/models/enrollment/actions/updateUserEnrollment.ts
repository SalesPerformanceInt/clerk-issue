import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  enrollmentErrorResponse,
  type EnrollmentActionFn,
} from "../enrollment";

/**
 * Update UserEnrollment
 */

export const updateUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  newEnrollmentData,
  currentEnrollment,
}) => {
  const errorResponse = enrollmentErrorResponse(
    500,
    user.userId,
    newEnrollmentData.enrollment_id,
  );

  if (!currentEnrollment) return errorResponse;

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const updatedEnrollment = await adminApolloClient.updateUserEnrollment(
    newEnrollmentData.enrollment_id,
    { set: { expiration_date: newEnrollmentData.expiration_date } },
  );

  if (!updatedEnrollment) return errorResponse;

  adminApolloClient.createEvent(
    {
      type: "EnrollmentUpdated",
      data: {
        enrollment_id: updatedEnrollment.id,
        taxonomy_id: updatedEnrollment.taxonomy_id,
        previous_expiration_date: currentEnrollment.expiration_date,
        new_expiration_date: newEnrollmentData.expiration_date,
      },
    },
    user,
  );

  return {
    status: 200,
    message: "Enrollment updated successfully",
    user_id: user.userId,
    enrollment_id: updatedEnrollment.id,
  };
};
