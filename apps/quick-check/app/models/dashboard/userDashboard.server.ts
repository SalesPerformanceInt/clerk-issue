import { invariant } from "quickcheck-shared"

import { getUserApolloClientFromRequest } from "~/graphql"

/**
 * Get User Dashboard
 */

export const getUserDashboard = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request)

  const userDashboardData = await userApolloClient.getUserDashboardData()
  invariant(userDashboardData, "UserDashboard Data not found")

  const userDashboardWeeklyStreakCalendar = userApolloClient.getUserWeeklyStreakCalendar()
  const userDashboardAchievements = userApolloClient.getUserAchievements()
  const userDashboardActiveEnrollments = userApolloClient.getUserActiveEnrollments()
  const userDashboardCompletedEnrollments = userApolloClient.getUserCompletedEnrollments()

  return {
    userDashboardData,
    userDashboardWeeklyStreakCalendar,
    userDashboardAchievements,
    userDashboardActiveEnrollments,
    userDashboardCompletedEnrollments,
  }
}

/**
 * User Dashboard Type
 */

export type UserDashboard = NonNullable<Awaited<ReturnType<typeof getUserDashboard>>>
