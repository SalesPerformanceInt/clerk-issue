import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_LANGUAGE = graphql(/* GraphQL */ `
  query GetUserLanguage($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      user_id
      language_preference
    }
  }
`);

export async function getUserLanguage(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_USER_LANGUAGE,
      variables: { userId },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return data.user_by_pk.language_preference;
  } catch (error) {
    logError({ error, log: "getUserLanguage" });
    return null;
  }
}
