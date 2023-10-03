import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_EMAIL_DATA = graphql(/* GraphQL */ `
  query GetUserEmailData($userId: uuid!, $datetime: timestamptz!) {
    user_by_pk(user_id: $userId) {
      ...UserWithActiveToken
      ...UserActiveQuestionsData
    }
  }
`);

export async function getUserEmailData(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_USER_EMAIL_DATA,
      variables: { userId, datetime: now },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    const { user_by_pk } = data;

    return {
      ...user_by_pk,
      active_enrollments: user_by_pk.active_enrollments.aggregate?.count,
      unanswered_questions: user_by_pk.unanswered_questions.aggregate?.count,
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
