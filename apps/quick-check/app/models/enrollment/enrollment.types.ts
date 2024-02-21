import type { Expand } from "quickcheck-shared";

import type { EnrollmentData, EnrollUserEnrollment } from "~/graphql";

import type { BasicUserData } from "~/models/user";

import type { LogEnrollmentEvent } from "./handlers/logEnrollmentEvent";

/**
 * Enrollment New Data
 */

export type EnrollmentNewData = Expand<
  {
    start_date: string | null;
    expiration_date: string | null;
  } & Pick<EnrollUserEnrollment, "enrollment_id" | "user_id" | "topic_id">
>;

/**
 * Enrollment Breakdown
 */

export type EnrollmentBreakdown = {
  newEnrollment?: boolean;
  prohibitedUpdateStatus?: "UserId" | "TopicId";
  startDateStatus?: "Past" | "Future" | "New" | null;
  expirationDateStatus?: "Past" | "Future" | "New" | null;
};

/**
 * Enrollment Action Fn
 */

export type EnrollmentActionProps = {
  request: Request;
  user: BasicUserData;
  taxonomyId: string;
  enrollmentNewData: EnrollmentNewData;
  currentEnrollment?: EnrollmentData | null;
  enrollmentResponseMessage?: string;
};

export type EnrollmentActionResponse = {
  status: number;
  message: string;
  user_id?: string;
  enrollment_id?: string;
};

export type EnrollmentActionFn = (
  props: EnrollmentActionProps & LogEnrollmentEvent,
) => Promise<EnrollmentActionResponse>;
