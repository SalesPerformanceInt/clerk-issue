import {
  graphql,
  type User_Question_Set_Input,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_USER_QUESTION = graphql(/* GraphQL */ `
  mutation UpdateUserQuestion(
    $userId: uuid!
    $questionId: String
    $input: user_question_set_input
  ) {
    update_user_question(
      where: {
        user_id: { _eq: $userId }
        _and: { question_id: { _eq: $questionId } }
      }
      _set: $input
    ) {
      affected_rows
      returning {
        active_on
        id
        question_id
        status
        user_id
      }
    }
  }
`);

export async function updateUserQuestion(
  this: WithApolloClient,
  questionId: string,
  input: User_Question_Set_Input,
  userId: string,
) {
  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER_QUESTION,
      variables: { userId, questionId, input },
    });

    return result.data?.update_user_question ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
