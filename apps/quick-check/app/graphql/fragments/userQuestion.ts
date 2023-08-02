import { graphql } from "~/graphql";

export const BaseUserQuestion = graphql(/* GraphQL */ `
  fragment BaseUserQuestion on user_question {
    __typename
    id
    user_id
    tenant_id
    taxonomy_id
    status
    question_id
    active_on
    attempts
    created_at
    user_enrollment {
      ...BaseUserEnrollment
    }
  }
`);
