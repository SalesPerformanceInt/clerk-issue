import { contentStack } from "~/contentstack.server";

import {
  graphql,
  type GQLUserProxyData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_THEME = graphql(/* GraphQL */ `
  query GetUserTheme($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      tenant {
        theme_id
      }
    }
  }
`);

export async function getUserTheme(
  this: WithApolloClient,
  proxyData: GQLUserProxyData,
) {
  const { userId } = proxyData;

  try {
    const result = await this.client.query({
      query: GET_USER_THEME,
      variables: { userId },
    });

    const themeId = result?.data?.user_by_pk?.tenant?.theme_id;

    if (themeId) {
      const theme = await contentStack.getTheme(themeId);
      return theme?.custom_styles;
    }

    return null;
  } catch (error) {
    console.log("ERROR - getUserTheme", error);
    return null;
  }
}
