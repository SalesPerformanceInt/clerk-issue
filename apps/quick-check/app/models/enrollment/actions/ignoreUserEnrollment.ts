import type { EnrollmentActionFn } from "../enrollment.types";
import { prepareEnrollmentIgnored } from "../handlers/prepareEnrollmentResponse";

/**
 * Ignore UserEnrollment
 */

export const ignoreUserEnrollment: EnrollmentActionFn = async ({
  logEnrollmentEvent,
  enrollmentResponseMessage,
}) => {
  logEnrollmentEvent({ type: "EnrollmentIgnored" });

  return prepareEnrollmentIgnored(enrollmentResponseMessage);
};