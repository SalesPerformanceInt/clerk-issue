import { MatchedMap } from "quickcheck-shared"

import { deleteUserEnrollment } from "../actions/deleteUserEnrollment"
import { ignoreUserEnrollment } from "../actions/ignoreUserEnrollment"
import { rejectUserEnrollment } from "../actions/rejectUserEnrollment"
import { resetUserEnrollment } from "../actions/resetUserEnrollment"
import { syncUserEnrollment } from "../actions/syncUserEnrollment"
import { updateUserEnrollment } from "../actions/updateUserEnrollment"
import type { EnrollmentActionFn } from "../enrollment.types"

import { breakdownEnrollment, type BreakdownEnrollmentProps } from "./breakdownEnrollment"
import { EnrollmentActionType, enrollmentValidationMap } from "./validateEnrollment"

/**
 * Enrollment Actions Map
 */

const enrollmentActionsMap = new MatchedMap<EnrollmentActionType, EnrollmentActionFn>([
  [EnrollmentActionType.Sync, syncUserEnrollment],
  [EnrollmentActionType.Reset, resetUserEnrollment],
  [EnrollmentActionType.Update, updateUserEnrollment],
  [EnrollmentActionType.Delete, deleteUserEnrollment],
  [EnrollmentActionType.Ignore, ignoreUserEnrollment],
  [EnrollmentActionType.Reject, rejectUserEnrollment],
  ["_", rejectUserEnrollment],
])

/**
 * Get Enrollment Action
 */

type GetEnrollmentActionProps = BreakdownEnrollmentProps

export const getEnrollmentAction = ({ enrollmentNewData, currentEnrollment }: GetEnrollmentActionProps) => {
  const enrollmentBreakdown = breakdownEnrollment({
    enrollmentNewData,
    currentEnrollment,
  })

  const { type: enrollmentActionType, message: enrollmentResponseMessage } =
    enrollmentValidationMap.get(enrollmentBreakdown)

  const enrollmentActionFn = enrollmentActionsMap.get(enrollmentActionType)

  return {
    enrollmentActionFn,
    enrollmentResponseMessage,
  }
}
