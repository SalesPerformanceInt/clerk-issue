import type { ContentStackGraphQLClient } from "~/client";
import { graphql } from "~/generated/";
import { QuestionItemsQuery } from "~/generated/graphql";

export const ALL_QUESTION_ITEMS = graphql(/* GraphQL */ `
  query QuestionItems {
    all_questionitem {
      items {
        ...QuestionItemFragment
      }
      total
    }
  }
`);

export async function getAllQuestionItems(
  this: ContentStackGraphQLClient,
): Promise<QuestionItemsQuery["all_questionitem"]> {
  const { data } = await this.client.query({
    query: ALL_QUESTION_ITEMS,
  });

  return data.all_questionitem;
}
