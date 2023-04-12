import { graphql } from "~/generated";

import { graphQLClient } from "~/graphql/server/apollo.server";
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

export const getAllQuestionItems = async () => {
  const { data } = await graphQLClient.query({
    query: ALL_QUESTION_ITEMS,
  });

  return {
    questionItems: data.all_questionitem,
  };
};
