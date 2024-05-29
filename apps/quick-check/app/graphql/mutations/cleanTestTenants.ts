import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

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
`)

export async function cleanTestTenants(this: GraphQLClient, _proxyData: GQLProxyData) {
  try {
    const result = await this.mutate({
      mutation: CLEAN_TEST_TENANTS,
    })

    return result.data?.delete_tenant ?? null
  } catch (error) {
    logError({ error, log: "cleanTestTenants" })
    return null
  }
}
