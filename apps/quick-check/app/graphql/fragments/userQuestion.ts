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
    streak
    difficulty
    latest_review_gap
    last_answered_on
    user_enrollment {
      ...BaseUserEnrollment
    }
  }
`);
