import { invariant, logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";
import { GET_USER } from "~/graphql/queries";

export const TOGGLE_USER_SHOW_LEADERBOARD = graphql(/* GraphQL */ `
  mutation ToggleUserShowLeaderboard(
    $userId: uuid!
    $show_leaderboard: Boolean
  ) {
    update_user_by_pk(
      pk_columns: { user_id: $userId }
      _set: { show_leaderboard: $show_leaderboard }
    ) {
      ...BaseUser
    }
  }
`);

export async function toggleUserShowLeaderboard(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const {
      data: { user_by_pk },
    } = await this.client.query({
      query: GET_USER,
      variables: { userId },
    });

    invariant(user_by_pk, "No user found");

    const show_leaderboard = !user_by_pk?.show_leaderboard;

    const { data } = await this.client.mutate({
      mutation: TOGGLE_USER_SHOW_LEADERBOARD,
      variables: { userId, show_leaderboard },
      optimisticResponse: {
        update_user_by_pk: { ...user_by_pk, show_leaderboard },
      },
    });

    return data?.update_user_by_pk?.show_leaderboard ?? null;
  } catch (error) {
    logError({ error, log: "toggleUserShowLeaderboard" });
    return null;
  }
}
