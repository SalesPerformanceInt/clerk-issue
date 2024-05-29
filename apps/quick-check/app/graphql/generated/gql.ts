/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

import * as types from "./graphql"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  fragment BaseEvent on event {\n    __typename\n    id\n    stream_name\n    created_at\n    data\n    type\n  }\n":
    types.BaseEventFragmentDoc,
  "\n  fragment BaseLinkToken on link_token {\n    __typename\n    id\n    created_at\n    active\n    user_id\n  }\n":
    types.BaseLinkTokenFragmentDoc,
  "\n  fragment UserWithActiveToken on user {\n    ...BaseUser\n    active_tokens: link_tokens(where: { active: { _eq: true } }) {\n      ...BaseLinkToken\n    }\n  }\n":
    types.UserWithActiveTokenFragmentDoc,
  "\n  fragment AdminUserData on user {\n    ...UserWithActiveToken\n    product_surveys {\n      id\n      sentiment\n      comment\n      created_at\n    }\n  }\n":
    types.AdminUserDataFragmentDoc,
  "\n  fragment BaseUser on user {\n    __typename\n    tenant_id\n    email\n    first_name\n    last_name\n    language_preference\n    next_question {\n      ...BaseUserQuestion\n    }\n    timezone\n    user_id\n    sms_enabled\n    daily_email_enabled\n    phone_number\n    show_leaderboard\n    survey_dismissed\n  }\n":
    types.BaseUserFragmentDoc,
  "\n  fragment UserUnansweredQuestions on user {\n    unanswered_questions: user_questions_aggregate(\n      where: {\n        retired_on: { _is_null: true }\n        active_on: { _is_null: false, _lte: $today }\n        user_enrollment: {\n          _or: [\n            { expiration_date: { _is_null: true } }\n            { expiration_date: { _gt: $today } }\n          ]\n        }\n      }\n    ) {\n      aggregate {\n        count(distinct: true)\n      }\n    }\n  }\n":
    types.UserUnansweredQuestionsFragmentDoc,
  "\n  fragment UserActiveQuestionsData on user {\n    ...UserUnansweredQuestions\n    active_enrollments: user_enrollments_aggregate(\n      where: {\n        user_questions_aggregate: {\n          count: {\n            predicate: { _gt: 0 }\n            filter: {\n              retired_on: { _is_null: true }\n              active_on: { _is_null: false }\n              user_enrollment: {\n                _or: [\n                  { expiration_date: { _is_null: true } }\n                  { expiration_date: { _gt: $today } }\n                ]\n              }\n            }\n          }\n        }\n      }\n    ) {\n      aggregate {\n        count(distinct: true)\n      }\n    }\n  }\n":
    types.UserActiveQuestionsDataFragmentDoc,
  "\n  fragment BaseUserAnswer on user_answer {\n    __typename\n    id\n    correct\n    created_at\n  }\n":
    types.BaseUserAnswerFragmentDoc,
  "\n  fragment BaseUserEnrollment on user_enrollment {\n    __typename\n    id\n    user_id\n    taxonomy_id\n    created_at\n    score\n    rank\n    start_date\n    expiration_date\n  }\n":
    types.BaseUserEnrollmentFragmentDoc,
  "\n  fragment NotificationUserEnrollment on user_enrollment {\n    ...BaseUserEnrollment\n    user {\n      user_id\n      tenant_id\n      language_preference\n      email\n      first_name\n      last_name\n    }\n    first_question: user_questions(order_by: { active_on: asc }, limit: 1) {\n      ...BaseUserQuestion\n    }\n  }\n":
    types.NotificationUserEnrollmentFragmentDoc,
  "\n  fragment UserEnrollmentWithCounts on user_enrollment {\n    ...BaseUserEnrollment\n    attempted: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    unattempted: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    retired: user_questions_aggregate(\n      where: { retired_on: { _is_null: false } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    total: user_questions_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.UserEnrollmentWithCountsFragmentDoc,
  "\n  fragment UserEnrollmentSkillWithCounts on user_enrollment {\n    ...BaseUserEnrollment\n    attempted_by_skill: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        taxonomy_id: { _eq: $skillId }\n        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    unattempted_by_skill: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        taxonomy_id: { _eq: $skillId }\n        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    retired_by_skill: user_questions_aggregate(\n      where: { retired_on: { _is_null: false }, taxonomy_id: { _eq: $skillId } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    total_by_skill: user_questions_aggregate(\n      where: { taxonomy_id: { _eq: $skillId } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.UserEnrollmentSkillWithCountsFragmentDoc,
  "\n  fragment BaseUserQuestion on user_question {\n    __typename\n    id\n    user_id\n    taxonomy_id\n    question_id\n    retired_on\n    active_on\n    attempts: user_answers_aggregate {\n      aggregate {\n        count\n      }\n    }\n    created_at\n    streak\n    difficulty\n    latest_review_gap\n    last_answered_on\n    user_enrollment {\n      ...BaseUserEnrollment\n    }\n    user {\n      user_id\n      language_preference\n    }\n  }\n":
    types.BaseUserQuestionFragmentDoc,
  "\n  fragment UserQuestionFirstLastAnswer on user_question {\n    first_answer: user_answers(limit: 1, order_by: { created_at: asc }) {\n      correct\n      id\n      created_at\n    }\n    current_answer: user_answers(limit: 1, order_by: { created_at: desc }) {\n      correct\n      id\n      created_at\n    }\n    user_answers_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.UserQuestionFirstLastAnswerFragmentDoc,
  '\n  mutation CleanTestTenants {\n    delete_tenant(where: { tenant_id: { _ilike: "zzz%" } }) {\n      affected_rows\n      returning {\n        tenant_id\n        theme_id\n      }\n    }\n  }\n':
    types.CleanTestTenantsDocument,
  "\n  mutation CreateEvent($event: event_insert_input!) {\n    insert_event_one(object: $event) {\n      ...BaseEvent\n    }\n  }\n":
    types.CreateEventDocument,
  "\n  mutation CreateEvents($events: [event_insert_input!]!) {\n    insert_event(objects: $events) {\n      returning {\n        ...BaseEvent\n      }\n    }\n  }\n":
    types.CreateEventsDocument,
  "\n  mutation CreateSurveyResponse($response: product_survey_insert_input!) {\n    insert_product_survey_one(object: $response) {\n      id\n      user_id\n      sentiment\n      comment\n      created_at\n    }\n  }\n":
    types.CreateSurveyResponseDocument,
  "\n  mutation CreateUserAnswer($user_answer: user_answer_insert_input!) {\n    insert_user_answer_one(object: $user_answer) {\n      ...BaseUserAnswer\n    }\n  }\n":
    types.CreateUserAnswerDocument,
  "\n  mutation DeleteTenant($tenantId: String!) {\n    delete_tenant_by_pk(tenant_id: $tenantId) {\n      tenant_id\n    }\n  }\n":
    types.DeleteTenantDocument,
  "\n  mutation GenerateNewToken($userId: uuid!, $tenantId: String!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId }, active: { _eq: true } }\n      _set: { active: false }\n    ) {\n      returning {\n        ...BaseLinkToken\n      }\n    }\n    insert_link_token_one(\n      object: { user_id: $userId, tenant_id: $tenantId, active: true }\n    ) {\n      ...BaseLinkToken\n      user {\n        ...UserWithActiveToken\n      }\n    }\n  }\n":
    types.GenerateNewTokenDocument,
  "\n  mutation ResetSurveyResponse($userId: uuid!) {\n    delete_product_survey(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n  }\n":
    types.ResetSurveyResponseDocument,
  "\n  mutation ResetUser($userId: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_user_enrollment(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n    delete_product_survey(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n  }\n":
    types.ResetUserDocument,
  "\n  mutation ResetUserEnrollment($enrollmentId: uuid!) {\n    update_user_enrollment_by_pk(\n      pk_columns: { id: $enrollmentId }\n      _set: { rank: null, score: 0 }\n    ) {\n      id\n      taxonomy_id\n      rank\n      score\n    }\n    delete_user_question(\n      where: { user_enrollment_id: { _eq: $enrollmentId } }\n    ) {\n      affected_rows\n    }\n  }\n":
    types.ResetUserEnrollmentDocument,
  "\n  mutation SyncUserEnrollment(\n    $userEnrollment: user_enrollment_insert_input!\n    $tenantId: String!\n  ) {\n    insert_user_enrollment_one(\n      object: $userEnrollment\n      on_conflict: {\n        constraint: user_enrollment_pkey\n        update_columns: [start_date, expiration_date]\n      }\n    ) {\n      ...NotificationUserEnrollment\n      user_questions {\n        ...BaseUserQuestion\n      }\n    }\n    insert_tenant_one(\n      object: { tenant_id: $tenantId }\n      on_conflict: { constraint: tenant_pkey, update_columns: [] }\n    ) {\n      tenant_id\n      theme_id\n    }\n  }\n":
    types.SyncUserEnrollmentDocument,
  "\n  mutation ToggleUserDailyEmailEnabled(\n    $userId: uuid!\n    $daily_email_enabled: Boolean\n  ) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { daily_email_enabled: $daily_email_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n":
    types.ToggleUserDailyEmailEnabledDocument,
  "\n  mutation ToggleUserShowLeaderboard(\n    $userId: uuid!\n    $show_leaderboard: Boolean\n  ) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { show_leaderboard: $show_leaderboard }\n    ) {\n      ...BaseUser\n    }\n  }\n":
    types.ToggleUserShowLeaderboardDocument,
  "\n  mutation UnenrollUser($userId: uuid!, $enrollmentId: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_user_enrollment(\n      where: { user_id: { _eq: $userId }, id: { _eq: $enrollmentId } }\n    ) {\n      affected_rows\n    }\n  }\n":
    types.UnenrollUserDocument,
  "\n  mutation UpdateNextQuestionId($userId: uuid!, $nextUserQuestionId: uuid) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: $nextUserQuestionId }\n    ) {\n      ...BaseUser\n    }\n  }\n":
    types.UpdateNextQuestionIdDocument,
  "\n  mutation UpdateUser($userId: uuid!, $set: user_set_input) {\n    update_user_by_pk(pk_columns: { user_id: $userId }, _set: $set) {\n      ...BaseUser\n    }\n  }\n":
    types.UpdateUserDocument,
  "\n  mutation UpdateUserEnrollment(\n    $id: uuid!\n    $set: user_enrollment_set_input\n    $inc: user_enrollment_inc_input\n  ) {\n    update_user_enrollment_by_pk(\n      pk_columns: { id: $id }\n      _set: $set\n      _inc: $inc\n    ) {\n      ...NotificationUserEnrollment\n      unretired_questions: user_questions_aggregate(\n        where: { retired_on: { _is_null: true } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n":
    types.UpdateUserEnrollmentDocument,
  "\n  mutation UpdateUserEnrollmentsRanks(\n    $enrollmentsUpdates: [user_enrollment_updates!]!\n  ) {\n    update_user_enrollment_many(updates: $enrollmentsUpdates) {\n      returning {\n        ...BaseUserEnrollment\n      }\n    }\n  }\n":
    types.UpdateUserEnrollmentsRanksDocument,
  "\n  mutation UpdateUserQuestion($id: uuid!, $set: user_question_set_input) {\n    update_user_question_by_pk(pk_columns: { id: $id }, _set: $set) {\n      ...BaseUserQuestion\n    }\n  }\n":
    types.UpdateUserQuestionDocument,
  "\n  mutation UpsertUser($user: user_insert_input!, $tenantId: String!) {\n    insert_user_one(\n      object: $user\n      on_conflict: {\n        constraint: user_pkey\n        update_columns: [\n          email\n          first_name\n          last_name\n          language_preference\n          phone_number\n          timezone\n          show_leaderboard\n        ]\n      }\n    ) {\n      ...UserWithActiveToken\n    }\n    insert_tenant_one(\n      object: { tenant_id: $tenantId }\n      on_conflict: { constraint: tenant_pkey, update_columns: [] }\n    ) {\n      tenant_id\n      theme_id\n    }\n  }\n":
    types.UpsertUserDocument,
  "\n  query GetEnrollmentSkillDashboardData(\n    $enrollmentId: uuid!\n    $skillId: String\n    $today: date!\n  ) {\n    user_enrollment_by_pk(id: $enrollmentId) {\n      ...UserEnrollmentSkillWithCounts\n      user {\n        ...UserActiveQuestionsData\n        first_name\n        last_name\n        tenant_id\n        language_preference\n      }\n    }\n  }\n":
    types.GetEnrollmentSkillDashboardDataDocument,
  "\n  query GetEnrollmentSkillQuestions($enrollmentId: uuid!, $skillId: String) {\n    user_enrollment_by_pk(id: $enrollmentId) {\n      user_questions(where: { taxonomy_id: { _eq: $skillId } }) {\n        id\n        question_id\n        taxonomy_id\n        ...UserQuestionFirstLastAnswer\n        user_answers {\n          correct\n          id\n          created_at\n        }\n      }\n      user {\n        language_preference\n      }\n    }\n  }\n":
    types.GetEnrollmentSkillQuestionsDocument,
  "\n  query GetSurveyEligibility($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      __typename\n      user_id\n      user_enrollments {\n        ...UserEnrollmentWithCounts\n      }\n      product_surveys_aggregate {\n        aggregate {\n          count\n        }\n      }\n      survey_dismissed\n    }\n  }\n":
    types.GetSurveyEligibilityDocument,
  "\n  query GetUserAchievements($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      skills_attempted: user_questions_aggregate(\n        distinct_on: taxonomy_id\n        where: {\n          last_answered_on: { _is_null: false }\n          user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_skills: user_questions_aggregate(distinct_on: taxonomy_id) {\n        aggregate {\n          count\n        }\n      }\n      completed_enrollments: user_enrollments_aggregate(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n          _or: [\n            { expiration_date: { _is_null: false, _lt: $today } }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _eq: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_enrollments: user_enrollments_aggregate(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      retired_questions: user_questions_aggregate(\n        where: {\n          retired_on: { _is_null: false }\n          user_answers_aggregate: {\n            count: {\n              filter: { correct: { _eq: true } }\n              predicate: { _gte: 2 }\n            }\n          }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_questions: user_questions_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n":
    types.GetUserAchievementsDocument,
  "\n  query GetUserActiveEnrollments($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      active_user_enrollments: user_enrollments(\n        where: {\n          _and: [\n            {\n              _or: [\n                { expiration_date: { _is_null: true } }\n                { expiration_date: { _gte: $today } }\n              ]\n            }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _gt: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        ...UserEnrollmentWithCounts\n      }\n    }\n  }\n":
    types.GetUserActiveEnrollmentsDocument,
  "\n  query GetUserCompletedEnrollments($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      completed_user_enrollments: user_enrollments(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n          _or: [\n            { expiration_date: { _is_null: false, _lt: $today } }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _eq: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        ...UserEnrollmentWithCounts\n      }\n    }\n  }\n":
    types.GetUserCompletedEnrollmentsDocument,
  "\n  query GetUserDashboardData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      ...BaseUser\n      ...UserActiveQuestionsData\n      completed_enrollments: user_enrollments_aggregate {\n        aggregate {\n          count(distinct: true)\n        }\n      }\n    }\n  }\n":
    types.GetUserDashboardDataDocument,
  "\n  query GetUserAnswersByWeek(\n    $userId: uuid!\n    $start: timestamptz!\n    $end: timestamptz!\n  ) {\n    user_answer(\n      where: {\n        _and: [\n          { user_id: { _eq: $userId } }\n          { created_at: { _gte: $start } }\n          { created_at: { _lte: $end } }\n        ]\n      }\n    ) {\n      ...BaseUserAnswer\n    }\n  }\n":
    types.GetUserAnswersByWeekDocument,
  "\n  query GetUserWeeklyStreakCalendar($userId: uuid!, $monthAgo: timestamptz!) {\n    user_by_pk(user_id: $userId) {\n      tenant_id\n      user_answers(where: { created_at: { _gte: $monthAgo } }) {\n        ...BaseUserAnswer\n      }\n    }\n  }\n":
    types.GetUserWeeklyStreakCalendarDocument,
  "\n  query GetActiveUserQuestion($id: uuid!, $today: date!) {\n    user_question(\n      where: {\n        id: { _eq: $id }\n        active_on: { _lte: $today }\n        retired_on: { _is_null: true }\n        user_enrollment: {\n          _or: [\n            { expiration_date: { _is_null: true } }\n            { expiration_date: { _gt: $today } }\n          ]\n        }\n      }\n    ) {\n      ...BaseUserQuestion\n    }\n  }\n":
    types.GetActiveUserQuestionDocument,
  "\n  query GetAdminUserData($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...AdminUserData\n      user_enrollments {\n        id\n        taxonomy_id\n        created_at\n        score\n        rank\n        expiration_date\n        start_date\n        user_questions_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n      user_questions(\n        order_by: [{ active_on: asc, retired_on: asc_nulls_first }]\n      ) {\n        id\n        taxonomy_id\n        question_id\n        active_on\n        retired_on\n        last_answered_on\n        retired_on\n        title\n        user_enrollment {\n          id\n          taxonomy_id\n        }\n        user_answers(order_by: [{ created_at: asc }]) {\n          id\n          correct\n          created_at\n        }\n        user_answers_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n":
    types.GetAdminUserDataDocument,
  "\n  query GetAllUser {\n    user(order_by: [{ created_at: asc }, { email: asc }]) {\n      ...UserWithActiveToken\n    }\n  }\n":
    types.GetAllUserDocument,
  "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n":
    types.GetLinkTokenDocument,
  "\n  query GetNotificationEnrollments($today: date!, $yesterday: date!) {\n    new_enrollments: user_enrollment(where: { start_date: { _eq: $today } }) {\n      ...NotificationUserEnrollment\n    }\n    completed_enrollments: user_enrollment(\n      where: {\n        expiration_date: { _eq: $yesterday }\n        user_questions_aggregate: {\n          count: {\n            predicate: { _gt: 0 }\n            filter: { retired_on: { _is_null: true } }\n          }\n        }\n      }\n    ) {\n      ...NotificationUserEnrollment\n    }\n  }\n":
    types.GetNotificationEnrollmentsDocument,
  "\n  query GetRankeableEnrollments($taxonomyIds: [String!], $tenantId: String!) {\n    user_enrollment(\n      where: {\n        taxonomy_id: { _in: $taxonomyIds }\n        user: { tenant_id: { _eq: $tenantId } }\n        user_questions: {\n          user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      }\n      order_by: { score: desc }\n    ) {\n      ...BaseUserEnrollment\n      user {\n        first_name\n        last_name\n        tenant_id\n        language_preference\n      }\n    }\n  }\n":
    types.GetRankeableEnrollmentsDocument,
  "\n  query GetTeamEnrollments(\n    $enrollmentIds: [uuid!]!\n    $accountSubdomain: String!\n  ) {\n    user_enrollment(\n      where: {\n        id: { _in: $enrollmentIds }\n        user: { tenant_id: { _eq: $accountSubdomain } }\n      }\n    ) {\n      ...UserEnrollmentWithCounts\n      user_questions_aggregate {\n        aggregate {\n          max {\n            last_answered_on\n          }\n        }\n      }\n    }\n  }\n":
    types.GetTeamEnrollmentsDocument,
  "\n  query GetTenantUser($tenantId: String!) {\n    user(\n      where: { tenant_id: { _eq: $tenantId } }\n      order_by: [{ created_at: asc }, { email: asc }]\n    ) {\n      ...AdminUserData\n    }\n  }\n":
    types.GetTenantUserDocument,
  "\n  query GetTenants {\n    tenant(order_by: [{ tenant_id: asc }]) {\n      tenant_id\n      users_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n":
    types.GetTenantsDocument,
  "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n":
    types.GetUserDocument,
  "\n  query GetUserActiveQuestionsData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      first_name\n      last_name\n      ...UserActiveQuestionsData\n    }\n  }\n":
    types.GetUserActiveQuestionsDataDocument,
  "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: { _eq: $email } }) {\n      ...BaseUser\n    }\n  }\n":
    types.GetUserByEmailDocument,
  "\n  query GetUserEmailData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n      ...UserActiveQuestionsData\n      user_answers(order_by: { created_at: desc }, limit: 1) {\n        correct\n        created_at\n        id\n        question_id\n      }\n      user_question_activated_today: user_questions(\n        where: { active_on: { _eq: $today }, retired_on: { _is_null: true } }\n        order_by: [\n          {\n            user_answers_aggregate: {\n              count: asc_nulls_first\n              max: { created_at: asc }\n            }\n          }\n        ]\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n      user_enrollments(limit: 1, order_by: { created_at: asc }) {\n        ...BaseUserEnrollment\n      }\n    }\n  }\n":
    types.GetUserEmailDataDocument,
  "\n  query GetUserEnrollment($id: uuid!, $today: date!) {\n    user_enrollment_by_pk(id: $id) {\n      ...UserEnrollmentWithCounts\n      user_questions {\n        id\n        taxonomy_id\n        retired_on\n        ...UserQuestionFirstLastAnswer\n      }\n      user {\n        ...UserActiveQuestionsData\n        first_name\n        last_name\n        tenant_id\n        language_preference\n        show_leaderboard\n      }\n    }\n  }\n":
    types.GetUserEnrollmentDocument,
  "\n  query GetUserLanguage($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      user_id\n      language_preference\n    }\n  }\n":
    types.GetUserLanguageDocument,
  "\n  query GetUserLastActiveToken($userId: uuid!) {\n    link_token(\n      where: { user_id: { _eq: $userId }, active: { _eq: true } }\n      order_by: { created_at: desc }\n      limit: 1\n    ) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n":
    types.GetUserLastActiveTokenDocument,
  "\n  query GetUserNextQuestion(\n    $userId: uuid!\n    $today: date!\n    $where: user_question_bool_exp = {}\n  ) {\n    user_by_pk(user_id: $userId) {\n      user_questions(\n        where: {\n          active_on: { _lte: $today }\n          retired_on: { _is_null: true }\n          user_enrollment: {\n            _or: [\n              { expiration_date: { _is_null: true } }\n              { expiration_date: { _gt: $today } }\n            ]\n          }\n          _and: [$where]\n        }\n        order_by: { active_on: asc }\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n    }\n  }\n":
    types.GetUserNextQuestionDocument,
  "\n  query GetUserQuestion($id: uuid!) {\n    user_question_by_pk(id: $id) {\n      ...BaseUserQuestion\n    }\n  }\n":
    types.GetUserQuestionDocument,
  "\n  query GetUserQuestionAnswers($userId: uuid!, $questionId: uuid!) {\n    user_answer(\n      where: { user_id: { _eq: $userId }, question_id: { _eq: $questionId } }\n      limit: 1\n      order_by: { created_at: desc }\n    ) {\n      ...BaseUserAnswer\n    }\n  }\n":
    types.GetUserQuestionAnswersDocument,
  "\n  query GetUserTheme($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      tenant {\n        theme_id\n      }\n    }\n  }\n":
    types.GetUserThemeDocument,
  "\n  query GetUsersForDailyEmail {\n    user(where: { daily_email_enabled: { _eq: true } }) {\n      user_id\n    }\n  }\n":
    types.GetUsersForDailyEmailDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BaseEvent on event {\n    __typename\n    id\n    stream_name\n    created_at\n    data\n    type\n  }\n",
): (typeof documents)["\n  fragment BaseEvent on event {\n    __typename\n    id\n    stream_name\n    created_at\n    data\n    type\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BaseLinkToken on link_token {\n    __typename\n    id\n    created_at\n    active\n    user_id\n  }\n",
): (typeof documents)["\n  fragment BaseLinkToken on link_token {\n    __typename\n    id\n    created_at\n    active\n    user_id\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment UserWithActiveToken on user {\n    ...BaseUser\n    active_tokens: link_tokens(where: { active: { _eq: true } }) {\n      ...BaseLinkToken\n    }\n  }\n",
): (typeof documents)["\n  fragment UserWithActiveToken on user {\n    ...BaseUser\n    active_tokens: link_tokens(where: { active: { _eq: true } }) {\n      ...BaseLinkToken\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment AdminUserData on user {\n    ...UserWithActiveToken\n    product_surveys {\n      id\n      sentiment\n      comment\n      created_at\n    }\n  }\n",
): (typeof documents)["\n  fragment AdminUserData on user {\n    ...UserWithActiveToken\n    product_surveys {\n      id\n      sentiment\n      comment\n      created_at\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BaseUser on user {\n    __typename\n    tenant_id\n    email\n    first_name\n    last_name\n    language_preference\n    next_question {\n      ...BaseUserQuestion\n    }\n    timezone\n    user_id\n    sms_enabled\n    daily_email_enabled\n    phone_number\n    show_leaderboard\n    survey_dismissed\n  }\n",
): (typeof documents)["\n  fragment BaseUser on user {\n    __typename\n    tenant_id\n    email\n    first_name\n    last_name\n    language_preference\n    next_question {\n      ...BaseUserQuestion\n    }\n    timezone\n    user_id\n    sms_enabled\n    daily_email_enabled\n    phone_number\n    show_leaderboard\n    survey_dismissed\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment UserUnansweredQuestions on user {\n    unanswered_questions: user_questions_aggregate(\n      where: {\n        retired_on: { _is_null: true }\n        active_on: { _is_null: false, _lte: $today }\n        user_enrollment: {\n          _or: [\n            { expiration_date: { _is_null: true } }\n            { expiration_date: { _gt: $today } }\n          ]\n        }\n      }\n    ) {\n      aggregate {\n        count(distinct: true)\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment UserUnansweredQuestions on user {\n    unanswered_questions: user_questions_aggregate(\n      where: {\n        retired_on: { _is_null: true }\n        active_on: { _is_null: false, _lte: $today }\n        user_enrollment: {\n          _or: [\n            { expiration_date: { _is_null: true } }\n            { expiration_date: { _gt: $today } }\n          ]\n        }\n      }\n    ) {\n      aggregate {\n        count(distinct: true)\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment UserActiveQuestionsData on user {\n    ...UserUnansweredQuestions\n    active_enrollments: user_enrollments_aggregate(\n      where: {\n        user_questions_aggregate: {\n          count: {\n            predicate: { _gt: 0 }\n            filter: {\n              retired_on: { _is_null: true }\n              active_on: { _is_null: false }\n              user_enrollment: {\n                _or: [\n                  { expiration_date: { _is_null: true } }\n                  { expiration_date: { _gt: $today } }\n                ]\n              }\n            }\n          }\n        }\n      }\n    ) {\n      aggregate {\n        count(distinct: true)\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment UserActiveQuestionsData on user {\n    ...UserUnansweredQuestions\n    active_enrollments: user_enrollments_aggregate(\n      where: {\n        user_questions_aggregate: {\n          count: {\n            predicate: { _gt: 0 }\n            filter: {\n              retired_on: { _is_null: true }\n              active_on: { _is_null: false }\n              user_enrollment: {\n                _or: [\n                  { expiration_date: { _is_null: true } }\n                  { expiration_date: { _gt: $today } }\n                ]\n              }\n            }\n          }\n        }\n      }\n    ) {\n      aggregate {\n        count(distinct: true)\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BaseUserAnswer on user_answer {\n    __typename\n    id\n    correct\n    created_at\n  }\n",
): (typeof documents)["\n  fragment BaseUserAnswer on user_answer {\n    __typename\n    id\n    correct\n    created_at\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BaseUserEnrollment on user_enrollment {\n    __typename\n    id\n    user_id\n    taxonomy_id\n    created_at\n    score\n    rank\n    start_date\n    expiration_date\n  }\n",
): (typeof documents)["\n  fragment BaseUserEnrollment on user_enrollment {\n    __typename\n    id\n    user_id\n    taxonomy_id\n    created_at\n    score\n    rank\n    start_date\n    expiration_date\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment NotificationUserEnrollment on user_enrollment {\n    ...BaseUserEnrollment\n    user {\n      user_id\n      tenant_id\n      language_preference\n      email\n      first_name\n      last_name\n    }\n    first_question: user_questions(order_by: { active_on: asc }, limit: 1) {\n      ...BaseUserQuestion\n    }\n  }\n",
): (typeof documents)["\n  fragment NotificationUserEnrollment on user_enrollment {\n    ...BaseUserEnrollment\n    user {\n      user_id\n      tenant_id\n      language_preference\n      email\n      first_name\n      last_name\n    }\n    first_question: user_questions(order_by: { active_on: asc }, limit: 1) {\n      ...BaseUserQuestion\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment UserEnrollmentWithCounts on user_enrollment {\n    ...BaseUserEnrollment\n    attempted: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    unattempted: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    retired: user_questions_aggregate(\n      where: { retired_on: { _is_null: false } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    total: user_questions_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment UserEnrollmentWithCounts on user_enrollment {\n    ...BaseUserEnrollment\n    attempted: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    unattempted: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    retired: user_questions_aggregate(\n      where: { retired_on: { _is_null: false } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    total: user_questions_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment UserEnrollmentSkillWithCounts on user_enrollment {\n    ...BaseUserEnrollment\n    attempted_by_skill: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        taxonomy_id: { _eq: $skillId }\n        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    unattempted_by_skill: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        taxonomy_id: { _eq: $skillId }\n        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    retired_by_skill: user_questions_aggregate(\n      where: { retired_on: { _is_null: false }, taxonomy_id: { _eq: $skillId } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    total_by_skill: user_questions_aggregate(\n      where: { taxonomy_id: { _eq: $skillId } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment UserEnrollmentSkillWithCounts on user_enrollment {\n    ...BaseUserEnrollment\n    attempted_by_skill: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        taxonomy_id: { _eq: $skillId }\n        user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    unattempted_by_skill: user_questions_aggregate(\n      where: {\n        _or: [{ retired_on: { _is_null: true } }]\n        taxonomy_id: { _eq: $skillId }\n        user_answers_aggregate: { count: { predicate: { _eq: 0 } } }\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    retired_by_skill: user_questions_aggregate(\n      where: { retired_on: { _is_null: false }, taxonomy_id: { _eq: $skillId } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    total_by_skill: user_questions_aggregate(\n      where: { taxonomy_id: { _eq: $skillId } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BaseUserQuestion on user_question {\n    __typename\n    id\n    user_id\n    taxonomy_id\n    question_id\n    retired_on\n    active_on\n    attempts: user_answers_aggregate {\n      aggregate {\n        count\n      }\n    }\n    created_at\n    streak\n    difficulty\n    latest_review_gap\n    last_answered_on\n    user_enrollment {\n      ...BaseUserEnrollment\n    }\n    user {\n      user_id\n      language_preference\n    }\n  }\n",
): (typeof documents)["\n  fragment BaseUserQuestion on user_question {\n    __typename\n    id\n    user_id\n    taxonomy_id\n    question_id\n    retired_on\n    active_on\n    attempts: user_answers_aggregate {\n      aggregate {\n        count\n      }\n    }\n    created_at\n    streak\n    difficulty\n    latest_review_gap\n    last_answered_on\n    user_enrollment {\n      ...BaseUserEnrollment\n    }\n    user {\n      user_id\n      language_preference\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment UserQuestionFirstLastAnswer on user_question {\n    first_answer: user_answers(limit: 1, order_by: { created_at: asc }) {\n      correct\n      id\n      created_at\n    }\n    current_answer: user_answers(limit: 1, order_by: { created_at: desc }) {\n      correct\n      id\n      created_at\n    }\n    user_answers_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment UserQuestionFirstLastAnswer on user_question {\n    first_answer: user_answers(limit: 1, order_by: { created_at: asc }) {\n      correct\n      id\n      created_at\n    }\n    current_answer: user_answers(limit: 1, order_by: { created_at: desc }) {\n      correct\n      id\n      created_at\n    }\n    user_answers_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CleanTestTenants {\n    delete_tenant(where: { tenant_id: { _ilike: "zzz%" } }) {\n      affected_rows\n      returning {\n        tenant_id\n        theme_id\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CleanTestTenants {\n    delete_tenant(where: { tenant_id: { _ilike: "zzz%" } }) {\n      affected_rows\n      returning {\n        tenant_id\n        theme_id\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateEvent($event: event_insert_input!) {\n    insert_event_one(object: $event) {\n      ...BaseEvent\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateEvent($event: event_insert_input!) {\n    insert_event_one(object: $event) {\n      ...BaseEvent\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateEvents($events: [event_insert_input!]!) {\n    insert_event(objects: $events) {\n      returning {\n        ...BaseEvent\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateEvents($events: [event_insert_input!]!) {\n    insert_event(objects: $events) {\n      returning {\n        ...BaseEvent\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateSurveyResponse($response: product_survey_insert_input!) {\n    insert_product_survey_one(object: $response) {\n      id\n      user_id\n      sentiment\n      comment\n      created_at\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateSurveyResponse($response: product_survey_insert_input!) {\n    insert_product_survey_one(object: $response) {\n      id\n      user_id\n      sentiment\n      comment\n      created_at\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateUserAnswer($user_answer: user_answer_insert_input!) {\n    insert_user_answer_one(object: $user_answer) {\n      ...BaseUserAnswer\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateUserAnswer($user_answer: user_answer_insert_input!) {\n    insert_user_answer_one(object: $user_answer) {\n      ...BaseUserAnswer\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteTenant($tenantId: String!) {\n    delete_tenant_by_pk(tenant_id: $tenantId) {\n      tenant_id\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteTenant($tenantId: String!) {\n    delete_tenant_by_pk(tenant_id: $tenantId) {\n      tenant_id\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation GenerateNewToken($userId: uuid!, $tenantId: String!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId }, active: { _eq: true } }\n      _set: { active: false }\n    ) {\n      returning {\n        ...BaseLinkToken\n      }\n    }\n    insert_link_token_one(\n      object: { user_id: $userId, tenant_id: $tenantId, active: true }\n    ) {\n      ...BaseLinkToken\n      user {\n        ...UserWithActiveToken\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation GenerateNewToken($userId: uuid!, $tenantId: String!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId }, active: { _eq: true } }\n      _set: { active: false }\n    ) {\n      returning {\n        ...BaseLinkToken\n      }\n    }\n    insert_link_token_one(\n      object: { user_id: $userId, tenant_id: $tenantId, active: true }\n    ) {\n      ...BaseLinkToken\n      user {\n        ...UserWithActiveToken\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ResetSurveyResponse($userId: uuid!) {\n    delete_product_survey(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n  }\n",
): (typeof documents)["\n  mutation ResetSurveyResponse($userId: uuid!) {\n    delete_product_survey(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ResetUser($userId: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_user_enrollment(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n    delete_product_survey(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n  }\n",
): (typeof documents)["\n  mutation ResetUser($userId: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_user_enrollment(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n    delete_product_survey(where: { user_id: { _eq: $userId } }) {\n      affected_rows\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ResetUserEnrollment($enrollmentId: uuid!) {\n    update_user_enrollment_by_pk(\n      pk_columns: { id: $enrollmentId }\n      _set: { rank: null, score: 0 }\n    ) {\n      id\n      taxonomy_id\n      rank\n      score\n    }\n    delete_user_question(\n      where: { user_enrollment_id: { _eq: $enrollmentId } }\n    ) {\n      affected_rows\n    }\n  }\n",
): (typeof documents)["\n  mutation ResetUserEnrollment($enrollmentId: uuid!) {\n    update_user_enrollment_by_pk(\n      pk_columns: { id: $enrollmentId }\n      _set: { rank: null, score: 0 }\n    ) {\n      id\n      taxonomy_id\n      rank\n      score\n    }\n    delete_user_question(\n      where: { user_enrollment_id: { _eq: $enrollmentId } }\n    ) {\n      affected_rows\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SyncUserEnrollment(\n    $userEnrollment: user_enrollment_insert_input!\n    $tenantId: String!\n  ) {\n    insert_user_enrollment_one(\n      object: $userEnrollment\n      on_conflict: {\n        constraint: user_enrollment_pkey\n        update_columns: [start_date, expiration_date]\n      }\n    ) {\n      ...NotificationUserEnrollment\n      user_questions {\n        ...BaseUserQuestion\n      }\n    }\n    insert_tenant_one(\n      object: { tenant_id: $tenantId }\n      on_conflict: { constraint: tenant_pkey, update_columns: [] }\n    ) {\n      tenant_id\n      theme_id\n    }\n  }\n",
): (typeof documents)["\n  mutation SyncUserEnrollment(\n    $userEnrollment: user_enrollment_insert_input!\n    $tenantId: String!\n  ) {\n    insert_user_enrollment_one(\n      object: $userEnrollment\n      on_conflict: {\n        constraint: user_enrollment_pkey\n        update_columns: [start_date, expiration_date]\n      }\n    ) {\n      ...NotificationUserEnrollment\n      user_questions {\n        ...BaseUserQuestion\n      }\n    }\n    insert_tenant_one(\n      object: { tenant_id: $tenantId }\n      on_conflict: { constraint: tenant_pkey, update_columns: [] }\n    ) {\n      tenant_id\n      theme_id\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ToggleUserDailyEmailEnabled(\n    $userId: uuid!\n    $daily_email_enabled: Boolean\n  ) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { daily_email_enabled: $daily_email_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n",
): (typeof documents)["\n  mutation ToggleUserDailyEmailEnabled(\n    $userId: uuid!\n    $daily_email_enabled: Boolean\n  ) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { daily_email_enabled: $daily_email_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ToggleUserShowLeaderboard(\n    $userId: uuid!\n    $show_leaderboard: Boolean\n  ) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { show_leaderboard: $show_leaderboard }\n    ) {\n      ...BaseUser\n    }\n  }\n",
): (typeof documents)["\n  mutation ToggleUserShowLeaderboard(\n    $userId: uuid!\n    $show_leaderboard: Boolean\n  ) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { show_leaderboard: $show_leaderboard }\n    ) {\n      ...BaseUser\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UnenrollUser($userId: uuid!, $enrollmentId: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_user_enrollment(\n      where: { user_id: { _eq: $userId }, id: { _eq: $enrollmentId } }\n    ) {\n      affected_rows\n    }\n  }\n",
): (typeof documents)["\n  mutation UnenrollUser($userId: uuid!, $enrollmentId: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_user_enrollment(\n      where: { user_id: { _eq: $userId }, id: { _eq: $enrollmentId } }\n    ) {\n      affected_rows\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateNextQuestionId($userId: uuid!, $nextUserQuestionId: uuid) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: $nextUserQuestionId }\n    ) {\n      ...BaseUser\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateNextQuestionId($userId: uuid!, $nextUserQuestionId: uuid) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { next_user_question_id: $nextUserQuestionId }\n    ) {\n      ...BaseUser\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUser($userId: uuid!, $set: user_set_input) {\n    update_user_by_pk(pk_columns: { user_id: $userId }, _set: $set) {\n      ...BaseUser\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateUser($userId: uuid!, $set: user_set_input) {\n    update_user_by_pk(pk_columns: { user_id: $userId }, _set: $set) {\n      ...BaseUser\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUserEnrollment(\n    $id: uuid!\n    $set: user_enrollment_set_input\n    $inc: user_enrollment_inc_input\n  ) {\n    update_user_enrollment_by_pk(\n      pk_columns: { id: $id }\n      _set: $set\n      _inc: $inc\n    ) {\n      ...NotificationUserEnrollment\n      unretired_questions: user_questions_aggregate(\n        where: { retired_on: { _is_null: true } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateUserEnrollment(\n    $id: uuid!\n    $set: user_enrollment_set_input\n    $inc: user_enrollment_inc_input\n  ) {\n    update_user_enrollment_by_pk(\n      pk_columns: { id: $id }\n      _set: $set\n      _inc: $inc\n    ) {\n      ...NotificationUserEnrollment\n      unretired_questions: user_questions_aggregate(\n        where: { retired_on: { _is_null: true } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUserEnrollmentsRanks(\n    $enrollmentsUpdates: [user_enrollment_updates!]!\n  ) {\n    update_user_enrollment_many(updates: $enrollmentsUpdates) {\n      returning {\n        ...BaseUserEnrollment\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateUserEnrollmentsRanks(\n    $enrollmentsUpdates: [user_enrollment_updates!]!\n  ) {\n    update_user_enrollment_many(updates: $enrollmentsUpdates) {\n      returning {\n        ...BaseUserEnrollment\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUserQuestion($id: uuid!, $set: user_question_set_input) {\n    update_user_question_by_pk(pk_columns: { id: $id }, _set: $set) {\n      ...BaseUserQuestion\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateUserQuestion($id: uuid!, $set: user_question_set_input) {\n    update_user_question_by_pk(pk_columns: { id: $id }, _set: $set) {\n      ...BaseUserQuestion\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpsertUser($user: user_insert_input!, $tenantId: String!) {\n    insert_user_one(\n      object: $user\n      on_conflict: {\n        constraint: user_pkey\n        update_columns: [\n          email\n          first_name\n          last_name\n          language_preference\n          phone_number\n          timezone\n          show_leaderboard\n        ]\n      }\n    ) {\n      ...UserWithActiveToken\n    }\n    insert_tenant_one(\n      object: { tenant_id: $tenantId }\n      on_conflict: { constraint: tenant_pkey, update_columns: [] }\n    ) {\n      tenant_id\n      theme_id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpsertUser($user: user_insert_input!, $tenantId: String!) {\n    insert_user_one(\n      object: $user\n      on_conflict: {\n        constraint: user_pkey\n        update_columns: [\n          email\n          first_name\n          last_name\n          language_preference\n          phone_number\n          timezone\n          show_leaderboard\n        ]\n      }\n    ) {\n      ...UserWithActiveToken\n    }\n    insert_tenant_one(\n      object: { tenant_id: $tenantId }\n      on_conflict: { constraint: tenant_pkey, update_columns: [] }\n    ) {\n      tenant_id\n      theme_id\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetEnrollmentSkillDashboardData(\n    $enrollmentId: uuid!\n    $skillId: String\n    $today: date!\n  ) {\n    user_enrollment_by_pk(id: $enrollmentId) {\n      ...UserEnrollmentSkillWithCounts\n      user {\n        ...UserActiveQuestionsData\n        first_name\n        last_name\n        tenant_id\n        language_preference\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetEnrollmentSkillDashboardData(\n    $enrollmentId: uuid!\n    $skillId: String\n    $today: date!\n  ) {\n    user_enrollment_by_pk(id: $enrollmentId) {\n      ...UserEnrollmentSkillWithCounts\n      user {\n        ...UserActiveQuestionsData\n        first_name\n        last_name\n        tenant_id\n        language_preference\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetEnrollmentSkillQuestions($enrollmentId: uuid!, $skillId: String) {\n    user_enrollment_by_pk(id: $enrollmentId) {\n      user_questions(where: { taxonomy_id: { _eq: $skillId } }) {\n        id\n        question_id\n        taxonomy_id\n        ...UserQuestionFirstLastAnswer\n        user_answers {\n          correct\n          id\n          created_at\n        }\n      }\n      user {\n        language_preference\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetEnrollmentSkillQuestions($enrollmentId: uuid!, $skillId: String) {\n    user_enrollment_by_pk(id: $enrollmentId) {\n      user_questions(where: { taxonomy_id: { _eq: $skillId } }) {\n        id\n        question_id\n        taxonomy_id\n        ...UserQuestionFirstLastAnswer\n        user_answers {\n          correct\n          id\n          created_at\n        }\n      }\n      user {\n        language_preference\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetSurveyEligibility($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      __typename\n      user_id\n      user_enrollments {\n        ...UserEnrollmentWithCounts\n      }\n      product_surveys_aggregate {\n        aggregate {\n          count\n        }\n      }\n      survey_dismissed\n    }\n  }\n",
): (typeof documents)["\n  query GetSurveyEligibility($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      __typename\n      user_id\n      user_enrollments {\n        ...UserEnrollmentWithCounts\n      }\n      product_surveys_aggregate {\n        aggregate {\n          count\n        }\n      }\n      survey_dismissed\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserAchievements($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      skills_attempted: user_questions_aggregate(\n        distinct_on: taxonomy_id\n        where: {\n          last_answered_on: { _is_null: false }\n          user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_skills: user_questions_aggregate(distinct_on: taxonomy_id) {\n        aggregate {\n          count\n        }\n      }\n      completed_enrollments: user_enrollments_aggregate(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n          _or: [\n            { expiration_date: { _is_null: false, _lt: $today } }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _eq: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_enrollments: user_enrollments_aggregate(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      retired_questions: user_questions_aggregate(\n        where: {\n          retired_on: { _is_null: false }\n          user_answers_aggregate: {\n            count: {\n              filter: { correct: { _eq: true } }\n              predicate: { _gte: 2 }\n            }\n          }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_questions: user_questions_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserAchievements($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      skills_attempted: user_questions_aggregate(\n        distinct_on: taxonomy_id\n        where: {\n          last_answered_on: { _is_null: false }\n          user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_skills: user_questions_aggregate(distinct_on: taxonomy_id) {\n        aggregate {\n          count\n        }\n      }\n      completed_enrollments: user_enrollments_aggregate(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n          _or: [\n            { expiration_date: { _is_null: false, _lt: $today } }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _eq: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_enrollments: user_enrollments_aggregate(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      retired_questions: user_questions_aggregate(\n        where: {\n          retired_on: { _is_null: false }\n          user_answers_aggregate: {\n            count: {\n              filter: { correct: { _eq: true } }\n              predicate: { _gte: 2 }\n            }\n          }\n        }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      total_questions: user_questions_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserActiveEnrollments($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      active_user_enrollments: user_enrollments(\n        where: {\n          _and: [\n            {\n              _or: [\n                { expiration_date: { _is_null: true } }\n                { expiration_date: { _gte: $today } }\n              ]\n            }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _gt: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        ...UserEnrollmentWithCounts\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserActiveEnrollments($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      active_user_enrollments: user_enrollments(\n        where: {\n          _and: [\n            {\n              _or: [\n                { expiration_date: { _is_null: true } }\n                { expiration_date: { _gte: $today } }\n              ]\n            }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _gt: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        ...UserEnrollmentWithCounts\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserCompletedEnrollments($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      completed_user_enrollments: user_enrollments(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n          _or: [\n            { expiration_date: { _is_null: false, _lt: $today } }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _eq: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        ...UserEnrollmentWithCounts\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserCompletedEnrollments($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      completed_user_enrollments: user_enrollments(\n        where: {\n          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }\n          _or: [\n            { expiration_date: { _is_null: false, _lt: $today } }\n            {\n              user_questions_aggregate: {\n                count: {\n                  predicate: { _eq: 0 }\n                  filter: { _or: [{ retired_on: { _is_null: true } }] }\n                }\n              }\n            }\n          ]\n        }\n      ) {\n        ...UserEnrollmentWithCounts\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserDashboardData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      ...BaseUser\n      ...UserActiveQuestionsData\n      completed_enrollments: user_enrollments_aggregate {\n        aggregate {\n          count(distinct: true)\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserDashboardData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      ...BaseUser\n      ...UserActiveQuestionsData\n      completed_enrollments: user_enrollments_aggregate {\n        aggregate {\n          count(distinct: true)\n        }\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserAnswersByWeek(\n    $userId: uuid!\n    $start: timestamptz!\n    $end: timestamptz!\n  ) {\n    user_answer(\n      where: {\n        _and: [\n          { user_id: { _eq: $userId } }\n          { created_at: { _gte: $start } }\n          { created_at: { _lte: $end } }\n        ]\n      }\n    ) {\n      ...BaseUserAnswer\n    }\n  }\n",
): (typeof documents)["\n  query GetUserAnswersByWeek(\n    $userId: uuid!\n    $start: timestamptz!\n    $end: timestamptz!\n  ) {\n    user_answer(\n      where: {\n        _and: [\n          { user_id: { _eq: $userId } }\n          { created_at: { _gte: $start } }\n          { created_at: { _lte: $end } }\n        ]\n      }\n    ) {\n      ...BaseUserAnswer\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserWeeklyStreakCalendar($userId: uuid!, $monthAgo: timestamptz!) {\n    user_by_pk(user_id: $userId) {\n      tenant_id\n      user_answers(where: { created_at: { _gte: $monthAgo } }) {\n        ...BaseUserAnswer\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserWeeklyStreakCalendar($userId: uuid!, $monthAgo: timestamptz!) {\n    user_by_pk(user_id: $userId) {\n      tenant_id\n      user_answers(where: { created_at: { _gte: $monthAgo } }) {\n        ...BaseUserAnswer\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetActiveUserQuestion($id: uuid!, $today: date!) {\n    user_question(\n      where: {\n        id: { _eq: $id }\n        active_on: { _lte: $today }\n        retired_on: { _is_null: true }\n        user_enrollment: {\n          _or: [\n            { expiration_date: { _is_null: true } }\n            { expiration_date: { _gt: $today } }\n          ]\n        }\n      }\n    ) {\n      ...BaseUserQuestion\n    }\n  }\n",
): (typeof documents)["\n  query GetActiveUserQuestion($id: uuid!, $today: date!) {\n    user_question(\n      where: {\n        id: { _eq: $id }\n        active_on: { _lte: $today }\n        retired_on: { _is_null: true }\n        user_enrollment: {\n          _or: [\n            { expiration_date: { _is_null: true } }\n            { expiration_date: { _gt: $today } }\n          ]\n        }\n      }\n    ) {\n      ...BaseUserQuestion\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetAdminUserData($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...AdminUserData\n      user_enrollments {\n        id\n        taxonomy_id\n        created_at\n        score\n        rank\n        expiration_date\n        start_date\n        user_questions_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n      user_questions(\n        order_by: [{ active_on: asc, retired_on: asc_nulls_first }]\n      ) {\n        id\n        taxonomy_id\n        question_id\n        active_on\n        retired_on\n        last_answered_on\n        retired_on\n        title\n        user_enrollment {\n          id\n          taxonomy_id\n        }\n        user_answers(order_by: [{ created_at: asc }]) {\n          id\n          correct\n          created_at\n        }\n        user_answers_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetAdminUserData($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...AdminUserData\n      user_enrollments {\n        id\n        taxonomy_id\n        created_at\n        score\n        rank\n        expiration_date\n        start_date\n        user_questions_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n      user_questions(\n        order_by: [{ active_on: asc, retired_on: asc_nulls_first }]\n      ) {\n        id\n        taxonomy_id\n        question_id\n        active_on\n        retired_on\n        last_answered_on\n        retired_on\n        title\n        user_enrollment {\n          id\n          taxonomy_id\n        }\n        user_answers(order_by: [{ created_at: asc }]) {\n          id\n          correct\n          created_at\n        }\n        user_answers_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetAllUser {\n    user(order_by: [{ created_at: asc }, { email: asc }]) {\n      ...UserWithActiveToken\n    }\n  }\n",
): (typeof documents)["\n  query GetAllUser {\n    user(order_by: [{ created_at: asc }, { email: asc }]) {\n      ...UserWithActiveToken\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n",
): (typeof documents)["\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetNotificationEnrollments($today: date!, $yesterday: date!) {\n    new_enrollments: user_enrollment(where: { start_date: { _eq: $today } }) {\n      ...NotificationUserEnrollment\n    }\n    completed_enrollments: user_enrollment(\n      where: {\n        expiration_date: { _eq: $yesterday }\n        user_questions_aggregate: {\n          count: {\n            predicate: { _gt: 0 }\n            filter: { retired_on: { _is_null: true } }\n          }\n        }\n      }\n    ) {\n      ...NotificationUserEnrollment\n    }\n  }\n",
): (typeof documents)["\n  query GetNotificationEnrollments($today: date!, $yesterday: date!) {\n    new_enrollments: user_enrollment(where: { start_date: { _eq: $today } }) {\n      ...NotificationUserEnrollment\n    }\n    completed_enrollments: user_enrollment(\n      where: {\n        expiration_date: { _eq: $yesterday }\n        user_questions_aggregate: {\n          count: {\n            predicate: { _gt: 0 }\n            filter: { retired_on: { _is_null: true } }\n          }\n        }\n      }\n    ) {\n      ...NotificationUserEnrollment\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRankeableEnrollments($taxonomyIds: [String!], $tenantId: String!) {\n    user_enrollment(\n      where: {\n        taxonomy_id: { _in: $taxonomyIds }\n        user: { tenant_id: { _eq: $tenantId } }\n        user_questions: {\n          user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      }\n      order_by: { score: desc }\n    ) {\n      ...BaseUserEnrollment\n      user {\n        first_name\n        last_name\n        tenant_id\n        language_preference\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetRankeableEnrollments($taxonomyIds: [String!], $tenantId: String!) {\n    user_enrollment(\n      where: {\n        taxonomy_id: { _in: $taxonomyIds }\n        user: { tenant_id: { _eq: $tenantId } }\n        user_questions: {\n          user_answers_aggregate: { count: { predicate: { _gt: 0 } } }\n        }\n      }\n      order_by: { score: desc }\n    ) {\n      ...BaseUserEnrollment\n      user {\n        first_name\n        last_name\n        tenant_id\n        language_preference\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetTeamEnrollments(\n    $enrollmentIds: [uuid!]!\n    $accountSubdomain: String!\n  ) {\n    user_enrollment(\n      where: {\n        id: { _in: $enrollmentIds }\n        user: { tenant_id: { _eq: $accountSubdomain } }\n      }\n    ) {\n      ...UserEnrollmentWithCounts\n      user_questions_aggregate {\n        aggregate {\n          max {\n            last_answered_on\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetTeamEnrollments(\n    $enrollmentIds: [uuid!]!\n    $accountSubdomain: String!\n  ) {\n    user_enrollment(\n      where: {\n        id: { _in: $enrollmentIds }\n        user: { tenant_id: { _eq: $accountSubdomain } }\n      }\n    ) {\n      ...UserEnrollmentWithCounts\n      user_questions_aggregate {\n        aggregate {\n          max {\n            last_answered_on\n          }\n        }\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetTenantUser($tenantId: String!) {\n    user(\n      where: { tenant_id: { _eq: $tenantId } }\n      order_by: [{ created_at: asc }, { email: asc }]\n    ) {\n      ...AdminUserData\n    }\n  }\n",
): (typeof documents)["\n  query GetTenantUser($tenantId: String!) {\n    user(\n      where: { tenant_id: { _eq: $tenantId } }\n      order_by: [{ created_at: asc }, { email: asc }]\n    ) {\n      ...AdminUserData\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetTenants {\n    tenant(order_by: [{ tenant_id: asc }]) {\n      tenant_id\n      users_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetTenants {\n    tenant(order_by: [{ tenant_id: asc }]) {\n      tenant_id\n      users_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n",
): (typeof documents)["\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserActiveQuestionsData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      first_name\n      last_name\n      ...UserActiveQuestionsData\n    }\n  }\n",
): (typeof documents)["\n  query GetUserActiveQuestionsData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      first_name\n      last_name\n      ...UserActiveQuestionsData\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: { _eq: $email } }) {\n      ...BaseUser\n    }\n  }\n",
): (typeof documents)["\n  query GetUserByEmail($email: String!) {\n    user(where: { email: { _eq: $email } }) {\n      ...BaseUser\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserEmailData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n      ...UserActiveQuestionsData\n      user_answers(order_by: { created_at: desc }, limit: 1) {\n        correct\n        created_at\n        id\n        question_id\n      }\n      user_question_activated_today: user_questions(\n        where: { active_on: { _eq: $today }, retired_on: { _is_null: true } }\n        order_by: [\n          {\n            user_answers_aggregate: {\n              count: asc_nulls_first\n              max: { created_at: asc }\n            }\n          }\n        ]\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n      user_enrollments(limit: 1, order_by: { created_at: asc }) {\n        ...BaseUserEnrollment\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserEmailData($userId: uuid!, $today: date!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n      ...UserActiveQuestionsData\n      user_answers(order_by: { created_at: desc }, limit: 1) {\n        correct\n        created_at\n        id\n        question_id\n      }\n      user_question_activated_today: user_questions(\n        where: { active_on: { _eq: $today }, retired_on: { _is_null: true } }\n        order_by: [\n          {\n            user_answers_aggregate: {\n              count: asc_nulls_first\n              max: { created_at: asc }\n            }\n          }\n        ]\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n      user_enrollments(limit: 1, order_by: { created_at: asc }) {\n        ...BaseUserEnrollment\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserEnrollment($id: uuid!, $today: date!) {\n    user_enrollment_by_pk(id: $id) {\n      ...UserEnrollmentWithCounts\n      user_questions {\n        id\n        taxonomy_id\n        retired_on\n        ...UserQuestionFirstLastAnswer\n      }\n      user {\n        ...UserActiveQuestionsData\n        first_name\n        last_name\n        tenant_id\n        language_preference\n        show_leaderboard\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserEnrollment($id: uuid!, $today: date!) {\n    user_enrollment_by_pk(id: $id) {\n      ...UserEnrollmentWithCounts\n      user_questions {\n        id\n        taxonomy_id\n        retired_on\n        ...UserQuestionFirstLastAnswer\n      }\n      user {\n        ...UserActiveQuestionsData\n        first_name\n        last_name\n        tenant_id\n        language_preference\n        show_leaderboard\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserLanguage($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      user_id\n      language_preference\n    }\n  }\n",
): (typeof documents)["\n  query GetUserLanguage($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      user_id\n      language_preference\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserLastActiveToken($userId: uuid!) {\n    link_token(\n      where: { user_id: { _eq: $userId }, active: { _eq: true } }\n      order_by: { created_at: desc }\n      limit: 1\n    ) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n",
): (typeof documents)["\n  query GetUserLastActiveToken($userId: uuid!) {\n    link_token(\n      where: { user_id: { _eq: $userId }, active: { _eq: true } }\n      order_by: { created_at: desc }\n      limit: 1\n    ) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserNextQuestion(\n    $userId: uuid!\n    $today: date!\n    $where: user_question_bool_exp = {}\n  ) {\n    user_by_pk(user_id: $userId) {\n      user_questions(\n        where: {\n          active_on: { _lte: $today }\n          retired_on: { _is_null: true }\n          user_enrollment: {\n            _or: [\n              { expiration_date: { _is_null: true } }\n              { expiration_date: { _gt: $today } }\n            ]\n          }\n          _and: [$where]\n        }\n        order_by: { active_on: asc }\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserNextQuestion(\n    $userId: uuid!\n    $today: date!\n    $where: user_question_bool_exp = {}\n  ) {\n    user_by_pk(user_id: $userId) {\n      user_questions(\n        where: {\n          active_on: { _lte: $today }\n          retired_on: { _is_null: true }\n          user_enrollment: {\n            _or: [\n              { expiration_date: { _is_null: true } }\n              { expiration_date: { _gt: $today } }\n            ]\n          }\n          _and: [$where]\n        }\n        order_by: { active_on: asc }\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserQuestion($id: uuid!) {\n    user_question_by_pk(id: $id) {\n      ...BaseUserQuestion\n    }\n  }\n",
): (typeof documents)["\n  query GetUserQuestion($id: uuid!) {\n    user_question_by_pk(id: $id) {\n      ...BaseUserQuestion\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserQuestionAnswers($userId: uuid!, $questionId: uuid!) {\n    user_answer(\n      where: { user_id: { _eq: $userId }, question_id: { _eq: $questionId } }\n      limit: 1\n      order_by: { created_at: desc }\n    ) {\n      ...BaseUserAnswer\n    }\n  }\n",
): (typeof documents)["\n  query GetUserQuestionAnswers($userId: uuid!, $questionId: uuid!) {\n    user_answer(\n      where: { user_id: { _eq: $userId }, question_id: { _eq: $questionId } }\n      limit: 1\n      order_by: { created_at: desc }\n    ) {\n      ...BaseUserAnswer\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserTheme($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      tenant {\n        theme_id\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserTheme($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      language_preference\n      tenant {\n        theme_id\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUsersForDailyEmail {\n    user(where: { daily_email_enabled: { _eq: true } }) {\n      user_id\n    }\n  }\n",
): (typeof documents)["\n  query GetUsersForDailyEmail {\n    user(where: { daily_email_enabled: { _eq: true } }) {\n      user_id\n    }\n  }\n"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
