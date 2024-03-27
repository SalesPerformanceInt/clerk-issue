import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql";

export const DELETE_TENANT = graphql(/* GraphQL */ `
  mutation DeleteTenant($tenantId: String!) {
    delete_tenant_by_pk(tenant_id: $tenantId) {
      tenant_id
    }
  }
`);

export async function deleteTenant(
  this: GraphQLClient,
  tenantId: string,
  _proxyData: GQLProxyData,
) {
  try {
    const result = await this.mutate({
      mutation: DELETE_TENANT,
      variables: { tenantId },
    });

    return result.data?.delete_tenant_by_pk ?? null;
  } catch (error) {
    logError({ error, log: "deleteTenant" });
    return null;
  }
}
