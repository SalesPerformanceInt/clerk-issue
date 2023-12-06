import {
  getAdminApolloClientFromRequest,
  type EnrollmentData,
} from "~/graphql";

import { prepareLeaderboardEnrollments } from "./handlers/prepareLeaderboardEnrollments";

/**
 * Get Enrollment Leaderboard
 */

export const getEnrollmentLeaderboard = async (
  request: Request,
  userEnrollment: EnrollmentData,
) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const enrollments = await adminApolloClient.getRankeableEnrollments(
    [userEnrollment.taxonomy_id],
    { tenantId: userEnrollment.user.tenant_id },
  );

  if (!enrollments) return null;

  const leaderboardEnrollments = prepareLeaderboardEnrollments(
    enrollments,
    userEnrollment,
  );

  return leaderboardEnrollments;
};
