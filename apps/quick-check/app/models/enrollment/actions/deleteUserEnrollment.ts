import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  enrollmentErrorResponse,
  type EnrollmentActionFn,
} from "../enrollment";

/**
 * Delete UserEnrollment
 */

export const deleteUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  newEnrollmentData,
}) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const deletedEnrollment = await adminApolloClient.unenrollUser(
    newEnrollmentData.enrollment_id,
    { userId: user.userId },
  );

  if (!deletedEnrollment)
    return enrollmentErrorResponse(
      500,
      user.userId,
      newEnrollmentData.enrollment_id,
    );

  adminApolloClient.createEvent(
    {
      type: "EnrollmentDeleted",
      data: {
        enrollment_id: newEnrollmentData.enrollment_id,
        user_id: user.userId,
      },
    },
    user,
  );

  return {
    status: 204,
    message: "Enrollment deleted successfully",
    user_id: user.userId,
    enrollment_id: newEnrollmentData.enrollment_id,
  };
};
