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
    "\n  fragment BaseLearningRecord on learning_record {\n    __typename\n    data\n    event_type\n    id\n  }\n": types.BaseLearningRecordFragmentDoc,
    "\n  fragment BaseLinkToken on link_token {\n    __typename\n    id\n    created_at\n    active\n    user_id\n  }\n": types.BaseLinkTokenFragmentDoc,
    "\n  fragment UserWithActiveToken on user {\n    ...BaseUser\n    active_tokens: link_tokens(where: { active: { _eq: true } }) {\n      ...BaseLinkToken\n    }\n  }\n": types.UserWithActiveTokenFragmentDoc,
    "\n  fragment BaseUser on user {\n    __typename\n    account\n    email\n    first_name\n    language_preference\n    last_name\n    next_question_id\n    phone_number\n    timezone\n    user_id\n    sms_enabled\n    learning_records {\n      ...BaseLearningRecord\n    }\n  }\n": types.BaseUserFragmentDoc,
    "\n  mutation CreateLearningRecord(\n    $learning_record: learning_record_insert_input!\n  ) {\n    insert_learning_record_one(object: $learning_record) {\n      created_at\n      data\n      event_type\n      id\n      user_id\n    }\n  }\n": types.CreateLearningRecordDocument,
    "\n  mutation GenerateNewToken($userId: uuid!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId } }\n      _set: { active: false }\n    ) {\n      returning {\n        active\n        created_at\n        id\n        user_id\n      }\n    }\n    insert_link_token_one(object: { user_id: $userId }) {\n      active\n      created_at\n      id\n      user {\n        user_id\n        first_name\n        last_name\n        phone_number\n        sms_enabled\n      }\n    }\n  }\n": types.GenerateNewTokenDocument,
    "\n  mutation ResetUser($user_id: uuid!, $next_question_id: String) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_question_id: $next_question_id }\n    ) {\n      user_id\n      next_question_id\n      learning_records {\n        id\n      }\n    }\n    delete_learning_record(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n  }\n": types.ResetUserDocument,
    "\n  mutation ToggleUserSMSEnabled($userId: uuid!, $sms_enabled: Boolean) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { sms_enabled: $sms_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n": types.ToggleUserSmsEnabledDocument,
    "\n  mutation UpdateNextQuestionId($user_id: uuid!, $next_question_id: String) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_question_id: $next_question_id }\n    ) {\n      user_id\n      next_question_id\n    }\n  }\n": types.UpdateNextQuestionIdDocument,
    "\n  query GetAllUser {\n    user(order_by: { created_at: asc }) {\n      ...UserWithActiveToken\n    }\n  }\n": types.GetAllUserDocument,
    "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      created_at\n      active\n      user {\n        created_at\n        first_name\n        last_name\n        next_question_id\n        user_id\n      }\n    }\n  }\n": types.GetLinkTokenDocument,
    "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n": types.GetUserDocument,
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
export function graphql(source: "\n  fragment BaseLearningRecord on learning_record {\n    __typename\n    data\n    event_type\n    id\n  }\n"): (typeof documents)["\n  fragment BaseLearningRecord on learning_record {\n    __typename\n    data\n    event_type\n    id\n  }\n"];
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
export function graphql(source: "\n  fragment BaseUser on user {\n    __typename\n    account\n    email\n    first_name\n    language_preference\n    last_name\n    next_question_id\n    phone_number\n    timezone\n    user_id\n    sms_enabled\n    learning_records {\n      ...BaseLearningRecord\n    }\n  }\n"): (typeof documents)["\n  fragment BaseUser on user {\n    __typename\n    account\n    email\n    first_name\n    language_preference\n    last_name\n    next_question_id\n    phone_number\n    timezone\n    user_id\n    sms_enabled\n    learning_records {\n      ...BaseLearningRecord\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateLearningRecord(\n    $learning_record: learning_record_insert_input!\n  ) {\n    insert_learning_record_one(object: $learning_record) {\n      created_at\n      data\n      event_type\n      id\n      user_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateLearningRecord(\n    $learning_record: learning_record_insert_input!\n  ) {\n    insert_learning_record_one(object: $learning_record) {\n      created_at\n      data\n      event_type\n      id\n      user_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GenerateNewToken($userId: uuid!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId } }\n      _set: { active: false }\n    ) {\n      returning {\n        active\n        created_at\n        id\n        user_id\n      }\n    }\n    insert_link_token_one(object: { user_id: $userId }) {\n      active\n      created_at\n      id\n      user {\n        user_id\n        first_name\n        last_name\n        phone_number\n        sms_enabled\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation GenerateNewToken($userId: uuid!) {\n    update_link_token(\n      where: { user_id: { _eq: $userId } }\n      _set: { active: false }\n    ) {\n      returning {\n        active\n        created_at\n        id\n        user_id\n      }\n    }\n    insert_link_token_one(object: { user_id: $userId }) {\n      active\n      created_at\n      id\n      user {\n        user_id\n        first_name\n        last_name\n        phone_number\n        sms_enabled\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResetUser($user_id: uuid!, $next_question_id: String) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_question_id: $next_question_id }\n    ) {\n      user_id\n      next_question_id\n      learning_records {\n        id\n      }\n    }\n    delete_learning_record(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation ResetUser($user_id: uuid!, $next_question_id: String) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_question_id: $next_question_id }\n    ) {\n      user_id\n      next_question_id\n      learning_records {\n        id\n      }\n    }\n    delete_learning_record(where: { user_id: { _eq: $user_id } }) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ToggleUserSMSEnabled($userId: uuid!, $sms_enabled: Boolean) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { sms_enabled: $sms_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleUserSMSEnabled($userId: uuid!, $sms_enabled: Boolean) {\n    update_user_by_pk(\n      pk_columns: { user_id: $userId }\n      _set: { sms_enabled: $sms_enabled }\n    ) {\n      ...BaseUser\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateNextQuestionId($user_id: uuid!, $next_question_id: String) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_question_id: $next_question_id }\n    ) {\n      user_id\n      next_question_id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateNextQuestionId($user_id: uuid!, $next_question_id: String) {\n    update_user_by_pk(\n      pk_columns: { user_id: $user_id }\n      _set: { next_question_id: $next_question_id }\n    ) {\n      user_id\n      next_question_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllUser {\n    user(order_by: { created_at: asc }) {\n      ...UserWithActiveToken\n    }\n  }\n"): (typeof documents)["\n  query GetAllUser {\n    user(order_by: { created_at: asc }) {\n      ...UserWithActiveToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      created_at\n      active\n      user {\n        created_at\n        first_name\n        last_name\n        next_question_id\n        user_id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      created_at\n      active\n      user {\n        created_at\n        first_name\n        last_name\n        next_question_id\n        user_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n"): (typeof documents)["\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      ...UserWithActiveToken\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;