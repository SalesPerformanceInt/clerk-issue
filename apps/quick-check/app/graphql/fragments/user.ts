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
    last_name
    language_preference
    next_question {
      ...BaseUserQuestion
    }
    phone_number
    timezone
    user_id
    sms_enabled
    daily_email_enabled
  }
`);

export const UserUnansweredQuestions = graphql(/* GraphQL */ `
  fragment UserUnansweredQuestions on user {
    unanswered_questions: user_questions_aggregate(
      where: {
        retired_on: { _is_null: true }
        active_on: { _is_null: false, _lte: $today }
      }
    ) {
      aggregate {
        count(distinct: true)
      }
    }
  }
`);

export const UserActiveQuestionsData = graphql(/* GraphQL */ `
  fragment UserActiveQuestionsData on user {
    ...UserUnansweredQuestions
    active_enrollments: user_enrollments_aggregate(
      where: {
        user_questions_aggregate: {
          count: {
            predicate: { _gt: 0 }
            filter: {
              retired_on: { _is_null: true }
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
