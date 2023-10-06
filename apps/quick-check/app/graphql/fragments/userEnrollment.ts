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

export const UserEnrollmentWithCounts = graphql(/* GraphQL */ `
  fragment UserEnrollmentWithCounts on user_enrollment {
    ...BaseUserEnrollment
    attempted: user_questions_aggregate(
      where: {
        _or: [
          { retired_on: { _is_null: true } }
          { retired_on: { _gte: $now } }
        ]
        user_answers_aggregate: {
          count: {
            predicate: { _gt: 0 }
            filter: { created_at: { _lte: $now } }
          }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    unattempted: user_questions_aggregate(
      where: {
        _or: [
          { retired_on: { _is_null: true } }
          { retired_on: { _gte: $now } }
        ]
        user_answers_aggregate: {
          count: {
            predicate: { _eq: 0 }
            filter: { created_at: { _lte: $now } }
          }
        }
      }
    ) {
      aggregate {
        count
      }
    }
    retired: user_questions_aggregate(
      where: { retired_on: { _is_null: false, _lte: $now } }
    ) {
      aggregate {
        count
      }
    }
    total: user_questions_aggregate {
      aggregate {
        count
      }
    }
  }
`);
