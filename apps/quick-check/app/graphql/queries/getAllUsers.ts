import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

export const GET_ALL_USERS = graphql(/* GraphQL */ `
  query GetAllUser {
    user(order_by: [{ created_at: asc }, { email: asc }]) {
      ...UserWithActiveToken
    }
  }
`)

export async function getAllUsers(this: GraphQLClient, _proxyData: GQLProxyData) {
  try {
    const result = await this.query({
      query: GET_ALL_USERS,
      fetchPolicy: "network-only",
    })

    return result?.data?.user
  } catch (error) {
    logError({ error, log: "getAllUsers" })
    return null
  }
}
