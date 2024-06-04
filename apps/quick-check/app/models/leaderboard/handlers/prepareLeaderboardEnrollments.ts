import { DateTime } from "luxon"

import type { EnrollmentDashboardData, TaxonomyRankedEnrollment } from "~/graphql"

import type { LeaderboardEnrollment } from "../leaderboard.types"

/**
 * Leaderboard Enrollments Helpers
 */

const isLeaderboardEnrollment = (enrollment: TaxonomyRankedEnrollment): enrollment is LeaderboardEnrollment =>
  !!enrollment.rank

/**
 * Prepare Leaderboard Enrollments
 */

export const prepareLeaderboardEnrollments = (
  enrollments: TaxonomyRankedEnrollment[],
  userEnrollment: EnrollmentDashboardData,
) => {
  if (!enrollments.length) return null
  if (!userEnrollment.rank || !userEnrollment.score) return null

  const userEnrollmentDate = DateTime.fromISO(userEnrollment.start_date)

  const filteredEnrollments = enrollments.filter(isLeaderboardEnrollment)

  const allTimeLeaderboard = filteredEnrollments
  const focusedLeaderboard = allTimeLeaderboard
    .filter((enrollment) => {
      const enrollmentDate = DateTime.fromISO(enrollment.start_date)

      return Math.abs(enrollmentDate.diff(userEnrollmentDate, "days").days) <= 10
    })
    .sort((a, b) => b.score - a.score)

  return { allTimeLeaderboard, focusedLeaderboard }
}
