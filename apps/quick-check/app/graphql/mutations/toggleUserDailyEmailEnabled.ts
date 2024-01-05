import { invariant, logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";
import { GET_USER } from "~/graphql/queries";

export const TOGGLE_USER_DAILY_ENAIL_ENABLED = graphql(/* GraphQL */ `
  mutation ToggleUserDailyEmailEnabled(
    $userId: uuid!
    $daily_email_enabled: Boolean
  ) {
    update_user_by_pk(
      pk_columns: { user_id: $userId }
      _set: { daily_email_enabled: $daily_email_enabled }
    ) {
      ...BaseUser
    }
  }
`);

export async function toggleUserDailyEmailEnabled(
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

    const daily_email_enabled = !user_by_pk?.daily_email_enabled;

    const { data } = await this.client.mutate({
      mutation: TOGGLE_USER_DAILY_ENAIL_ENABLED,
      variables: { userId, daily_email_enabled },
      optimisticResponse: {
        update_user_by_pk: { ...user_by_pk, daily_email_enabled },
      },
    });

    return data?.update_user_by_pk?.daily_email_enabled ?? null;
  } catch (error) {
    logError({ error, log: "toggleUserDailyEmailEnabled" });
    return null;
  }
}
