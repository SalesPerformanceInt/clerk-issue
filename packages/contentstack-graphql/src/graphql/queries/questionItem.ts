import { graphql } from "~/generated";
import type { ContentStackGraphQLClient } from "~/graphql";

// import { graphQLClient } from "~/graphql/server/apollo.server";
export const QUESTION_ITEM = graphql(/* GraphQL */ `
  query QuestionItem($uid: String!) {
    questionitem(uid: $uid) {
      ...QuestionItemFragment
    }
  }
`);

// export const getQuestionItem = async (uid: string) => {
//   const { data } = await graphQLClient.query({
//     query: QUESTION_ITEM,
//     variables: { uid },
//   });

//   if (!data.questionitem) return null;

//   return data.questionitem;
// };

export async function getQuestionItem(
  this: ContentStackGraphQLClient,
  uid: string,
) {
  const { data } = await this.client.query({
    query: QUESTION_ITEM,
    variables: { uid },
  });

  if (!data.questionitem) return null;

  return data.questionitem;
}
