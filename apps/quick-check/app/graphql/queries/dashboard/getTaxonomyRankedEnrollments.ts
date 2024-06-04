import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyTenantData, type GraphQLClient } from "~/graphql"

export const GET_TAXONOMY_RANKED_ENROLLMENTS = graphql(/* GraphQL */ `
  query GetTaxonomyRankedEnrollments($taxonomyIds: [String!], $tenantId: String!) {
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

export async function getTaxonomyRankedEnrollments(
  this: GraphQLClient,
  taxonomyIds: string[],
  proxyData: GQLProxyTenantData,
) {
  const { tenantId } = proxyData

  try {
    const { data } = await this.query({
      query: GET_TAXONOMY_RANKED_ENROLLMENTS,
      variables: { taxonomyIds, tenantId },
      fetchPolicy: "no-cache",
    })

    return data.user_enrollment
  } catch (error) {
    logError({ error, log: "getTaxonomyRankedEnrollments" })
    return null
  }
}

export type TaxonomyRankedEnrollment = NonNullable<Awaited<ReturnType<typeof getTaxonomyRankedEnrollments>>>[number]
