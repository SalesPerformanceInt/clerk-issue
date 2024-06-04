import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

import { PaginationParams, SearchParams } from "~/components"

export const GET_TENANTS = graphql(/* GraphQL */ `
  query GetTenants($perPage: Int, $offset: Int, $search: String) {
    tenant(
      order_by: [{ tenant_id: asc }]
      limit: $perPage
      offset: $offset
      where: { tenant_id: { _ilike: $search } }
    ) {
      tenant_id
      users_aggregate {
        aggregate {
          count
        }
      }
    }
    tenant_aggregate(where: { tenant_id: { _ilike: $search } }) {
      aggregate {
        count
      }
    }
  }
`)

export async function getTenants(
  this: GraphQLClient,
  pagination: PaginationParams,
  { search }: SearchParams,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.query({
      query: GET_TENANTS,
      fetchPolicy: "network-only",
      variables: { ...pagination, search: `%${search}%` },
    })

    return {
      tenants: result?.data?.tenant,
      count: result?.data?.tenant_aggregate?.aggregate?.count ?? 0,
    }
  } catch (error) {
    logError({ error, log: "getTenants" })
    return {
      tenants: [],
      count: 0,
    }
  }
}
