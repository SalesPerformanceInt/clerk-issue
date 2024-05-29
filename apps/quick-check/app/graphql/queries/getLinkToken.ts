import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

export const GET_LINK_TOKEN = graphql(/* GraphQL */ `
  query GetLinkToken($id: String!) {
    link_token_by_pk(id: $id) {
      id
      user_id
      tenant_id
      created_at
      active
    }
  }
`)

export async function getLinkToken(this: GraphQLClient, id: string, _proxyData?: GQLProxyData) {
  try {
    const { data } = await this.query({
      query: GET_LINK_TOKEN,
      variables: { id },
    })

    if (!data?.link_token_by_pk) return null

    return data.link_token_by_pk
  } catch (error) {
    logError({ error, log: "getLinkToken" })
    return null
  }
}
