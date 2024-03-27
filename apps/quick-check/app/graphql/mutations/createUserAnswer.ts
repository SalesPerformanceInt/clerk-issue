import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyData,
  type GraphQLClient,
  type User_Answer_Insert_Input,
} from "~/graphql";

export const CREATE_USER_ANSWER = graphql(/* GraphQL */ `
  mutation CreateUserAnswer($user_answer: user_answer_insert_input!) {
    insert_user_answer_one(object: $user_answer) {
      ...BaseUserAnswer
    }
  }
`);

export async function createUserAnswer(
  this: GraphQLClient,
  user_answer: User_Answer_Insert_Input,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.mutate({
      mutation: CREATE_USER_ANSWER,
      variables: { user_answer },
    });

    return result.data?.insert_user_answer_one;
  } catch (error) {
    logError({ error, log: "createUserAnswer" });
  }
}
