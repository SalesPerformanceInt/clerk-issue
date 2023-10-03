import {
  graphql,
  type GQLUserProxyData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_QUESTION_LEARNING_RECORD = graphql(/* GraphQL */ `
  query GetUserQuestionLearningRecord($userId: uuid!, $questionId: uuid!) {
    learning_record(
      where: {
        user_id: { _eq: $userId }
        data: { _contains: { questionId: $questionId } }
      }
      limit: 1
      order_by: { created_at: desc }
    ) {
      created_at
      data
    }
  }
`);

export async function getUserQuestionLearningRecord(
  this: WithApolloClient,
  questionId: string,
  proxyData: GQLUserProxyData,
) {
  const { userId } = proxyData;

  try {
    const result = await this.client.query({
      query: GET_USER_QUESTION_LEARNING_RECORD,
      variables: { userId, questionId },
      fetchPolicy: "no-cache",
    });

    return result.data.learning_record?.[0] ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
