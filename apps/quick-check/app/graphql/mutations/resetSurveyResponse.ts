import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql"

export const RESET_SURVEY_RESPONSE = graphql(/* GraphQL */ `
  mutation ResetSurveyResponse($userId: uuid!) {
    delete_product_survey(where: { user_id: { _eq: $userId } }) {
      affected_rows
    }
  }
`)

export async function resetSurveyResponse(this: GraphQLClient, proxyData: GQLProxyUserData) {
  const { userId } = proxyData

  try {
    const result = await this.mutate({
      mutation: RESET_SURVEY_RESPONSE,
      variables: { userId },
    })

    return result.data?.delete_product_survey?.affected_rows
  } catch (error) {
    logError({ error, log: "resetSurveyResponse" })
    return null
  }
}
