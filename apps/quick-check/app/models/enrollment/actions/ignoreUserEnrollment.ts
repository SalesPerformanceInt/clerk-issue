import { waitUntil } from "@vercel/functions";

import type { EnrollmentActionFn } from "../enrollment.types";
import { prepareEnrollmentIgnored } from "../handlers/prepareEnrollmentResponse";

/**
 * Ignore UserEnrollment
 */

export const ignoreUserEnrollment: EnrollmentActionFn = async ({
  logEnrollmentEvent,
  enrollmentResponseMessage,
}) => {
  waitUntil(logEnrollmentEvent({ type: "EnrollmentIgnored" }));

  return prepareEnrollmentIgnored(enrollmentResponseMessage);
};
