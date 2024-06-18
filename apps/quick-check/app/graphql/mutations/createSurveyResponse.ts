import { escape } from "validator"

import { logError } from "quickcheck-shared"

import { GQLProxyUserData, graphql, type GraphQLClient, type Product_Survey_Insert_Input } from "~/graphql"

import { SURVEY_ID } from "~/utils/envs.server"
import { capturePosthogEvent } from "~/utils/posthog"

import { SurveyResponse } from "~/components"

export const CREATE_SURVEY_RESPONSE = graphql(/* GraphQL */ `
  mutation CreateSurveyResponse($response: product_survey_insert_input!) {
    insert_product_survey_one(object: $response) {
      id
      user_id
      sentiment
      comment
      created_at
    }
  }
`)

export async function createSurveyResponse(
  this: GraphQLClient,
  { sentiment, comment }: SurveyResponse,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData

  const response: Product_Survey_Insert_Input = {
    sentiment,
    comment: comment && escape(comment),
    user_id: userId,
  }

  try {
    const result = await this.mutate({
      mutation: CREATE_SURVEY_RESPONSE,
      variables: { response },
    })

    await capturePosthogEvent({
      distinctId: userId,
      event: "survey sent",
      properties: {
        $survey_id: SURVEY_ID,
        $survey_response: sentiment,
        $survey_response_1: comment,
      },
    })

    return result.data?.insert_product_survey_one
  } catch (error) {
    logError({ error, log: "createSurveyResponse" })
  }
}
