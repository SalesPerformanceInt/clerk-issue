import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

export const GET_USER_BY_EMAIL = graphql(/* GraphQL */ `
  query GetUserByEmail($email: String!) {
    user(where: { email: { _eq: $email } }) {
      ...BaseUser
    }
  }
`)

export async function getUserByEmail(this: GraphQLClient, email: string, _proxyData: GQLProxyData) {
  try {
    const { data } = await this.query({
      query: GET_USER_BY_EMAIL,
      variables: { email },
      fetchPolicy: "no-cache",
    })

    const user = data?.user[0]

    if (!user) return null

    return user
  } catch (error) {
    logError({ error, log: "getUserByEmail" })
    return null
  }
}
