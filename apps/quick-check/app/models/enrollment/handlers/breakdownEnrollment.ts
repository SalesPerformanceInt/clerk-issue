import { DateTime } from "luxon"
import { isDefined } from "remeda"

import type { EnrollmentData } from "~/graphql"

import type { EnrollmentBreakdown, EnrollmentNewData } from "../enrollment.types"

/**
 * Validate Enrollment Dates
 */

const getEnrollmentDateStatus = (
  newDate: string | null,
  currentDate?: string | null,
): EnrollmentBreakdown["startDateStatus"] => {
  if (!isDefined(newDate)) return newDate
  if (!isDefined(currentDate)) return "New"

  const currentDateTime = DateTime.fromISO(currentDate)
  const newDateTime = DateTime.fromISO(newDate)

  if (currentDateTime > newDateTime) return "Past"
  if (currentDateTime < newDateTime) return "Future"

  return undefined
}

/**
 * Prohibited Enrollment Updates
 */

const getProhibitedUpdateStatus = ({
  enrollmentNewData: { user_id, topic_id },
  currentEnrollment,
}: BreakdownEnrollmentProps) => {
  if (!currentEnrollment) return undefined

  if (user_id !== currentEnrollment.user_id) return "UserId"
  if (topic_id !== currentEnrollment.taxonomy_id) return "TopicId"

  return undefined
}

/**
 * Breakdown Enrollment
 */

export type BreakdownEnrollmentProps = {
  enrollmentNewData: EnrollmentNewData
  currentEnrollment: EnrollmentData | null
}

export const breakdownEnrollment = ({
  enrollmentNewData,
  currentEnrollment,
}: BreakdownEnrollmentProps): EnrollmentBreakdown => {
  const newEnrollment = !currentEnrollment

  const prohibitedUpdateStatus = getProhibitedUpdateStatus({
    enrollmentNewData,
    currentEnrollment,
  })

  const startDateStatus = getEnrollmentDateStatus(enrollmentNewData.start_date, currentEnrollment?.start_date)

  const expirationDateStatus = getEnrollmentDateStatus(
    enrollmentNewData.expiration_date,
    currentEnrollment?.expiration_date,
  )

  if (newEnrollment) return { newEnrollment, startDateStatus, expirationDateStatus }

  if (isDefined.strict(prohibitedUpdateStatus)) return { prohibitedUpdateStatus }

  if (isDefined.strict(startDateStatus)) return { startDateStatus }
  if (isDefined.strict(expirationDateStatus)) return { expirationDateStatus }

  return { startDateStatus, expirationDateStatus }
}
