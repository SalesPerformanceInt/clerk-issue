import { graphql, type GraphQLClient } from "~/graphql";

export const GET_ALL_USERS = graphql(/* GraphQL */ `
  query GetAllUser {
    user(order_by: { created_at: asc }) {
      ...UserWithActiveToken
    }
  }
`);

export async function getAllUsers(this: GraphQLClient) {
  try {
    const { data } = await this.client.query({
      query: GET_ALL_USERS,
    });

    return data.user;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
