import {
  graphql,
  type GQLProxyTenantData,
  type WithApolloClient,
} from "~/graphql";

/**
 * GraphQL
 */

export const GET_RANKEABLE_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetRankeableEnrollments(
    $taxonomyIds: [String!]
    $tenantId: String!
    $now: timestamptz!
  ) {
    user_enrollment(
      where: {
        taxonomy_id: { _in: $taxonomyIds }
        user: { tenant_id: { _eq: $tenantId } }
        created_at: { _lte: $now }
        user_questions: {
          user_answers_aggregate: {
            count: {
              predicate: { _gt: 0 }
              filter: { created_at: { _lte: $now } }
            }
          }
        }
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
 * Get Rankeable Enrollments
 */

export async function getRankeableEnrollments(
  this: WithApolloClient,
  taxonomyIds: string[],
  proxyData: GQLProxyTenantData,
) {
  const { tenantId, now } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_RANKEABLE_ENROLLMENTS,
      variables: { taxonomyIds, tenantId, now },
      fetchPolicy: "no-cache",
    });

    return data.user_enrollment;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
