import { graphql, type User_Set_Input, type WithApolloClient } from "~/graphql";

export const UPDATE_USER = graphql(/* GraphQL */ `
  mutation UpdateUser($user_id: uuid!, $set: user_set_input) {
    update_user_by_pk(pk_columns: { user_id: $user_id }, _set: $set) {
      ...BaseUser
    }
  }
`);

export async function updateUser(
  this: WithApolloClient,
  set: User_Set_Input,
  user_id: string,
) {
  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER,
      variables: { user_id, set },
    });

    return result.data?.update_user_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
