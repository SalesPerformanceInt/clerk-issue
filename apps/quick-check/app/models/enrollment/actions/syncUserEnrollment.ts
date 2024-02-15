import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  enrollmentErrorResponse,
  type EnrollmentActionFn,
} from "../enrollment";
import { notifyUserEnrollment } from "./notifyUserEnrollment";

/**
 * Sync UserEnrollment
 */

export const syncUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  newEnrollmentData,
  taxonomyId,
}) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const syncedEnrollment = await adminApolloClient.syncUserEnrollment(
    taxonomyId,
    newEnrollmentData,
    user,
  );

  if (!syncedEnrollment)
    return enrollmentErrorResponse(
      500,
      user.userId,
      newEnrollmentData.enrollment_id,
    );

  adminApolloClient.createEvent(
    {
      type: "EnrollmentAdded",
      data: {
        enrollment_id: syncedEnrollment.id,
        taxonomy_id: syncedEnrollment.taxonomy_id,
      },
    },
    user,
  );

  notifyUserEnrollment({ request, user, enrollment: syncedEnrollment });

  return {
    status: 201,
    message: "Enrollment created successfully",
    user_id: user.userId,
    enrollment_id: syncedEnrollment.id,
  };
};
