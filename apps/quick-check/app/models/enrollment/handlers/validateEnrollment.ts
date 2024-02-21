import { MatchedMap } from "quickcheck-shared";

import type { EnrollmentBreakdown } from "../enrollment.types";

/**
 * Define Enrollment Action Type
 */

export const EnrollmentActionType = {
  Sync: "EnrollmentSync",
  Reset: "EnrollmentReset",
  Update: "EnrollmentUpdate",
  Delete: "EnrollmentDelete",
  Reject: "EnrollmentReject",
  Ignore: "EnrollmentIgnore",
} as const;

export type EnrollmentActionType =
  (typeof EnrollmentActionType)[keyof typeof EnrollmentActionType];

type EnrollmentValidation = {
  type: EnrollmentActionType;
  message?: string;
};

/**
 * Enrollment Validation Map
 */

export const enrollmentValidationMap = new MatchedMap<
  EnrollmentBreakdown,
  EnrollmentValidation
>([
  /**
   * Prohibited Updates
   */

  [
    { prohibitedUpdateStatus: "UserId" },
    {
      type: EnrollmentActionType.Reject,
      message: "Invalid Data: Cannot update the user_id of an enrollment",
    },
  ],
  [
    { prohibitedUpdateStatus: "TopicId" },
    {
      type: EnrollmentActionType.Reject,
      message: "Invalid Data: Cannot update the cms_topic_id of an enrollment",
    },
  ],

  /**
   * Invalid Data
   */

  [
    { newEnrollment: true, startDateStatus: null, expirationDateStatus: null },
    {
      type: EnrollmentActionType.Reject,
      message:
        "Invalid Data: Cannot create an enrollment without a start date and expiration date",
    },
  ],
  [
    { newEnrollment: true, startDateStatus: "New", expirationDateStatus: null },
    {
      type: EnrollmentActionType.Reject,
      message:
        "Invalid Data: Cannot create an enrollment without an expiration date",
    },
  ],
  [
    { newEnrollment: true, startDateStatus: null, expirationDateStatus: "New" },
    {
      type: EnrollmentActionType.Reject,
      message: "Invalid Data: Cannot create an enrollment without a start date",
    },
  ],

  /**
   * New Enrollment
   */

  [
    {
      newEnrollment: true,
      startDateStatus: "New",
      expirationDateStatus: "New",
    },
    { type: EnrollmentActionType.Sync },
  ],

  /**
   * Start Date Changed
   */

  [{ startDateStatus: null }, { type: EnrollmentActionType.Delete }],
  [{ startDateStatus: "New" }, { type: EnrollmentActionType.Sync }],
  [{ startDateStatus: "Past" }, { type: EnrollmentActionType.Reset }],
  [{ startDateStatus: "Future" }, { type: EnrollmentActionType.Reset }],

  /**
   * Expiration Date Changed
   */

  [{ expirationDateStatus: null }, { type: EnrollmentActionType.Update }],
  [{ expirationDateStatus: "New" }, { type: EnrollmentActionType.Update }],
  [{ expirationDateStatus: "Past" }, { type: EnrollmentActionType.Update }],
  [{ expirationDateStatus: "Future" }, { type: EnrollmentActionType.Update }],

  /**
   * Nothing Changed
   */

  [
    { startDateStatus: undefined, expirationDateStatus: undefined },
    {
      type: EnrollmentActionType.Ignore,
      message: "Ignored Request: Enrollment Data has no changes.",
    },
  ],

  /**
   * Fallback
   */

  ["_", { type: EnrollmentActionType.Reject, message: "Invalid Data" }],
]);
