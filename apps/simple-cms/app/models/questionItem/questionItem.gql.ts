import { gql } from "@apollo/client";

import { getAllMultipleChoice } from "./variants/multipleChoice";
import { getAllTrueOrFalse } from "./variants/trueOrFalse";

/**
 * Multiple Query
 */

export const getAllQuestionItems = () => gql`
  query QuestionItems {
    all_questionitem {
      items {
        key_behavior
        title
        variants {
          ... on ${getAllMultipleChoice()}
          ... on ${getAllTrueOrFalse()}
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
