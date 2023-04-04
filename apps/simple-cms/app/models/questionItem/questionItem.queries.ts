import { gql } from "@apollo/client";

import { allMultipleChoiceQuery } from "./variants/multipleChoice";
import { allTrueOrFalseQuery } from "./variants/trueOrFalse";

/**
 * Multiple Query
 */

export const allQuestionItemsQuery = () => gql`
  query QuestionItems {
    all_questionitem {
      items {
        key_behavior
        title
        variants {
          ... on ${allMultipleChoiceQuery()}
          ... on ${allTrueOrFalseQuery()}
        }
        system {
          uid
          tags
          locale
          created_by
          created_at
          content_type_uid
          branch
          updated_at
          updated_by
          version
        }
      }
      total
    }
  }
`;
