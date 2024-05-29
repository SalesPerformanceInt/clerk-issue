import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

export const GET_USER_FOR_DAILY_EMAIL = graphql(/* GraphQL */ `
  query GetUsersForDailyEmail {
    user(where: { daily_email_enabled: { _eq: true } }) {
      user_id
    }
  }
`)

export async function getUsersForDailyEmail(this: GraphQLClient, _proxyData: GQLProxyData) {
  try {
    const result = await this.query({
      query: GET_USER_FOR_DAILY_EMAIL,
      fetchPolicy: "network-only",
    })

    return result?.data?.user
  } catch (error) {
    logError({ error, log: "getUsersForDailyEmail" })
    return null
  }
}
