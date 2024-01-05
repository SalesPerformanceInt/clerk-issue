import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyTenantData,
  type WithApolloClient,
} from "~/graphql";

export const GET_TENANT_USERS = graphql(/* GraphQL */ `
  query GetTenantUser($tenantId: String!) {
    user(
      where: { tenant_id: { _eq: $tenantId } }
      order_by: [{ created_at: asc }, { email: asc }]
    ) {
      ...UserWithActiveToken
    }
  }
`);

export async function getTenantUsers(
  this: WithApolloClient,
  proxyData: GQLProxyTenantData,
) {
  const { tenantId } = proxyData;
  try {
    const result = await this.client.query({
      query: GET_TENANT_USERS,
      fetchPolicy: "network-only",
      variables: { tenantId },
    });

    return result?.data?.user;
  } catch (error) {
    logError({ error, log: "getTenantUsers" });
    return null;
  }
}
