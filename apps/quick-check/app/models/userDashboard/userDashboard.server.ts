import { getUserApolloClientFromRequest } from "~/graphql";

/**
 * Get User Dashboard
 */

export const getUserDashboard = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const userDashboardData = await userApolloClient.getUserDashboardData();

  const userDashboardWeeklyStreakCalendar =
    userApolloClient.getUserWeeklyStreakCalendar();
  const userDashboardAchievements = userApolloClient.getUserAchievements();
  const userDashboardActiveEnrollments =
    userApolloClient.getUserActiveEnrollments();
  const userDashboardCompletedEnrollments =
    userApolloClient.getUserCompletedEnrollments();
  const userDashboardSurveyEligibility =
    userApolloClient.getSurveyEligibility();

  return {
    userDashboardData,
    userDashboardWeeklyStreakCalendar,
    userDashboardAchievements,
    userDashboardActiveEnrollments,
    userDashboardCompletedEnrollments,
    userDashboardSurveyEligibility,
  };
};

/**
 * User Dashboard Type
 */

export type UserDashboard = NonNullable<
  Awaited<ReturnType<typeof getUserDashboard>>
>;
