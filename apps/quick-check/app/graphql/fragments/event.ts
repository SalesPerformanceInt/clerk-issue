import { graphql } from "~/graphql"

export const BaseEvent = graphql(/* GraphQL */ `
  fragment BaseEvent on event {
    __typename
    id
    stream_name
    created_at
    data
    type
  }
`)
