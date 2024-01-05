import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const RESET_USER = graphql(/* GraphQL */ `
  mutation ResetUser($userId: uuid!) {
    update_user_by_pk(
      pk_columns: { user_id: $userId }
      _set: { next_user_question_id: null }
    ) {
      ...BaseUser
    }
    delete_learning_record(where: { user_id: { _eq: $userId } }) {
      affected_rows
    }
    delete_user_enrollment(where: { user_id: { _eq: $userId } }) {
      affected_rows
    }
  }
`);

export async function resetUser(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const result = await this.client.mutate({
      mutation: RESET_USER,
      variables: { userId },
    });

    return result.data?.update_user_by_pk ?? null;
  } catch (error) {
    logError({ error, log: "resetUser" });
    return null;
  }
}
