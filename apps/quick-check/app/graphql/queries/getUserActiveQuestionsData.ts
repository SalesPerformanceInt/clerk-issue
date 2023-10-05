import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_ACTIVE_QUESTIONS_DATA = graphql(/* GraphQL */ `
  query GetUserActiveQuestionsData($userId: uuid!, $datetime: timestamptz!) {
    user_by_pk(user_id: $userId) {
      first_name
      last_name
      ...UserActiveQuestionsData
    }
  }
`);

export async function getUserActiveQuestionsData(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_USER_ACTIVE_QUESTIONS_DATA,
      variables: {
        userId,
        datetime: now,
      },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return {
      ...data.user_by_pk,
      active_enrollments: data.user_by_pk.active_enrollments.aggregate?.count,
      unanswered_questions:
        data.user_by_pk.unanswered_questions.aggregate?.count,
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
