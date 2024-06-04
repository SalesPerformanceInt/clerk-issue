import type { EnrollmentDashboardData, TaxonomyRankedEnrollment, UserDashboardActiveEnrollments } from "~/graphql"

import { prepareLeaderboardEnrollments } from "./handlers/prepareLeaderboardEnrollments"
import { prepareRankedEnrollments } from "./handlers/prepareRankedEnrollments"

/**
 * Get User Leaderboard
 */

export const getUserLeaderboard = (activeUserEnrollments: UserDashboardActiveEnrollments) => {
  return activeUserEnrollments
    .filter((enrollment) => enrollment.rank && enrollment.score)
    .sort((a, b) => a.rank! - b.rank!)
}

/**
 * Get Enrollment Leaderboard
 */

type GetEnrollmentLeaderboardProps = {
  userEnrollment: EnrollmentDashboardData
  rankedEnrollments: TaxonomyRankedEnrollment[]
}

export const getEnrollmentLeaderboard = ({ userEnrollment, rankedEnrollments }: GetEnrollmentLeaderboardProps) => {
  const enrollmentLeaderboard = prepareLeaderboardEnrollments(rankedEnrollments, userEnrollment)
  if (!enrollmentLeaderboard) return null

  const [allTimeLeaderboard, focusedLeaderboard] = [
    enrollmentLeaderboard.allTimeLeaderboard,
    enrollmentLeaderboard.focusedLeaderboard,
  ].map(prepareRankedEnrollments)

  return { allTimeLeaderboard, focusedLeaderboard }
}
