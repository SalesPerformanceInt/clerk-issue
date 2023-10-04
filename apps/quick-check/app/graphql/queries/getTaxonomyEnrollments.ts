import {
  graphql,
  type GQLProxyTenantData,
  type WithApolloClient,
} from "~/graphql";

/**
 * GraphQL
 */

export const GET_TAXONOMY_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetTaxonomyEnrollments(
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
 * Get Taxonomy Enrollments
 */

export async function getTaxonomyEnrollments(
  this: WithApolloClient,
  taxonomyIds: string[],
  proxyData: GQLProxyTenantData,
) {
  const { tenantId, now } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_TAXONOMY_ENROLLMENTS,
      variables: { taxonomyIds, tenantId, now },
      fetchPolicy: "no-cache",
    });

    return data.user_enrollment;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
