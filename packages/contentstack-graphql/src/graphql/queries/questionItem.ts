import { graphql } from "~/generated";

import { graphQLClient } from "~/graphql/server/apollo.server";
export const QUESTION_ITEM = graphql(/* GraphQL */ `
  query QuestionItem($uid: String!) {
    questionitem(uid: $uid) {
      ...QuestionItemFragment
    }
  }
`);

export const getQuestionItem = async (uid: string) => {
  const { data } = await graphQLClient.query({
    query: QUESTION_ITEM,
    variables: { uid },
  });

  if (!data.questionitem) return null;

  return data.questionitem;
};
