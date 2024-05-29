import { logError, type AtLeastOne } from "quickcheck-shared"

import {
  graphql,
  type GQLProxyData,
  type GraphQLClient,
  type User_Enrollment_Inc_Input,
  type User_Enrollment_Set_Input,
} from "~/graphql"

export const UPDATE_USER_ENROLLMENT = graphql(/* GraphQL */ `
  mutation UpdateUserEnrollment($id: uuid!, $set: user_enrollment_set_input, $inc: user_enrollment_inc_input) {
    update_user_enrollment_by_pk(pk_columns: { id: $id }, _set: $set, _inc: $inc) {
      ...NotificationUserEnrollment
      unretired_questions: user_questions_aggregate(where: { retired_on: { _is_null: true } }) {
        aggregate {
          count
        }
      }
    }
  }
`)

export async function updateUserEnrollment(
  this: GraphQLClient,
  id: string,
  data: AtLeastOne<{
    set: User_Enrollment_Set_Input
    inc: User_Enrollment_Inc_Input
  }>,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.mutate({
      mutation: UPDATE_USER_ENROLLMENT,
      variables: { id, set: data.set || {}, inc: data.inc || {} },
    })

    return result.data?.update_user_enrollment_by_pk ?? null
  } catch (error) {
    logError({ error, log: "updateUserEnrollment" })
    return null
  }
}
