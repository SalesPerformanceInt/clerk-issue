import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

export const GET_USER = graphql(/* GraphQL */ `
  query GetUser($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      ...UserWithActiveToken
    }
  }
`);

export async function getUser(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const { data } = await this.query({
      query: GET_USER,
      variables: { userId },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return data.user_by_pk;
  } catch (error) {
    logError({ error, log: "getUser" });
    return null;
  }
}

export type GetUserData = NonNullable<Awaited<ReturnType<typeof getUser>>>;
