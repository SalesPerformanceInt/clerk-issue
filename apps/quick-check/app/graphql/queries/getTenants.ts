import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

export const GET_TENANTS = graphql(/* GraphQL */ `
  query GetTenants {
    tenant(order_by: [{ tenant_id: asc }]) {
      tenant_id
      users_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`)

export async function getTenants(this: GraphQLClient, _proxyData: GQLProxyData) {
  try {
    const result = await this.query({
      query: GET_TENANTS,
      fetchPolicy: "network-only",
    })

    return result?.data?.tenant
  } catch (error) {
    logError({ error, log: "getTenants" })
    return null
  }
}
