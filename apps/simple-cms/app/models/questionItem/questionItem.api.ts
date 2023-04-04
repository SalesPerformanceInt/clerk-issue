import { graphQLClient } from "~/utils/server";

import { allQuestionItemsQuery } from "./questionItem.queries";
import type { QueryAllQuestionItems } from "./questionItem.types";

/**
 * Multiple Query
 */

export const getAllQuestionItems = async () => {
  const { data } = await graphQLClient.query<QueryAllQuestionItems>({
    query: allQuestionItemsQuery(),
  });

  return {
    questionItems: data.all_questionitem,
  };
};
