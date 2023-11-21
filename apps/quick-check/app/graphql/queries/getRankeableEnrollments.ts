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
  ) {
    user_enrollment(
      where: {
        taxonomy_id: { _in: $taxonomyIds }
        user: { tenant_id: { _eq: $tenantId } }
        user_questions: {
          user_answers_aggregate: {
            count: {
              predicate: { _gt: 0 }
            }
          }
        }
      }
      order_by: { score: desc }
    ) {
      ...BaseUserEnrollment
      user {
        first_name
        last_name
        tenant_id
      }
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
  const { tenantId } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_RANKEABLE_ENROLLMENTS,
      variables: { taxonomyIds, tenantId },
      fetchPolicy: "no-cache",
    });

    return data.user_enrollment;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type RankeableEnrollment = NonNullable<
  Awaited<ReturnType<typeof getRankeableEnrollments>>
>[number];
