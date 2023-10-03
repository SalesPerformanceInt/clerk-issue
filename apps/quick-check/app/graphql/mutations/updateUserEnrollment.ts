import {
  graphql,
  type GQLProxyData,
  type User_Enrollment_Set_Input,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_USER_ENROLLMENT = graphql(/* GraphQL */ `
  mutation UpdateUserEnrollment($id: uuid!, $set: user_enrollment_set_input) {
    update_user_enrollment_by_pk(pk_columns: { id: $id }, _set: $set) {
      ...BaseUserEnrollment
    }
  }
`);

export async function updateUserEnrollment(
  this: WithApolloClient,
  id: string,
  set: User_Enrollment_Set_Input,
  _proxyData?: GQLProxyData,
) {
  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER_ENROLLMENT,
      variables: { id, set },
    });

    return result.data?.update_user_enrollment_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
