import {
  graphql,
  type GQLUserProxyData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_NEXT_QUESTION = graphql(/* GraphQL */ `
  query GetUserNextQuestion($userId: uuid!, $now: timestamptz!) {
    user_by_pk(user_id: $userId) {
      user_questions(
        where: { active_on: { _lte: $now } }
        order_by: { active_on: asc }
        limit: 1
      ) {
        ...BaseUserQuestion
      }
    }
  }
`);

export async function getUserNextQuestion(
  this: WithApolloClient,
  proxyData: GQLUserProxyData,
) {
  const { userId, now } = proxyData;

  try {
    const result = await this.client.query({
      query: GET_USER_NEXT_QUESTION,
      variables: { userId, now },
      fetchPolicy: "no-cache",
    });

    return result.data.user_by_pk?.user_questions?.[0] ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
