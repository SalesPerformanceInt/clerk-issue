import { pipe } from "remeda";

import { graphql, type WithApolloClient } from "~/graphql";

import {
  getUserRankedEnrollments,
  prepareTaxonomyEnrollments,
} from "~/models/leaderboard";

/**
 * GraphQL
 */

export const GET_USER_ENROLLMENT_SCORES = graphql(/* GraphQL */ `
  query GetUserEnrollmentScores($taxonomyIds: [String!], $tenantId: String!) {
    user_enrollment(
      where: {
        taxonomy_id: { _in: $taxonomyIds }
        user: { tenant_id: { _eq: $tenantId } }
      }
      order_by: { score: desc }
    ) {
      id
      user_id
      score
      rank
      taxonomy_id
    }
  }
`);

/**
 * Ranked User Enrollments
 */

export async function getRankedUserEnrollments(
  this: WithApolloClient,
  userId: string,
  taxonomyIds: string[],
  tenantId: string,
) {
  try {
    const { data } = await this.client.query({
      query: GET_USER_ENROLLMENT_SCORES,
      variables: { taxonomyIds, tenantId },
      fetchPolicy: "no-cache",
    });

    const rankedUserEnrollments = pipe(
      await prepareTaxonomyEnrollments(data.user_enrollment),
      (taxonomyEnrollments) =>
        getUserRankedEnrollments(taxonomyEnrollments, userId),
    );

    return rankedUserEnrollments;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
