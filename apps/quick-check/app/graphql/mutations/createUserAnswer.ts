import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyData,
  type User_Answer_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

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
  _proxyData?: GQLProxyData,
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
