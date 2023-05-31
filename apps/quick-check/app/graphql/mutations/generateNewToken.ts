import { graphql, type GraphQLClient } from "~/graphql";

export const GENERATE_NEW_TOKEN = graphql(/* GraphQL */ `
  mutation GenerateNewToken($userId: uuid!) {
    update_link_token(
      where: { user_id: { _eq: $userId } }
      _set: { active: false }
    ) {
      returning {
        active
        created_at
        id
        user_id
      }
    }
    insert_link_token_one(object: { user_id: $userId }) {
      active
      created_at
      id
      user {
        user_id
        first_name
        last_name
        phone_number
        sms_enabled
      }
    }
  }
`);

export async function generateNewToken(this: GraphQLClient, userId: string) {
  try {
    const { data } = await this.client.mutate({
      mutation: GENERATE_NEW_TOKEN,
      variables: { userId },
    });

    return data?.insert_link_token_one ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
