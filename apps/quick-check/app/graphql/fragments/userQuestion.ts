import { graphql } from "~/graphql"

export const BaseUserQuestion = graphql(/* GraphQL */ `
  fragment BaseUserQuestion on user_question {
    __typename
    id
    user_id
    taxonomy_id
    question_id
    retired_on
    active_on
    attempts: user_answers_aggregate {
      aggregate {
        count
      }
    }
    created_at
    streak
    difficulty
    latest_review_gap
    last_answered_on
    user_enrollment {
      ...BaseUserEnrollment
    }
    user {
      user_id
      language_preference
    }
  }
`)

export const UserQuestionFirstLastAnswer = graphql(/* GraphQL */ `
  fragment UserQuestionFirstLastAnswer on user_question {
    first_answer: user_answers(limit: 1, order_by: { created_at: asc }) {
      correct
      id
      created_at
    }
    current_answer: user_answers(limit: 1, order_by: { created_at: desc }) {
      correct
      id
      created_at
    }
    user_answers_aggregate {
      aggregate {
        count
      }
    }
  }
`)
