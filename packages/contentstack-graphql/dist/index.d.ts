import * as _graphql_typed_document_node_core from '@graphql-typed-document-node/core';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import * as _apollo_client from '@apollo/client';
import { ApolloClient } from '@apollo/client';

type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type QuestionitemVariantsMcquestionFragmentFragment = {
    __typename: 'QuestionitemVariantsMcquestion';
    mcquestion?: {
        __typename?: 'QuestionitemVariantsMcquestionBlock';
        instruction?: string | null;
        prompt?: string | null;
        stem?: string | null;
        choices?: Array<{
            __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice';
            choice?: {
                __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock';
                body?: string | null;
                correct?: boolean | null;
                feedback?: string | null;
                points?: number | null;
            } | null;
        } | null> | null;
    } | null;
};
type QuestionitemVariantsMcquestionBlockChoicesFragmentFragment = {
    __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice';
    choice?: {
        __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock';
        body?: string | null;
        correct?: boolean | null;
        feedback?: string | null;
        points?: number | null;
    } | null;
};
type QuestionitemVariantsTfquestionFragmentFragment = {
    __typename: 'QuestionitemVariantsTfquestion';
    tfquestion?: {
        __typename?: 'QuestionitemVariantsTfquestionBlock';
        correct?: boolean | null;
        feedback?: string | null;
        incorrect_feedback?: string | null;
        instruction?: string | null;
        points?: number | null;
        prompt?: string | null;
        stem?: string | null;
    } | null;
};
type QuestionitemVariantsFragment_QuestionitemVariantsMcquestion_Fragment = {
    __typename: 'QuestionitemVariantsMcquestion';
    mcquestion?: {
        __typename?: 'QuestionitemVariantsMcquestionBlock';
        instruction?: string | null;
        prompt?: string | null;
        stem?: string | null;
        choices?: Array<{
            __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice';
            choice?: {
                __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock';
                body?: string | null;
                correct?: boolean | null;
                feedback?: string | null;
                points?: number | null;
            } | null;
        } | null> | null;
    } | null;
};
type QuestionitemVariantsFragment_QuestionitemVariantsTfquestion_Fragment = {
    __typename: 'QuestionitemVariantsTfquestion';
    tfquestion?: {
        __typename?: 'QuestionitemVariantsTfquestionBlock';
        correct?: boolean | null;
        feedback?: string | null;
        incorrect_feedback?: string | null;
        instruction?: string | null;
        points?: number | null;
        prompt?: string | null;
        stem?: string | null;
    } | null;
};
type QuestionitemVariantsFragmentFragment = QuestionitemVariantsFragment_QuestionitemVariantsMcquestion_Fragment | QuestionitemVariantsFragment_QuestionitemVariantsTfquestion_Fragment;
type QuestionItemFragmentFragment = {
    __typename?: 'Questionitem';
    key_behavior?: string | null;
    title?: string | null;
    variants?: Array<{
        __typename: 'QuestionitemVariantsMcquestion';
        mcquestion?: {
            __typename?: 'QuestionitemVariantsMcquestionBlock';
            instruction?: string | null;
            prompt?: string | null;
            stem?: string | null;
            choices?: Array<{
                __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice';
                choice?: {
                    __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock';
                    body?: string | null;
                    correct?: boolean | null;
                    feedback?: string | null;
                    points?: number | null;
                } | null;
            } | null> | null;
        } | null;
    } | {
        __typename: 'QuestionitemVariantsTfquestion';
        tfquestion?: {
            __typename?: 'QuestionitemVariantsTfquestionBlock';
            correct?: boolean | null;
            feedback?: string | null;
            incorrect_feedback?: string | null;
            instruction?: string | null;
            points?: number | null;
            prompt?: string | null;
            stem?: string | null;
        } | null;
    } | null> | null;
    system?: {
        __typename?: 'EntrySystemField';
        uid?: string | null;
        tags?: Array<string | null> | null;
        locale?: string | null;
        created_by?: string | null;
        created_at?: any | null;
        content_type_uid?: string | null;
        branch?: string | null;
        updated_at?: any | null;
        updated_by?: string | null;
        version?: number | null;
    } | null;
};
type QuestionItemsQuery = {
    __typename?: 'Query';
    all_questionitem?: {
        __typename?: 'AllQuestionitem';
        total?: number | null;
        items?: Array<{
            __typename?: 'Questionitem';
            key_behavior?: string | null;
            title?: string | null;
            variants?: Array<{
                __typename: 'QuestionitemVariantsMcquestion';
                mcquestion?: {
                    __typename?: 'QuestionitemVariantsMcquestionBlock';
                    instruction?: string | null;
                    prompt?: string | null;
                    stem?: string | null;
                    choices?: Array<{
                        __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice';
                        choice?: {
                            __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock';
                            body?: string | null;
                            correct?: boolean | null;
                            feedback?: string | null;
                            points?: number | null;
                        } | null;
                    } | null> | null;
                } | null;
            } | {
                __typename: 'QuestionitemVariantsTfquestion';
                tfquestion?: {
                    __typename?: 'QuestionitemVariantsTfquestionBlock';
                    correct?: boolean | null;
                    feedback?: string | null;
                    incorrect_feedback?: string | null;
                    instruction?: string | null;
                    points?: number | null;
                    prompt?: string | null;
                    stem?: string | null;
                } | null;
            } | null> | null;
            system?: {
                __typename?: 'EntrySystemField';
                uid?: string | null;
                tags?: Array<string | null> | null;
                locale?: string | null;
                created_by?: string | null;
                created_at?: any | null;
                content_type_uid?: string | null;
                branch?: string | null;
                updated_at?: any | null;
                updated_by?: string | null;
                version?: number | null;
            } | null;
        } | null> | null;
    } | null;
};
type QuestionItemQuery = {
    __typename?: 'Query';
    questionitem?: {
        __typename?: 'Questionitem';
        key_behavior?: string | null;
        title?: string | null;
        variants?: Array<{
            __typename: 'QuestionitemVariantsMcquestion';
            mcquestion?: {
                __typename?: 'QuestionitemVariantsMcquestionBlock';
                instruction?: string | null;
                prompt?: string | null;
                stem?: string | null;
                choices?: Array<{
                    __typename: 'QuestionitemVariantsMcquestionBlockChoicesChoice';
                    choice?: {
                        __typename?: 'QuestionitemVariantsMcquestionBlockChoicesChoiceBlock';
                        body?: string | null;
                        correct?: boolean | null;
                        feedback?: string | null;
                        points?: number | null;
                    } | null;
                } | null> | null;
            } | null;
        } | {
            __typename: 'QuestionitemVariantsTfquestion';
            tfquestion?: {
                __typename?: 'QuestionitemVariantsTfquestionBlock';
                correct?: boolean | null;
                feedback?: string | null;
                incorrect_feedback?: string | null;
                instruction?: string | null;
                points?: number | null;
                prompt?: string | null;
                stem?: string | null;
            } | null;
        } | null> | null;
        system?: {
            __typename?: 'EntrySystemField';
            uid?: string | null;
            tags?: Array<string | null> | null;
            locale?: string | null;
            created_by?: string | null;
            created_at?: any | null;
            content_type_uid?: string | null;
            branch?: string | null;
            updated_at?: any | null;
            updated_by?: string | null;
            version?: number | null;
        } | null;
    } | null;
};

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
declare const documents: {
    "\n  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {\n    __typename\n    mcquestion {\n      choices {\n        ...QuestionitemVariantsMcquestionBlockChoicesFragment\n      }\n      instruction\n      prompt\n      stem\n    }\n  }\n": TypedDocumentNode<QuestionitemVariantsMcquestionFragmentFragment, unknown>;
    "\n    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {\n      __typename\n      choice {\n        body\n        correct\n        feedback\n        points\n      }\n    }\n  ": TypedDocumentNode<QuestionitemVariantsMcquestionBlockChoicesFragmentFragment, unknown>;
    "\n  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {\n    __typename\n    tfquestion {\n      correct\n      feedback\n      incorrect_feedback\n      instruction\n      points\n      prompt\n      stem\n    }\n  }\n": TypedDocumentNode<QuestionitemVariantsTfquestionFragmentFragment, unknown>;
    "\n  fragment QuestionitemVariantsFragment on QuestionitemVariants {\n    ... on QuestionitemVariantsMcquestion {\n      ...QuestionitemVariantsMcquestionFragment\n    }\n    ... on QuestionitemVariantsTfquestion {\n      ...QuestionitemVariantsTfquestionFragment\n    }\n  }\n": TypedDocumentNode<QuestionitemVariantsFragmentFragment, unknown>;
    "\n  fragment QuestionItemFragment on Questionitem {\n    key_behavior\n    title\n    variants {\n      ... on QuestionitemVariantsMcquestion {\n        ...QuestionitemVariantsMcquestionFragment\n      }\n      ... on QuestionitemVariantsTfquestion {\n        ...QuestionitemVariantsTfquestionFragment\n      }\n    }\n    system {\n      uid\n      tags\n      locale\n      created_by\n      created_at\n      content_type_uid\n      branch\n      updated_at\n      updated_by\n      version\n    }\n  }\n": TypedDocumentNode<QuestionItemFragmentFragment, unknown>;
    "\n  query QuestionItems {\n    all_questionitem {\n      items {\n        ...QuestionItemFragment\n      }\n      total\n    }\n  }\n": TypedDocumentNode<QuestionItemsQuery, Exact<{
        [key: string]: never;
    }>>;
    "\n  query QuestionItem($uid: String!) {\n    questionitem(uid: $uid) {\n      ...QuestionItemFragment\n    }\n  }\n": TypedDocumentNode<QuestionItemQuery, Exact<{
        uid: string;
    }>>;
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
declare function graphql(source: string): unknown;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {\n    __typename\n    mcquestion {\n      choices {\n        ...QuestionitemVariantsMcquestionBlockChoicesFragment\n      }\n      instruction\n      prompt\n      stem\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {\n    __typename\n    mcquestion {\n      choices {\n        ...QuestionitemVariantsMcquestionBlockChoicesFragment\n      }\n      instruction\n      prompt\n      stem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {\n      __typename\n      choice {\n        body\n        correct\n        feedback\n        points\n      }\n    }\n  "): (typeof documents)["\n    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {\n      __typename\n      choice {\n        body\n        correct\n        feedback\n        points\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {\n    __typename\n    tfquestion {\n      correct\n      feedback\n      incorrect_feedback\n      instruction\n      points\n      prompt\n      stem\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {\n    __typename\n    tfquestion {\n      correct\n      feedback\n      incorrect_feedback\n      instruction\n      points\n      prompt\n      stem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  fragment QuestionitemVariantsFragment on QuestionitemVariants {\n    ... on QuestionitemVariantsMcquestion {\n      ...QuestionitemVariantsMcquestionFragment\n    }\n    ... on QuestionitemVariantsTfquestion {\n      ...QuestionitemVariantsTfquestionFragment\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionitemVariantsFragment on QuestionitemVariants {\n    ... on QuestionitemVariantsMcquestion {\n      ...QuestionitemVariantsMcquestionFragment\n    }\n    ... on QuestionitemVariantsTfquestion {\n      ...QuestionitemVariantsTfquestionFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  fragment QuestionItemFragment on Questionitem {\n    key_behavior\n    title\n    variants {\n      ... on QuestionitemVariantsMcquestion {\n        ...QuestionitemVariantsMcquestionFragment\n      }\n      ... on QuestionitemVariantsTfquestion {\n        ...QuestionitemVariantsTfquestionFragment\n      }\n    }\n    system {\n      uid\n      tags\n      locale\n      created_by\n      created_at\n      content_type_uid\n      branch\n      updated_at\n      updated_by\n      version\n    }\n  }\n"): (typeof documents)["\n  fragment QuestionItemFragment on Questionitem {\n    key_behavior\n    title\n    variants {\n      ... on QuestionitemVariantsMcquestion {\n        ...QuestionitemVariantsMcquestionFragment\n      }\n      ... on QuestionitemVariantsTfquestion {\n        ...QuestionitemVariantsTfquestionFragment\n      }\n    }\n    system {\n      uid\n      tags\n      locale\n      created_by\n      created_at\n      content_type_uid\n      branch\n      updated_at\n      updated_by\n      version\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query QuestionItems {\n    all_questionitem {\n      items {\n        ...QuestionItemFragment\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query QuestionItems {\n    all_questionitem {\n      items {\n        ...QuestionItemFragment\n      }\n      total\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
declare function graphql(source: "\n  query QuestionItem($uid: String!) {\n    questionitem(uid: $uid) {\n      ...QuestionItemFragment\n    }\n  }\n"): (typeof documents)["\n  query QuestionItem($uid: String!) {\n    questionitem(uid: $uid) {\n      ...QuestionItemFragment\n    }\n  }\n"];
type DocumentType<TDocumentNode extends TypedDocumentNode<any, any>> = TDocumentNode extends TypedDocumentNode<infer TType, any> ? TType : never;

declare const QuestionitemVariantsMcquestionFragment: _graphql_typed_document_node_core.TypedDocumentNode<QuestionitemVariantsMcquestionFragmentFragment, unknown>;
declare const QuestionitemVariantsMcquestionBlockChoicesFragment: _graphql_typed_document_node_core.TypedDocumentNode<QuestionitemVariantsMcquestionBlockChoicesFragmentFragment, unknown>;
declare const QuestionitemVariantsTfquestionFragment: _graphql_typed_document_node_core.TypedDocumentNode<QuestionitemVariantsTfquestionFragmentFragment, unknown>;
declare const QuestionitemVariantsFragment: _graphql_typed_document_node_core.TypedDocumentNode<QuestionitemVariantsFragmentFragment, unknown>;
declare const QuestionItemFragment: _graphql_typed_document_node_core.TypedDocumentNode<QuestionItemFragmentFragment, unknown>;

declare const ALL_QUESTION_ITEMS: _graphql_typed_document_node_core.TypedDocumentNode<QuestionItemsQuery, Exact<{
    [key: string]: never;
}>>;
declare const getAllQuestionItems: () => Promise<{
    questionItems: {
        __typename?: "AllQuestionitem" | undefined;
        total?: number | null | undefined;
        items?: ({
            __typename?: "Questionitem" | undefined;
            key_behavior?: string | null | undefined;
            title?: string | null | undefined;
            variants?: ({
                __typename: "QuestionitemVariantsMcquestion";
                mcquestion?: {
                    __typename?: "QuestionitemVariantsMcquestionBlock" | undefined;
                    instruction?: string | null | undefined;
                    prompt?: string | null | undefined;
                    stem?: string | null | undefined;
                    choices?: ({
                        __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice";
                        choice?: {
                            __typename?: "QuestionitemVariantsMcquestionBlockChoicesChoiceBlock" | undefined;
                            body?: string | null | undefined;
                            correct?: boolean | null | undefined;
                            feedback?: string | null | undefined;
                            points?: number | null | undefined;
                        } | null | undefined;
                    } | null)[] | null | undefined;
                } | null | undefined;
            } | {
                __typename: "QuestionitemVariantsTfquestion";
                tfquestion?: {
                    __typename?: "QuestionitemVariantsTfquestionBlock" | undefined;
                    correct?: boolean | null | undefined;
                    feedback?: string | null | undefined;
                    incorrect_feedback?: string | null | undefined;
                    instruction?: string | null | undefined;
                    points?: number | null | undefined;
                    prompt?: string | null | undefined;
                    stem?: string | null | undefined;
                } | null | undefined;
            } | null)[] | null | undefined;
            system?: {
                __typename?: "EntrySystemField" | undefined;
                uid?: string | null | undefined;
                tags?: (string | null)[] | null | undefined;
                locale?: string | null | undefined;
                created_by?: string | null | undefined;
                created_at?: any;
                content_type_uid?: string | null | undefined;
                branch?: string | null | undefined;
                updated_at?: any;
                updated_by?: string | null | undefined;
                version?: number | null | undefined;
            } | null | undefined;
        } | null)[] | null | undefined;
    } | null | undefined;
}>;

declare const QUESTION_ITEM: _graphql_typed_document_node_core.TypedDocumentNode<QuestionItemQuery, Exact<{
    uid: string;
}>>;
declare const getQuestionItem: (uid: string) => Promise<{
    __typename?: "Questionitem" | undefined;
    key_behavior?: string | null | undefined;
    title?: string | null | undefined;
    variants?: ({
        __typename: "QuestionitemVariantsMcquestion";
        mcquestion?: {
            __typename?: "QuestionitemVariantsMcquestionBlock" | undefined;
            instruction?: string | null | undefined;
            prompt?: string | null | undefined;
            stem?: string | null | undefined;
            choices?: ({
                __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice";
                choice?: {
                    __typename?: "QuestionitemVariantsMcquestionBlockChoicesChoiceBlock" | undefined;
                    body?: string | null | undefined;
                    correct?: boolean | null | undefined;
                    feedback?: string | null | undefined;
                    points?: number | null | undefined;
                } | null | undefined;
            } | null)[] | null | undefined;
        } | null | undefined;
    } | {
        __typename: "QuestionitemVariantsTfquestion";
        tfquestion?: {
            __typename?: "QuestionitemVariantsTfquestionBlock" | undefined;
            correct?: boolean | null | undefined;
            feedback?: string | null | undefined;
            incorrect_feedback?: string | null | undefined;
            instruction?: string | null | undefined;
            points?: number | null | undefined;
            prompt?: string | null | undefined;
            stem?: string | null | undefined;
        } | null | undefined;
    } | null)[] | null | undefined;
    system?: {
        __typename?: "EntrySystemField" | undefined;
        uid?: string | null | undefined;
        tags?: (string | null)[] | null | undefined;
        locale?: string | null | undefined;
        created_by?: string | null | undefined;
        created_at?: any;
        content_type_uid?: string | null | undefined;
        branch?: string | null | undefined;
        updated_at?: any;
        updated_by?: string | null | undefined;
        version?: number | null | undefined;
    } | null | undefined;
} | null>;

declare const graphQLClient: ApolloClient<_apollo_client.NormalizedCacheObject>;

export { ALL_QUESTION_ITEMS, DocumentType, QUESTION_ITEM, QuestionItemFragment, QuestionitemVariantsFragment, QuestionitemVariantsMcquestionBlockChoicesFragment, QuestionitemVariantsMcquestionFragment, QuestionitemVariantsTfquestionFragment, getAllQuestionItems, getQuestionItem, graphQLClient, graphql };
