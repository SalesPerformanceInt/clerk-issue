import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql"

export const GET_ADMIN_USER_DATA = graphql(/* GraphQL */ `
  query GetAdminUserData($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      ...AdminUserData
      user_enrollments {
        id
        taxonomy_id
        created_at
        score
        rank
        expiration_date
        start_date
        user_questions_aggregate {
          aggregate {
            count
          }
        }
      }
      user_questions(order_by: [{ active_on: asc, retired_on: asc_nulls_first }]) {
        id
        taxonomy_id
        question_id
        active_on
        retired_on
        last_answered_on
        retired_on
        title
        user_enrollment {
          id
          taxonomy_id
        }
        user_answers(order_by: [{ created_at: asc }]) {
          id
          correct
          created_at
        }
        user_answers_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`)

export async function getAdminUserData(this: GraphQLClient, proxyData: GQLProxyUserData) {
  const { userId } = proxyData

  try {
    const { data } = await this.query({
      query: GET_ADMIN_USER_DATA,
      variables: { userId },
      fetchPolicy: "no-cache",
    })

    if (!data?.user_by_pk) return null

    return data.user_by_pk
  } catch (error) {
    logError({ error, log: "getAdminUserData" })
    return null
  }
}
