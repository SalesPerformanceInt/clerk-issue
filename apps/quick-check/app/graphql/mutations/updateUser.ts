import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type User_Set_Input,
  type WithApolloClient,
} from "~/graphql";

export const UPDATE_USER = graphql(/* GraphQL */ `
  mutation UpdateUser($userId: uuid!, $set: user_set_input) {
    update_user_by_pk(pk_columns: { user_id: $userId }, _set: $set) {
      ...BaseUser
    }
  }
`);

export async function updateUser(
  this: WithApolloClient,
  set: User_Set_Input,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const result = await this.client.mutate({
      mutation: UPDATE_USER,
      variables: { userId, set },
    });

    return result.data?.update_user_by_pk ?? null;
  } catch (error) {
    logError({ error, log: "updateUser" });
    return null;
  }
}
