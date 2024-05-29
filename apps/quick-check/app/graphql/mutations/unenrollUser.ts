import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql"

export const UNENROLL_USER = graphql(/* GraphQL */ `
  mutation UnenrollUser($userId: uuid!, $enrollmentId: uuid!) {
    update_user_by_pk(pk_columns: { user_id: $userId }, _set: { next_user_question_id: null }) {
      ...BaseUser
    }
    delete_user_enrollment(where: { user_id: { _eq: $userId }, id: { _eq: $enrollmentId } }) {
      affected_rows
    }
  }
`)

export async function unenrollUser(this: GraphQLClient, enrollmentId: string, proxyData: GQLProxyUserData) {
  const { userId } = proxyData

  try {
    const result = await this.mutate({
      mutation: UNENROLL_USER,
      variables: { userId, enrollmentId },
    })

    return result.data?.update_user_by_pk ?? null
  } catch (error) {
    logError({ error, log: "unenrollUser" })
    return null
  }
}
