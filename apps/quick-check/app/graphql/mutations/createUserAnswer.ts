import {
  graphql,
  type User_Answer_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

import { logError } from "quickcheck-shared";

export const CREATE_USER_ANSWER = graphql(/* GraphQL */ `
  mutation CreateUserAnswer($user_answer: user_answer_insert_input!) {
    insert_user_answer_one(object: $user_answer) {
      ...BaseUserAnswer
    }
  }
`);

export async function createUserAnswer(
  this: WithApolloClient,
  user_answer: User_Answer_Insert_Input,
) {
  try {
    const result = await this.client.mutate({
      mutation: CREATE_USER_ANSWER,
      variables: { user_answer },
    });

    return result.data?.insert_user_answer_one;
  } catch (error) {
    logError({ error, log: "createUserAnswer" });
  }
}
