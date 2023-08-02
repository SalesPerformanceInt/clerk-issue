import {
  graphql,
  type User_Question_Inc_Input,
  type User_Question_Set_Input,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_USER_QUESTION = graphql(/* GraphQL */ `
  mutation UpdateUserQuestion(
    $id: uuid!
    $set: user_question_set_input
    $inc: user_question_inc_input
  ) {
    update_user_question_by_pk(
      pk_columns: { id: $id }
      _set: $set
      _inc: $inc
    ) {
      ...BaseUserQuestion
    }
  }
`);

export async function updateUserQuestion(
  this: WithApolloClient,
  id: string,
  set: User_Question_Set_Input,
  inc: User_Question_Inc_Input,
) {
  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER_QUESTION,
      variables: { id, set, inc },
    });

    return result.data?.update_user_question_by_pk ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
