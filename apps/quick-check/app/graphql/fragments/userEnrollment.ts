import { graphql } from "~/graphql";

export const BaseUserEnrollment = graphql(/* GraphQL */ `
  fragment BaseUserEnrollment on user_enrollment {
    __typename
    id
    user_id
    taxonomy_id
    created_at
    score
    rank
  }
`);
