import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_QUESTION_ANSWERS = graphql(/* GraphQL */ `
  query GetUserQuestionAnswers($userId: uuid!, $questionId: uuid!) {
    user_answer(
      where: { user_id: { _eq: $userId }, question_id: { _eq: $questionId } }
      limit: 1
      order_by: { created_at: desc }
    ) {
      ...BaseUserAnswer
    }
  }
`);

export async function getUserQuestionAnswers(
  this: WithApolloClient,
  questionId: string,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const result = await this.client.query({
      query: GET_USER_QUESTION_ANSWERS,
      variables: { userId, questionId },
      fetchPolicy: "no-cache",
    });

    return result.data.user_answer ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
