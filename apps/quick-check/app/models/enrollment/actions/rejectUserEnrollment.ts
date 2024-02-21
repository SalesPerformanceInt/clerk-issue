import type { EnrollmentActionFn } from "../enrollment.types";
import { prepareEnrollmentRejected } from "../handlers/prepareEnrollmentResponse";

/**
 * Reject UserEnrollment
 */

export const rejectUserEnrollment: EnrollmentActionFn = async ({
  logEnrollmentEvent,
  enrollmentResponseMessage,
}) => {
  logEnrollmentEvent({ type: "EnrollmentRejected" });

  return prepareEnrollmentRejected(enrollmentResponseMessage);
};
