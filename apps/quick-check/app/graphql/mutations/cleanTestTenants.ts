import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyData,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const CLEAN_TEST_TENANTS = graphql(/* GraphQL */ `
  mutation CleanTestTenants {
    delete_tenant(where: { tenant_id: { _ilike: "zzz%" } }) {
      affected_rows
      returning {
        tenant_id
        theme_id
      }
    }
  }
`);

export async function cleanTestTenants(
  this: WithApolloClient,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.client.mutate({
      mutation: CLEAN_TEST_TENANTS,
    });

    return result.data?.delete_tenant ?? null;
  } catch (error) {
    logError({ error, log: "cleanTestTenants" });
    return null;
  }
}
