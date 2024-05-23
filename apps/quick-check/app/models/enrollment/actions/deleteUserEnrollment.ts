import { getAdminApolloClientFromRequest } from "~/graphql";

import { getNotificationHandle } from "~/models/notification/notificationService";

import type { EnrollmentActionFn } from "../enrollment.types";
import {
  prepareEnrollmentError,
  prepareEnrollmentResponse,
} from "../handlers/prepareEnrollmentResponse";

/**
 * Delete UserEnrollment
 */

export const deleteUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  enrollmentNewData,
  logEnrollmentEvent,
}) => {
  const enrollmentErrorResponse = prepareEnrollmentError();

  const adminApolloClient = await getAdminApolloClientFromRequest(request);
  const deletedEnrollment = await adminApolloClient.unenrollUser(
    enrollmentNewData.enrollment_id,
    { userId: user.userId },
  );

  if (!deletedEnrollment) return enrollmentErrorResponse;

  await logEnrollmentEvent({ type: "EnrollmentDeleted" });

  const notificationHandle = await getNotificationHandle({
    name: "NewEnrollment",
    id: enrollmentNewData.enrollment_id,
  });

  if (notificationHandle) await notificationHandle.cancel();

  return prepareEnrollmentResponse({
    status: 200,
    message: "Enrollment deleted successfully.",
  });
};
