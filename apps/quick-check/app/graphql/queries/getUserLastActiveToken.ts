import { DateTime } from "luxon";

import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_LAST_ACTIVE_TOKEN = graphql(/* GraphQL */ `
  query GetUserLastActiveToken($userId: uuid!) {
    link_token(
      where: { user_id: { _eq: $userId }, active: { _eq: true } }
      order_by: { created_at: desc }
      limit: 1
    ) {
      id
      user_id
      tenant_id
      created_at
      active
    }
  }
`);

export async function getUserLastActiveToken(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_USER_LAST_ACTIVE_TOKEN,
      variables: { userId },
    });

    const token = data.link_token[0];

    if (!token) return null;

    const { hours } = DateTime.now()
      .diff(DateTime.fromISO(token.created_at), "hours")
      .toObject();

    if (!hours || hours >= 24) return null;

    return token;
  } catch (error) {
    logError({ error, log: "getUserLastActiveToken" });
    return null;
  }
}
