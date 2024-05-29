import { graphql } from "~/graphql"

export const BaseLinkToken = graphql(/* GraphQL */ `
  fragment BaseLinkToken on link_token {
    __typename
    id
    created_at
    active
    user_id
  }
`)
