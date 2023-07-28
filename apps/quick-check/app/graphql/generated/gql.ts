/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  fragment BaseLearningRecord on learning_record {\n    __typename\n    created_at\n    data\n    event_type\n    id\n    user_id\n  }\n": types.BaseLearningRecordFragmentDoc,
    "\n  fragment BaseLinkToken on link_token {\n    __typename\n    id\n    created_at\n    active\n    user_id\n  }\n": types.BaseLinkTokenFragmentDoc,
    "\n  fragment UserWithActiveToken on user {\n    ...BaseUser\n    active_tokens: link_tokens(where: { active: { _eq: true } }) {\n      ...BaseLinkToken\n    }\n  }\n": types.UserWithActiveTokenFragmentDoc,
    "\n  fragment BaseUser on user {\n    __typename\n    tenant_id\n    email\n    first_name\n    language_preference\n    last_name\n    next_question {\n      ...BaseUserQuestion\n    }\n    phone_number\n    timezone\n    user_id\n    sms_enabled\n    learning_records {\n      ...BaseLearningRecord\n    }\n  }\n": types.BaseUserFragmentDoc,
    "\n  fragment BaseUserEnrollment on user_enrollment {\n    __typename\n    id\n    user_id\n    tenant_id\n    taxonomy_id\n    created_at\n  }\n": types.BaseUserEnrollmentFragmentDoc,
    "\n  fragment BaseUserQuestion on user_question {\n    __typename\n    id\n    user_id\n    tenant_id\n    taxonomy_id\n    status\n    question_id\n    active_on\n    created_at\n    user_enrollment {\n      ...BaseUserEnrollment\n    }\n  }\n": types.BaseUserQuestionFragmentDoc,
    "\n  mutation CreateLearningRecord(\n    $learning_record: learning_record_insert_input!\n  ) {\n    insert_learning_record_one(object: $learning_record) {\n      ...BaseLearningRecord\n    }\n  }\n": types.CreateLearningRecordDocument,
    "\n  mutation createUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $phoneNumber: String!\n  ) {\n    insert_user_one(\n      object: {\n        first_name: $firstName\n        last_name: $lastName\n        email: $email\n        phone_number: $phoneNumber\n      }\n    ) {\n      ...BaseUser\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation EnrollUser($user_enrollment: user_enrollment_insert_input!) {\n    insert_user_enrollment_one(object: $user_enrollment) {\n      id\n    }\n  }\n": types.EnrollUserDocument,
    "\n  mutation GenerateNewToken($userId: uuid!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId } }\n      _set: { active: false }\n    ) {\n      returning {\n        ...BaseLinkToken\n      }\n    }\n    insert_link_token_one(object: { user_id: $userId, active: true }) {\n      ...BaseLinkToken\n      user {\n        ...UserWithActiveToken\n      }\n    }\n  }\n": types.GenerateNewTokenDocument,
    "\n  mutation ResetUser($user_id: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_learning_record(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n    delete_user_enrollment(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n  }\n": types.ResetUserDocument,
    "\n  mutation ToggleUserSMSEnabled($userId: uuid!, $sms_enabled: Boolean) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { sms_enabled: $sms_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n": types.ToggleUserSmsEnabledDocument,
    "\n  mutation UpdateNextQuestionId($user_id: uuid!, $next_user_question_id: uuid) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_user_question_id: $next_user_question_id }\n    ) {\n      ...BaseUser\n    }\n  }\n": types.UpdateNextQuestionIdDocument,
    "\n  mutation UpdateUserQuestion(\n    $userId: uuid!\n    $questionId: String\n    $input: user_question_set_input\n  ) {\n    update_user_question(\n      where: {\n        user_id: { _eq: $userId }\n        _and: { question_id: { _eq: $questionId } }\n      }\n      _set: $input\n    ) {\n      affected_rows\n      returning {\n        active_on\n        id\n        question_id\n        status\n        user_id\n      }\n    }\n  }\n": types.UpdateUserQuestionDocument,
    "\n  query GetAllUser {\n    user(order_by: { created_at: asc }) {\n      ...UserWithActiveToken\n    }\n  }\n": types.GetAllUserDocument,
    "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n": types.GetLinkTokenDocument,
    "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n": types.GetUserDocument,
    "\n  query GetUserNextQuestion($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      user_questions(\n        where: { active_on: { _is_null: false } }\n        order_by: { active_on: asc }\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n    }\n  }\n": types.GetUserNextQuestionDocument,
    "\n  query GetUserQuestion($id: uuid!) {\n    user_question_by_pk(id: $id) {\n      ...BaseUserQuestion\n    }\n  }\n": types.GetUserQuestionDocument,
    "\n  query GetUserTheme($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      tenant {\n        theme_id\n      }\n    }\n  }\n": types.GetUserThemeDocument,
};

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
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseLearningRecord on learning_record {\n    __typename\n    created_at\n    data\n    event_type\n    id\n    user_id\n  }\n"): (typeof documents)["\n  fragment BaseLearningRecord on learning_record {\n    __typename\n    created_at\n    data\n    event_type\n    id\n    user_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseLinkToken on link_token {\n    __typename\n    id\n    created_at\n    active\n    user_id\n  }\n"): (typeof documents)["\n  fragment BaseLinkToken on link_token {\n    __typename\n    id\n    created_at\n    active\n    user_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserWithActiveToken on user {\n    ...BaseUser\n    active_tokens: link_tokens(where: { active: { _eq: true } }) {\n      ...BaseLinkToken\n    }\n  }\n"): (typeof documents)["\n  fragment UserWithActiveToken on user {\n    ...BaseUser\n    active_tokens: link_tokens(where: { active: { _eq: true } }) {\n      ...BaseLinkToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseUser on user {\n    __typename\n    tenant_id\n    email\n    first_name\n    language_preference\n    last_name\n    next_question {\n      ...BaseUserQuestion\n    }\n    phone_number\n    timezone\n    user_id\n    sms_enabled\n    learning_records {\n      ...BaseLearningRecord\n    }\n  }\n"): (typeof documents)["\n  fragment BaseUser on user {\n    __typename\n    tenant_id\n    email\n    first_name\n    language_preference\n    last_name\n    next_question {\n      ...BaseUserQuestion\n    }\n    phone_number\n    timezone\n    user_id\n    sms_enabled\n    learning_records {\n      ...BaseLearningRecord\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseUserEnrollment on user_enrollment {\n    __typename\n    id\n    user_id\n    tenant_id\n    taxonomy_id\n    created_at\n  }\n"): (typeof documents)["\n  fragment BaseUserEnrollment on user_enrollment {\n    __typename\n    id\n    user_id\n    tenant_id\n    taxonomy_id\n    created_at\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseUserQuestion on user_question {\n    __typename\n    id\n    user_id\n    tenant_id\n    taxonomy_id\n    status\n    question_id\n    active_on\n    created_at\n    user_enrollment {\n      ...BaseUserEnrollment\n    }\n  }\n"): (typeof documents)["\n  fragment BaseUserQuestion on user_question {\n    __typename\n    id\n    user_id\n    tenant_id\n    taxonomy_id\n    status\n    question_id\n    active_on\n    created_at\n    user_enrollment {\n      ...BaseUserEnrollment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateLearningRecord(\n    $learning_record: learning_record_insert_input!\n  ) {\n    insert_learning_record_one(object: $learning_record) {\n      ...BaseLearningRecord\n    }\n  }\n"): (typeof documents)["\n  mutation CreateLearningRecord(\n    $learning_record: learning_record_insert_input!\n  ) {\n    insert_learning_record_one(object: $learning_record) {\n      ...BaseLearningRecord\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $phoneNumber: String!\n  ) {\n    insert_user_one(\n      object: {\n        first_name: $firstName\n        last_name: $lastName\n        email: $email\n        phone_number: $phoneNumber\n      }\n    ) {\n      ...BaseUser\n    }\n  }\n"): (typeof documents)["\n  mutation createUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $phoneNumber: String!\n  ) {\n    insert_user_one(\n      object: {\n        first_name: $firstName\n        last_name: $lastName\n        email: $email\n        phone_number: $phoneNumber\n      }\n    ) {\n      ...BaseUser\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EnrollUser($user_enrollment: user_enrollment_insert_input!) {\n    insert_user_enrollment_one(object: $user_enrollment) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation EnrollUser($user_enrollment: user_enrollment_insert_input!) {\n    insert_user_enrollment_one(object: $user_enrollment) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GenerateNewToken($userId: uuid!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId } }\n      _set: { active: false }\n    ) {\n      returning {\n        ...BaseLinkToken\n      }\n    }\n    insert_link_token_one(object: { user_id: $userId, active: true }) {\n      ...BaseLinkToken\n      user {\n        ...UserWithActiveToken\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation GenerateNewToken($userId: uuid!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId } }\n      _set: { active: false }\n    ) {\n      returning {\n        ...BaseLinkToken\n      }\n    }\n    insert_link_token_one(object: { user_id: $userId, active: true }) {\n      ...BaseLinkToken\n      user {\n        ...UserWithActiveToken\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResetUser($user_id: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_learning_record(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n    delete_user_enrollment(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation ResetUser($user_id: uuid!) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_user_question_id: null }\n    ) {\n      ...BaseUser\n    }\n    delete_learning_record(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n    delete_user_enrollment(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ToggleUserSMSEnabled($userId: uuid!, $sms_enabled: Boolean) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { sms_enabled: $sms_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleUserSMSEnabled($userId: uuid!, $sms_enabled: Boolean) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { sms_enabled: $sms_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateNextQuestionId($user_id: uuid!, $next_user_question_id: uuid) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_user_question_id: $next_user_question_id }\n    ) {\n      ...BaseUser\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateNextQuestionId($user_id: uuid!, $next_user_question_id: uuid) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_user_question_id: $next_user_question_id }\n    ) {\n      ...BaseUser\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserQuestion(\n    $userId: uuid!\n    $questionId: String\n    $input: user_question_set_input\n  ) {\n    update_user_question(\n      where: {\n        user_id: { _eq: $userId }\n        _and: { question_id: { _eq: $questionId } }\n      }\n      _set: $input\n    ) {\n      affected_rows\n      returning {\n        active_on\n        id\n        question_id\n        status\n        user_id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserQuestion(\n    $userId: uuid!\n    $questionId: String\n    $input: user_question_set_input\n  ) {\n    update_user_question(\n      where: {\n        user_id: { _eq: $userId }\n        _and: { question_id: { _eq: $questionId } }\n      }\n      _set: $input\n    ) {\n      affected_rows\n      returning {\n        active_on\n        id\n        question_id\n        status\n        user_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllUser {\n    user(order_by: { created_at: asc }) {\n      ...UserWithActiveToken\n    }\n  }\n"): (typeof documents)["\n  query GetAllUser {\n    user(order_by: { created_at: asc }) {\n      ...UserWithActiveToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n"): (typeof documents)["\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      tenant_id\n      created_at\n      active\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n"): (typeof documents)["\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserNextQuestion($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      user_questions(\n        where: { active_on: { _is_null: false } }\n        order_by: { active_on: asc }\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserNextQuestion($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      user_questions(\n        where: { active_on: { _is_null: false } }\n        order_by: { active_on: asc }\n        limit: 1\n      ) {\n        ...BaseUserQuestion\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserQuestion($id: uuid!) {\n    user_question_by_pk(id: $id) {\n      ...BaseUserQuestion\n    }\n  }\n"): (typeof documents)["\n  query GetUserQuestion($id: uuid!) {\n    user_question_by_pk(id: $id) {\n      ...BaseUserQuestion\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserTheme($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      tenant {\n        theme_id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserTheme($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      tenant {\n        theme_id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;