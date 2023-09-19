import { graphql, type WithApolloClient } from "~/graphql";

import {
  getUserRankedEnrollments,
  prepareTaxonomyEnrollments,
} from "~/models/leaderboard";

/**
 * GraphQL
 */

export const GET_RANKED_USER_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetRankedUserEnrollments($taxonomyIds: [String!], $tenantId: String!) {
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
  taxonomyIds: string[],
  userId: string,
  tenantId: string,
) {
  try {
    const { data } = await this.client.query({
      query: GET_RANKED_USER_ENROLLMENTS,
      variables: { taxonomyIds, tenantId },
      fetchPolicy: "no-cache",
    });

    const taxonomyEnrollments = await prepareTaxonomyEnrollments(
      data.user_enrollment,
    );

    const rankedUserEnrollments = getUserRankedEnrollments(
      taxonomyEnrollments,
      userId,
    );

    return rankedUserEnrollments;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
