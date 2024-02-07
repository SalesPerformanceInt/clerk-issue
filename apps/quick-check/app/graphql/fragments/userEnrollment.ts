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
    start_date
    expiration_date
  }
`);

export const NotificationUserEnrollment = graphql(/* GraphQL */ `
  fragment NotificationUserEnrollment on user_enrollment {
    ...BaseUserEnrollment
    user {
      user_id
      tenant_id
      language_preference
      email
      first_name
      last_name
    }
    first_question: user_questions(order_by: { active_on: asc }, limit: 1) {
      ...BaseUserQuestion
    }
  }
`);

export const UserEnrollmentWithCounts = graphql(/* GraphQL */ `
  fragment UserEnrollmentWithCounts on user_enrollment {
    ...BaseUserEnrollment
    attempted: user_questions_aggregate(
      where: {
        _or: [{ retired_on: { _is_null: true } }]
        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }
      }
    ) {
      aggregate {
        count
      }
    }
    unattempted: user_questions_aggregate(
      where: {
        _or: [{ retired_on: { _is_null: true } }]
        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }
      }
    ) {
      aggregate {
        count
      }
    }
    retired: user_questions_aggregate(
      where: { retired_on: { _is_null: false } }
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

export const UserEnrollmentSkillWithCounts = graphql(/* GraphQL */ `
  fragment UserEnrollmentSkillWithCounts on user_enrollment {
    ...BaseUserEnrollment
    attempted_by_skill: user_questions_aggregate(
      where: {
        _or: [{ retired_on: { _is_null: true } }]
        taxonomy_id: { _eq: $skillId }
        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }
      }
    ) {
      aggregate {
        count
      }
    }
    unattempted_by_skill: user_questions_aggregate(
      where: {
        _or: [{ retired_on: { _is_null: true } }]
        taxonomy_id: { _eq: $skillId }
        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }
      }
    ) {
      aggregate {
        count
      }
    }
    retired_by_skill: user_questions_aggregate(
      where: { retired_on: { _is_null: false }, taxonomy_id: { _eq: $skillId } }
    ) {
      aggregate {
        count
      }
    }
    total_by_skill: user_questions_aggregate(
      where: { taxonomy_id: { _eq: $skillId } }
    ) {
      aggregate {
        count
      }
    }
  }
`);
