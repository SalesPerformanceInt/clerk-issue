import { graphql } from "~/generated";
import type { ContentStackGraphQLClient } from "~/graphql/client";

export const QUESTION_ITEM = graphql(/* GraphQL */ `
  query QuestionItem($uid: String!) {
    questionitem(uid: $uid) {
      ...QuestionItemFragment
    }
  }
`);

export async function getQuestionItem(
  this: ContentStackGraphQLClient,
  uid: string,
) {
  try {
    const { data } = await this.client.query({
      query: QUESTION_ITEM,
      variables: { uid },
    });

    if (!data.questionitem) return null;

    return data.questionitem;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
