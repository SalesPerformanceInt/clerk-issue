import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyTenantData, type GraphQLClient } from "~/graphql"

import { PaginationParams, SearchParams } from "~/components"

export const GET_TENANT_USERS = graphql(/* GraphQL */ `
  query GetTenantUser($tenantId: String!, $perPage: Int, $offset: Int, $search: String) {
    user(
      limit: $perPage
      offset: $offset
      where: {
        _and: [
          { tenant_id: { _eq: $tenantId } }
          {
            _or: [
              { first_name: { _ilike: $search } }
              { last_name: { _ilike: $search } }
              { email: { _ilike: $search } }
            ]
          }
        ]
      }
      order_by: [{ created_at: asc }, { email: asc }]
    ) {
      ...AdminUserData
    }
    user_aggregate(
      where: {
        _and: [
          { tenant_id: { _eq: $tenantId } }
          {
            _or: [
              { first_name: { _ilike: $search } }
              { last_name: { _ilike: $search } }
              { email: { _ilike: $search } }
            ]
          }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`)

export async function getTenantUsers(
  this: GraphQLClient,
  pagination: PaginationParams,
  { search }: SearchParams,
  proxyData: GQLProxyTenantData,
) {
  const { tenantId } = proxyData

  try {
    const result = await this.query({
      query: GET_TENANT_USERS,
      fetchPolicy: "network-only",
      variables: { tenantId, ...pagination, search: `%${search}%` },
    })

    return { users: result?.data?.user, count: result?.data?.user_aggregate?.aggregate?.count ?? 0 }
  } catch (error) {
    logError({ error, log: "getTenantUsers" })
    return {
      users: [],
      count: 0,
    }
  }
}
