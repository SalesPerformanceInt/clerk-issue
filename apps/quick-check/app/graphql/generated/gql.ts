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
    "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      created_at\n      user {\n        created_at\n        first_name\n        last_name\n        next_question_id\n        user_id\n      }\n    }\n  }\n": types.GetLinkTokenDocument,
    "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      account\n      email\n      first_name\n      language_preference\n      last_name\n      next_question_id\n      phone_number\n      timezone\n      user_id\n      learning_records {\n        data\n        event_type\n        id\n      }\n    }\n  }\n": types.GetUserDocument,
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
export function graphql(source: "\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      created_at\n      user {\n        created_at\n        first_name\n        last_name\n        next_question_id\n        user_id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLinkToken($id: String!) {\n    link_token_by_pk(id: $id) {\n      id\n      user_id\n      created_at\n      user {\n        created_at\n        first_name\n        last_name\n        next_question_id\n        user_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      account\n      email\n      first_name\n      language_preference\n      last_name\n      next_question_id\n      phone_number\n      timezone\n      user_id\n      learning_records {\n        data\n        event_type\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUser($userId: uuid!) {\n    user_by_pk(user_id: $userId) {\n      account\n      email\n      first_name\n      language_preference\n      last_name\n      next_question_id\n      phone_number\n      timezone\n      user_id\n      learning_records {\n        data\n        event_type\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;