import { getAdminApolloClient, type DashboardData } from "~/graphql";

import { getUserRankedEnrollments } from "./rankedEnrollments";
import { prepareTaxonomyEnrollments } from "./taxonomyEnrollments";

/**
 * Get User Leaderboard
 */

export const getUserLeaderboard = async (dashboard: DashboardData) => {
  const adminApolloClient = getAdminApolloClient();

  const enrollments = await adminApolloClient.getTaxonomyEnrollments(
    dashboard.taxonomy_ids,
    dashboard.tenant_id,
  );

  if (!enrollments) {
    return null;
  }

  const taxonomyEnrollments = await prepareTaxonomyEnrollments(
    enrollments,
    dashboard.user_id,
  );

  const rankedEnrollments = getUserRankedEnrollments(
    taxonomyEnrollments,
    dashboard.user_id,
  );

  const sortedRankedEnrollments = rankedEnrollments
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 4);

  return sortedRankedEnrollments;
};
