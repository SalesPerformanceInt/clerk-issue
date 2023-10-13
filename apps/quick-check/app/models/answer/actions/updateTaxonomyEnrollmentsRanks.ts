import { getAdminApolloClientFromRequest } from "~/graphql";

import type { EnrollmentsByTaxonomy } from "~/models/leaderboard/leaderboard.types";
import { rankAllEnrollments } from "~/models/leaderboard/rankedEnrollments";
import { prepareTaxonomyEnrollments } from "~/models/leaderboard/taxonomyEnrollments";

import type { SaveAnswerData } from "../answer";

/**
 * Update User Enrollments Ranks
 */

const getTaxonomyRankedEnrollments = (
  taxonomyEnrollments: EnrollmentsByTaxonomy[],
) => {
  return taxonomyEnrollments.flatMap(({ enrollments }) =>
    rankAllEnrollments(enrollments).map(
      ({ rankedEnrollmentSet }) => rankedEnrollmentSet,
    ),
  );
};

export const updateTaxonomyEnrollmentsRanks = async (
  request: Request,
  { userQuestion, user }: SaveAnswerData,
) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const enrollments = await adminApolloClient.getRankeableEnrollments(
    [userQuestion.user_enrollment.taxonomy_id],
    { tenantId: user.tenant_id },
  );
  if (!enrollments) return null;

  const taxonomyEnrollments = await prepareTaxonomyEnrollments(
    enrollments,
    user.user_id,
  );

  const rankedEnrollments = getTaxonomyRankedEnrollments(taxonomyEnrollments);

  await adminApolloClient.updateUserEnrollmentsRanks(rankedEnrollments);
};
