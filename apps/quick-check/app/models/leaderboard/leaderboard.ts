import type { DashboardData } from "~/graphql";

/**
 * Get User Leaderboard
 */

export const getUserLeaderboard = (
  activeUserEnrollments: DashboardData["active_user_enrollments"],
) => {
  return activeUserEnrollments
    .filter((enrollment) => enrollment.rank && enrollment.score)
    .sort((a, b) => a.rank! - b.rank!)
    .slice(0, 4);
};
