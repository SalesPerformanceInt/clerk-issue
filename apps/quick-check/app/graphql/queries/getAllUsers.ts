import { graphql, type WithApolloClient } from "~/graphql";

export const GET_ALL_USERS = graphql(/* GraphQL */ `
  query GetAllUser {
    user(order_by: [{ created_at: asc }, { email: asc }]) {
      ...UserWithActiveToken
    }
  }
`);

export async function getAllUsers(this: WithApolloClient, now?: string) {
  try {
    const { data } = await this.client.query({
      query: GET_ALL_USERS,
      fetchPolicy: "network-only",
    });

    return data.user;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
