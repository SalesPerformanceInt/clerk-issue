import { getAdminApolloClientFromRequest, type DashboardData } from "~/graphql";

import { getUserRankedEnrollments } from "./rankedEnrollments";
import { prepareTaxonomyEnrollments } from "./taxonomyEnrollments";

/**
 * Get User Leaderboard
 */

export const getUserLeaderboard = async (
  request: Request,
  dashboard: DashboardData,
) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const enrollments = await adminApolloClient.getRankeableEnrollments(
    dashboard.taxonomy_ids,
    { tenantId: dashboard.tenant_id },
  );

  if (!enrollments) {
    return null;
  }

  const taxonomyEnrollments = await prepareTaxonomyEnrollments(
    enrollments,
    dashboard.user_id,
  );

  const rankedEnrollments = await Promise.all(
    getUserRankedEnrollments(request, taxonomyEnrollments, dashboard.user_id),
  );

  const sortedRankedEnrollments = rankedEnrollments
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 4);

  return sortedRankedEnrollments;
};
