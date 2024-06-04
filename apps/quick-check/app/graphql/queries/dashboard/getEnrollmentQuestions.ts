import { getContentStackClient } from "~/contentstack.server"

import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

export const GET_ENROLLMENT_QUESTIONS = graphql(/* GraphQL */ `
  query GetEnrollmentQuestions($enrollmentId: uuid!) {
    user_enrollment_by_pk(id: $enrollmentId) {
      user {
        language_preference
      }
      user_questions {
        id
        taxonomy_id
        retired_on
        ...UserQuestionFirstLastAnswer
      }
    }
  }
`)

export async function getEnrollmentQuestions(this: GraphQLClient, enrollmentId: string, _proxyData: GQLProxyData) {
  try {
    const { data } = await this.query({
      query: GET_ENROLLMENT_QUESTIONS,
      variables: { enrollmentId },
      fetchPolicy: "no-cache",
    })

    const enrollment = data?.user_enrollment_by_pk
    if (!enrollment) return null

    const language = enrollment.user.language_preference
    const contentStack = getContentStackClient(language)

    const user_questions = await Promise.all(
      enrollment.user_questions.map(async (user_question) => {
        const taxonomy = await contentStack.getTaxonomy(user_question.taxonomy_id)
        return {
          ...user_question,
          taxonomy,
          taxonomy_name: taxonomy?.display_name ?? "",
        }
      }),
    )

    return user_questions
  } catch (error) {
    logError({ error, log: "getEnrollmentQuestions" })
    return null
  }
}

export type EnrollmentDashboardQuestionsData = NonNullable<Awaited<ReturnType<typeof getEnrollmentQuestions>>>
