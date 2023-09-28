import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

export const GET_USER_ACTIVE_QUESTIONS_DATA = graphql(/* GraphQL */ `
  query GetUserActiveQuestionsData($userId: uuid!, $datetime: timestamptz!) {
    user_by_pk(user_id: $userId) {
      ...UserActiveQuestionsData
    }
  }
`);

export async function getUserActiveQuestionsData(
  this: WithApolloClient,
  proxyData: GQLProxyData,
) {
  try {
    const { data } = await this.client.query({
      query: GET_USER_ACTIVE_QUESTIONS_DATA,
      variables: {
        userId: proxyData.userId,
        datetime: new Date().toISOString(),
      },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return {
      active_enrollments: data.user_by_pk.active_enrollments.aggregate?.count,
      unanswered_questions:
        data.user_by_pk.unanswered_questions.aggregate?.count,
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
