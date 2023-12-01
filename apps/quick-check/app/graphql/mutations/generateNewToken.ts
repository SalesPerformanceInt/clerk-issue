import {
  graphql,
  type GQLProxyAllData,
  type WithApolloClient,
} from "~/graphql";

export const GENERATE_NEW_TOKEN = graphql(/* GraphQL */ `
  mutation GenerateNewToken($userId: uuid!, $tenantId: String!) {
    update_link_token(
      where: { user_id: { _eq: $userId }, active: { _eq: true } }
      _set: { active: false }
    ) {
      returning {
        ...BaseLinkToken
      }
    }
    insert_link_token_one(
      object: { user_id: $userId, tenant_id: $tenantId, active: true }
    ) {
      ...BaseLinkToken
      user {
        ...UserWithActiveToken
      }
    }
  }
`);

export async function generateNewToken(
  this: WithApolloClient,
  proxyData: GQLProxyAllData,
) {
  const { userId, tenantId } = proxyData;

  try {
    const { data } = await this.client.mutate({
      mutation: GENERATE_NEW_TOKEN,
      variables: { userId, tenantId },
    });

    return data?.insert_link_token_one ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
