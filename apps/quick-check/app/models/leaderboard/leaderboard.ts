import type { UserDashboardActiveEnrollments } from "~/graphql";

/**
 * Get User Leaderboard
 */

export const getUserLeaderboard = (
  activeUserEnrollments: UserDashboardActiveEnrollments,
) => {
  return activeUserEnrollments
    .filter((enrollment) => enrollment.rank && enrollment.score)
    .sort((a, b) => a.rank! - b.rank!)
    .slice(0, 4);
};
