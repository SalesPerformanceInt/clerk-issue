import { graphql, type GraphQLClient } from "~/graphql";

export const GET_USER = graphql(/* GraphQL */ `
  query GetUser($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      ...UserWithActiveToken
    }
  }
`);

export async function getUser(this: GraphQLClient, userId: string) {
  try {
    const { data } = await this.client.query({
      query: GET_USER,
      variables: { userId },
      fetchPolicy: "network-only",
    });

    if (!data.user_by_pk) return null;

    return data.user_by_pk;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
