import { graphql } from "~/graphql"

export const BaseUserAnswer = graphql(/* GraphQL */ `
  fragment BaseUserAnswer on user_answer {
    __typename
    id
    correct
    created_at
  }
`)
