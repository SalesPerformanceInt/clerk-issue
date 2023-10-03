import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

/**
 * GraphQL
 */

export const GET_TAXONOMY_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetTaxonomyEnrollments($taxonomyIds: [String!], $tenantId: String!) {
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
 * Get Taxonomy Enrollments
 */

export async function getTaxonomyEnrollments(
  this: WithApolloClient,
  taxonomyIds: string[],
  tenantId: string,
  _proxyData?: GQLProxyData,
) {
  try {
    const { data } = await this.client.query({
      query: GET_TAXONOMY_ENROLLMENTS,
      variables: { taxonomyIds, tenantId },
      fetchPolicy: "no-cache",
    });

    return data.user_enrollment;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
