import { MatchedMap } from "quickcheck-shared";

import type { EnrollmentActionResponse } from "../enrollment.types";

/**
 * Enrollment Response Codes & Messages
 */

type EnrollmentResponseCodes = 200 | 201 | 202 | 208 | 400 | 500;

const enrollmentResponseMessagesMap = new MatchedMap<
  EnrollmentResponseCodes,
  string
>([
  [200, "Enrollment updated successfully"],
  [201, "Enrollment created successfully"],
  [202, "Enrollment reset successfully"],
  [208, "Ignored Request"],
  [400, "Invalid Request"],
  [500, "Internal Server Error"],
  ["_", "Internal Server Error"],
]);

/**
 * Prepare Enrollment Response
 */

type PrepareEnrollmentResponseProps = {
  status: EnrollmentResponseCodes;
  message?: string;
};

export const prepareEnrollmentResponse = ({
  status,
  message,
}: PrepareEnrollmentResponseProps): EnrollmentActionResponse => ({
  status,
  message: message || enrollmentResponseMessagesMap.get(status),
});

/**
 * Prepare Enrollment Fallbacks
 */

export const prepareEnrollmentIgnored = (message?: string) =>
  prepareEnrollmentResponse({ status: 208, message });

export const prepareEnrollmentRejected = (message?: string) =>
  prepareEnrollmentResponse({ status: 400, message });

export const prepareEnrollmentError = (message?: string) =>
  prepareEnrollmentResponse({ status: 500, message });
