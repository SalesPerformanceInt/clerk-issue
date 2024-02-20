import { getContentStackClient } from "~/contentstack.server";

import { invariant, logError } from "quickcheck-shared";

import { getContentStackLanguage } from "~/contentstack";
import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_THEME = graphql(/* GraphQL */ `
  query GetUserTheme($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      language_preference
      tenant {
        theme_id
      }
    }
  }
`);

export async function getUserTheme(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const result = await this.client.query({
      query: GET_USER_THEME,
      variables: { userId },
    });

    invariant(result?.data?.user_by_pk?.tenant, "User not found");

    const {
      tenant: { theme_id },
      language_preference,
    } = result.data.user_by_pk;

    const contentStack = getContentStackClient(language_preference);

    const theme = await contentStack.getTheme(theme_id);

    return {
      theme: theme?.custom_styles ?? null,
      langauge: getContentStackLanguage(language_preference),
    };
  } catch (error) {
    logError({ error, log: "getUserTheme" });
    return null;
  }
}
