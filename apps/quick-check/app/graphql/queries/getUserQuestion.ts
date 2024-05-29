import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

export const GET_USER_QUESTION = graphql(/* GraphQL */ `
  query GetUserQuestion($id: uuid!) {
    user_question_by_pk(id: $id) {
      ...BaseUserQuestion
    }
  }
`)

export async function getUserQuestion(this: GraphQLClient, id: string, _proxyData: GQLProxyData) {
  try {
    const { data } = await this.query({
      query: GET_USER_QUESTION,
      variables: { id },
      fetchPolicy: "no-cache",
    })

    return data?.user_question_by_pk ?? null
  } catch (error) {
    logError({ error, log: "getUserQuestion" })
    return null
  }
}
