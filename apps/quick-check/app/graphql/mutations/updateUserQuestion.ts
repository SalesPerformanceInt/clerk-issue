import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyData,
  type User_Question_Set_Input,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_USER_QUESTION = graphql(/* GraphQL */ `
  mutation UpdateUserQuestion($id: uuid!, $set: user_question_set_input) {
    update_user_question_by_pk(pk_columns: { id: $id }, _set: $set) {
      ...BaseUserQuestion
    }
  }
`);

export async function updateUserQuestion(
  this: WithApolloClient,
  id: string,
  set: User_Question_Set_Input,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER_QUESTION,
      variables: { id, set },
    });

    return result.data?.update_user_question_by_pk ?? null;
  } catch (error) {
    logError({ error, log: "updateUserQuestion" });
    return null;
  }
}
