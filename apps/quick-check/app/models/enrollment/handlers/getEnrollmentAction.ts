import { MatchedMap } from "quickcheck-shared";

import { deleteUserEnrollment } from "../actions/deleteUserEnrollment";
import { resetUserEnrollment } from "../actions/resetUserEnrollment";
import { syncUserEnrollment } from "../actions/syncUserEnrollment";
import { updateUserEnrollment } from "../actions/updateUserEnrollment";
import {
  breakdownEnrollment,
  EnrollmentActions,
  enrollmentErrorResponse,
  enrollmentValidationMap,
  type EnrollmentActionFn,
  type BreakdownEnrollmentProps as GetEnrollmentActionProps,
} from "../enrollment";

/**
 * Enrollment Actions Map
 */

const enrollmentActionsMap = new MatchedMap<
  EnrollmentActions,
  EnrollmentActionFn
>([
  [EnrollmentActions.Sync, syncUserEnrollment],
  [EnrollmentActions.Reset, resetUserEnrollment],
  [EnrollmentActions.Update, updateUserEnrollment],
  [EnrollmentActions.Delete, deleteUserEnrollment],
  [EnrollmentActions.Reject, async () => enrollmentErrorResponse(400)],
  ["_", async () => enrollmentErrorResponse(400)],
]);

/**
 * Get Enrollment Action
 */

export const getEnrollmentAction = ({
  currentEnrollment,
  newEnrollmentData,
}: GetEnrollmentActionProps) => {
  const enrollmentBreakdown = breakdownEnrollment({
    currentEnrollment,
    newEnrollmentData,
  });

  const enrollmentAction = enrollmentValidationMap.get(enrollmentBreakdown);
  const enrollmentActionHandler = enrollmentActionsMap.get(enrollmentAction);

  return enrollmentActionHandler;
};
