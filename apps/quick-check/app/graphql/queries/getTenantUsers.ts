import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyTenantData, type GraphQLClient } from "~/graphql"

export const GET_TENANT_USERS = graphql(/* GraphQL */ `
  query GetTenantUser($tenantId: String!) {
    user(where: { tenant_id: { _eq: $tenantId } }, order_by: [{ created_at: asc }, { email: asc }]) {
      ...AdminUserData
    }
  }
`)

export async function getTenantUsers(this: GraphQLClient, proxyData: GQLProxyTenantData) {
  const { tenantId } = proxyData
  try {
    const result = await this.query({
      query: GET_TENANT_USERS,
      fetchPolicy: "network-only",
      variables: { tenantId },
    })

    return result?.data?.user
  } catch (error) {
    logError({ error, log: "getTenantUsers" })
    return null
  }
}
