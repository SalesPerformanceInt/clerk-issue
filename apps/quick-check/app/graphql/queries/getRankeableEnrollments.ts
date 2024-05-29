import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyTenantData, type GraphQLClient } from "~/graphql"

/**
 * GraphQL
 */

export const GET_RANKEABLE_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetRankeableEnrollments($taxonomyIds: [String!], $tenantId: String!) {
    user_enrollment(
      where: {
        taxonomy_id: { _in: $taxonomyIds }
        user: { tenant_id: { _eq: $tenantId } }
        user_questions: { user_answers_aggregate: { count: { predicate: { _gt: 0 } } } }
      }
      order_by: { score: desc }
    ) {
      ...BaseUserEnrollment
      user {
        first_name
        last_name
        tenant_id
        language_preference
      }
    }
  }
`)

/**
 * Get Rankeable Enrollments
 */

export async function getRankeableEnrollments(
  this: GraphQLClient,
  taxonomyIds: string[],
  proxyData: GQLProxyTenantData,
) {
  const { tenantId } = proxyData

  try {
    const { data } = await this.query({
      query: GET_RANKEABLE_ENROLLMENTS,
      variables: { taxonomyIds, tenantId },
      fetchPolicy: "no-cache",
    })

    return data.user_enrollment
  } catch (error) {
    logError({ error, log: "getRankeableEnrollments" })
    return null
  }
}

export type RankeableEnrollment = NonNullable<Awaited<ReturnType<typeof getRankeableEnrollments>>>[number]
