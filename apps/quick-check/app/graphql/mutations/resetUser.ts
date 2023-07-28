import { graphql, type WithApolloClient } from "~/graphql";

export const RESET_USER = graphql(/* GraphQL */ `
  mutation ResetUser($user_id: uuid!) {
    update_user_by_pk(
      pk_columns: { user_id: $user_id }
      _set: { next_user_question_id: null }
    ) {
      ...BaseUser
    }
    delete_learning_record(where: { user_id: { _eq: $user_id } }) {
      affected_rows
    }
    delete_user_enrollment(where: { user_id: { _eq: $user_id } }) {
      affected_rows
    }
  }
`);

export async function resetUser(this: WithApolloClient, user_id: string) {
  try {
    const result = await this.client.mutate({
      mutation: RESET_USER,
      variables: { user_id },
    });

    return result.data?.update_user_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
