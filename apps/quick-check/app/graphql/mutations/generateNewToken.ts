import {
  graphql,
  type GQLUserProxyData,
  type WithApolloClient,
} from "~/graphql";

export const GENERATE_NEW_TOKEN = graphql(/* GraphQL */ `
  mutation GenerateNewToken($userId: uuid!) {
    update_link_token(
      where: { user_id: { _eq: $userId } }
      _set: { active: false }
    ) {
      returning {
        ...BaseLinkToken
      }
    }
    insert_link_token_one(object: { user_id: $userId, active: true }) {
      ...BaseLinkToken
      user {
        ...UserWithActiveToken
      }
    }
  }
`);

export async function generateNewToken(
  this: WithApolloClient,
  proxyData: GQLUserProxyData,
) {
  const { userId } = proxyData;

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
