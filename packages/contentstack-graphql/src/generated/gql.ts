/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {\n    __typename\n    mcquestion {\n      choices {\n        ...QuestionitemVariantsMcquestionBlockChoicesFragment\n      }\n      instruction\n      prompt\n      stem\n    }\n  }\n": types.QuestionitemVariantsMcquestionFragmentFragmentDoc,
    "\n    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {\n      __typename\n      choice {\n        body\n        correct\n        feedback\n        points\n      }\n    }\n  ": types.QuestionitemVariantsMcquestionBlockChoicesFragmentFragmentDoc,
    "\n  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {\n    __typename\n    tfquestion {\n      correct\n      feedback\n      incorrect_feedback\n      instruction\n      points\n      prompt\n      stem\n    }\n  }\n": types.QuestionitemVariantsTfquestionFragmentFragmentDoc,
    "\n  fragment QuestionitemVariantsFragment on QuestionitemVariants {\n    ... on QuestionitemVariantsMcquestion {\n      ...QuestionitemVariantsMcquestionFragment\n    }\n    ... on QuestionitemVariantsTfquestion {\n      ...QuestionitemVariantsTfquestionFragment\n    }\n  }\n": types.QuestionitemVariantsFragmentFragmentDoc,
    "\n  fragment QuestionItemFragment on Questionitem {\n    key_behavior\n    title\n    variants {\n      ... on QuestionitemVariantsMcquestion {\n        ...QuestionitemVariantsMcquestionFragment\n      }\n      ... on QuestionitemVariantsTfquestion {\n        ...QuestionitemVariantsTfquestionFragment\n      }\n    }\n    system {\n      uid\n      tags\n      locale\n      created_by\n      created_at\n      content_type_uid\n      branch\n      updated_at\n      updated_by\n      version\n    }\n  }\n": types.QuestionItemFragmentFragmentDoc,
    "\n  query QuestionItems {\n    all_questionitem {\n      items {\n        ...QuestionItemFragment\n      }\n      total\n    }\n  }\n": types.QuestionItemsDocument,
    "\n  query QuestionItem($uid: String!) {\n    questionitem(uid: $uid) {\n      ...QuestionItemFragment\n    }\n  }\n": types.QuestionItemDocument,
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
export function graphql(source: "\n  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {\n    __typename\n    mcquestion {\n      choices {\n        ...QuestionitemVariantsMcquestionBlockChoicesFragment\n      }\n      instruction\n      prompt\n      stem\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {\n    __typename\n    mcquestion {\n      choices {\n        ...QuestionitemVariantsMcquestionBlockChoicesFragment\n      }\n      instruction\n      prompt\n      stem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {\n      __typename\n      choice {\n        body\n        correct\n        feedback\n        points\n      }\n    }\n  "): (typeof documents)["\n    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {\n      __typename\n      choice {\n        body\n        correct\n        feedback\n        points\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {\n    __typename\n    tfquestion {\n      correct\n      feedback\n      incorrect_feedback\n      instruction\n      points\n      prompt\n      stem\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {\n    __typename\n    tfquestion {\n      correct\n      feedback\n      incorrect_feedback\n      instruction\n      points\n      prompt\n      stem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QuestionitemVariantsFragment on QuestionitemVariants {\n    ... on QuestionitemVariantsMcquestion {\n      ...QuestionitemVariantsMcquestionFragment\n    }\n    ... on QuestionitemVariantsTfquestion {\n      ...QuestionitemVariantsTfquestionFragment\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionitemVariantsFragment on QuestionitemVariants {\n    ... on QuestionitemVariantsMcquestion {\n      ...QuestionitemVariantsMcquestionFragment\n    }\n    ... on QuestionitemVariantsTfquestion {\n      ...QuestionitemVariantsTfquestionFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QuestionItemFragment on Questionitem {\n    key_behavior\n    title\n    variants {\n      ... on QuestionitemVariantsMcquestion {\n        ...QuestionitemVariantsMcquestionFragment\n      }\n      ... on QuestionitemVariantsTfquestion {\n        ...QuestionitemVariantsTfquestionFragment\n      }\n    }\n    system {\n      uid\n      tags\n      locale\n      created_by\n      created_at\n      content_type_uid\n      branch\n      updated_at\n      updated_by\n      version\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionItemFragment on Questionitem {\n    key_behavior\n    title\n    variants {\n      ... on QuestionitemVariantsMcquestion {\n        ...QuestionitemVariantsMcquestionFragment\n      }\n      ... on QuestionitemVariantsTfquestion {\n        ...QuestionitemVariantsTfquestionFragment\n      }\n    }\n    system {\n      uid\n      tags\n      locale\n      created_by\n      created_at\n      content_type_uid\n      branch\n      updated_at\n      updated_by\n      version\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QuestionItems {\n    all_questionitem {\n      items {\n        ...QuestionItemFragment\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query QuestionItems {\n    all_questionitem {\n      items {\n        ...QuestionItemFragment\n      }\n      total\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QuestionItem($uid: String!) {\n    questionitem(uid: $uid) {\n      ...QuestionItemFragment\n    }\n  }\n"): (typeof documents)["\n  query QuestionItem($uid: String!) {\n    questionitem(uid: $uid) {\n      ...QuestionItemFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;