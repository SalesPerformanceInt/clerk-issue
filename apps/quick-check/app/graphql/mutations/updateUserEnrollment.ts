import { logError, type AtLeastOne } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyData,
  type User_Enrollment_Inc_Input,
  type User_Enrollment_Set_Input,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_USER_ENROLLMENT = graphql(/* GraphQL */ `
  mutation UpdateUserEnrollment(
    $id: uuid!
    $set: user_enrollment_set_input
    $inc: user_enrollment_inc_input
  ) {
    update_user_enrollment_by_pk(
      pk_columns: { id: $id }
      _set: $set
      _inc: $inc
    ) {
      ...BaseUserEnrollment
    }
  }
`);

export async function updateUserEnrollment(
  this: WithApolloClient,
  id: string,
  data: AtLeastOne<{
    set: User_Enrollment_Set_Input;
    inc: User_Enrollment_Inc_Input;
  }>,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER_ENROLLMENT,
      variables: { id, set: data.set || {}, inc: data.inc || {} },
    });

    return result.data?.update_user_enrollment_by_pk ?? null;
  } catch (error) {
    logError({ error, log: "updateUserEnrollment" });
    return null;
  }
}
