import { graphql, type GraphQLClient } from "~/graphql";

import { QUESTION_IDS } from "~/models/user";

export const RESET_USER = graphql(/* GraphQL */ `
  mutation ResetUser($user_id: uuid!, $next_question_id: String) {
    update_user_by_pk(
      pk_columns: { user_id: $user_id }
      _set: { next_question_id: $next_question_id }
    ) {
      user_id
      next_question_id
      learning_records {
        id
      }
    }
    delete_learning_record(where: { user_id: { _eq: $user_id } }) {
      affected_rows
    }
  }
`);

export async function resetUser(this: GraphQLClient, user_id: string) {
  try {
    const { data } = await this.client.mutate({
      mutation: RESET_USER,
      variables: { user_id, next_question_id: QUESTION_IDS[0] },
    });

    return data?.update_user_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
