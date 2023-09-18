import { graphql, type WithApolloClient } from "~/graphql";

export const GET_USER = graphql(/* GraphQL */ `
  query GetUser($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      ...UserWithActiveToken
    }
  }
`);

export async function getUser(this: WithApolloClient, userId: string) {
  try {
    const { data } = await this.client.query({
      query: GET_USER,
      variables: { userId },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return data.user_by_pk;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type GetUserData = NonNullable<Awaited<ReturnType<typeof getUser>>>;
