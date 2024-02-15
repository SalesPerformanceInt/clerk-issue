import { DateTime } from "luxon";
import { isDefined } from "remeda";

import { MatchedMap } from "quickcheck-shared";

import type { EnrollmentData, EnrollUserEnrollment } from "~/graphql";

import { BasicUserData } from "~/models/user";

/**
 * Enrollment Actions
 */

export const EnrollmentActions = {
  Sync: "EnrollmentSync",
  Reset: "EnrollmentReset",
  Update: "EnrollmentUpdate",
  Delete: "EnrollmentDelete",
  Reject: "EnrollmentReject",
} as const;

export type EnrollmentActions =
  (typeof EnrollmentActions)[keyof typeof EnrollmentActions];

/**
 * Enrollment Action Fn
 */

type EnrollmentActionProps = {
  request: Request;
  user: BasicUserData;
  taxonomyId: string;
  newEnrollmentData: EnrollUserEnrollment;
  currentEnrollment?: EnrollmentData | null;
};

type EnrollmentActionResponse = {
  status: number;
  message: string;
  user_id?: string;
  enrollment_id?: string;
};

export type EnrollmentActionFn = (
  props: EnrollmentActionProps,
) => Promise<EnrollmentActionResponse>;

export const enrollmentErrorResponse = (
  status: 400 | 500,
  user_id?: string,
  enrollment_id?: string,
): EnrollmentActionResponse => ({
  status,
  message: 400 ? "Invalid Request" : "Internal Server Error",
  ...(user_id && { user_id }),
  ...(enrollment_id && { enrollment_id }),
});

/**
 * Enrollment Validation
 */

export type EnrollmentBreakdown = {
  validData?: boolean;
  newEnrollment?: boolean;
  startDateStatus?: "Past" | "Future" | null;
  expirationDateStatus?: "Past" | "Future" | null;
};

export const enrollmentValidationMap = new MatchedMap<
  EnrollmentBreakdown,
  EnrollmentActions
>([
  [{ validData: false }, EnrollmentActions.Reject],

  [{ newEnrollment: true }, EnrollmentActions.Sync],

  [{ startDateStatus: null }, EnrollmentActions.Delete],
  [{ startDateStatus: "Past" }, EnrollmentActions.Reset],
  [{ startDateStatus: "Future" }, EnrollmentActions.Reset],

  [{ expirationDateStatus: null }, EnrollmentActions.Update],
  [{ expirationDateStatus: "Past" }, EnrollmentActions.Update],
  [{ expirationDateStatus: "Future" }, EnrollmentActions.Update],

  ["_", EnrollmentActions.Reject],
]);

/**
 * Enrollment Date Status
 */

const getEnrollmentDateStatus = (
  currentDate: string | null,
  newDate?: string | null,
): EnrollmentBreakdown["startDateStatus"] => {
  if (!isDefined(newDate)) return newDate;
  if (!isDefined(currentDate)) return "Future";

  const currentDateTime = DateTime.fromISO(currentDate);
  const newDateTime = DateTime.fromISO(newDate);

  if (currentDateTime > newDateTime) return "Past";
  if (currentDateTime < newDateTime) return "Future";

  return undefined;
};

/**
 * Breakdown Enrollment
 */

export type BreakdownEnrollmentProps = {
  newEnrollmentData: EnrollUserEnrollment;
  currentEnrollment: EnrollmentData | null;
};

export const breakdownEnrollment = ({
  currentEnrollment,
  newEnrollmentData,
}: BreakdownEnrollmentProps): EnrollmentBreakdown => {
  const validBaseData =
    !isDefined.strict(newEnrollmentData.user_id) &&
    !isDefined.strict(newEnrollmentData.topic_id);

  const validData = currentEnrollment
    ? validBaseData
    : validBaseData &&
      isDefined(newEnrollmentData.start_date) &&
      isDefined(newEnrollmentData.expiration_date);

  if (!validData) return { validData };
  if (!currentEnrollment) return { newEnrollment: true };

  const startDateStatus = getEnrollmentDateStatus(
    currentEnrollment.start_date,
    newEnrollmentData.start_date,
  );

  const expirationDateStatus = getEnrollmentDateStatus(
    currentEnrollment.expiration_date,
    newEnrollmentData.expiration_date,
  );

  return isDefined.strict(startDateStatus)
    ? { startDateStatus }
    : { expirationDateStatus };
};
