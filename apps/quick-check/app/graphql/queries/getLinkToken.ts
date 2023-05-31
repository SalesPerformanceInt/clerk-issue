import { graphql, type GraphQLClient } from "~/graphql";

export const GET_LINK_TOKEN = graphql(/* GraphQL */ `
  query GetLinkToken($id: String!) {
    link_token_by_pk(id: $id) {
      id
      user_id
      created_at
      active
      user {
        created_at
        first_name
        last_name
        next_question_id
        user_id
      }
    }
  }
`);

export async function getLinkToken(this: GraphQLClient, id: string) {
  try {
    const { data } = await this.client.query({
      query: GET_LINK_TOKEN,
      variables: { id },
    });

    if (!data.link_token_by_pk) return null;

    return data.link_token_by_pk;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
