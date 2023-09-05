import { graphql } from "~/graphql";

export const UserWithActiveToken = graphql(/* GraphQL */ `
  fragment UserWithActiveToken on user {
    ...BaseUser
    active_tokens: link_tokens(where: { active: { _eq: true } }) {
      ...BaseLinkToken
    }
  }
`);

export const BaseUser = graphql(/* GraphQL */ `
  fragment BaseUser on user {
    __typename
    tenant_id
    email
    first_name
    language_preference
    last_name
    next_question {
      ...BaseUserQuestion
    }
    phone_number
    timezone
    user_id
    sms_enabled
    learning_records {
      ...BaseLearningRecord
    }
  }
`);

export const UserActiveQuestionsData = graphql(/* GraphQL */ `
  fragment UserActiveQuestionsData on user {
    unanswered_questions: user_questions_aggregate(
      where: {
        status: { _neq: "retired" }
        active_on: { _is_null: false, _lte: $datetime }
      }
    ) {
      aggregate {
        count(distinct: true)
      }
    }
    active_enrollments: user_enrollments_aggregate(
      where: {
        user_questions_aggregate: {
          count: {
            predicate: { _gt: 0 }
            filter: {
              status: { _neq: "retired" }
              active_on: { _is_null: false }
            }
          }
        }
      }
    ) {
      aggregate {
        count(distinct: true)
      }
    }
  }
`);
