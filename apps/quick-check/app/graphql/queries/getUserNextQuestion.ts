import {
  graphql,
  type GQLProxyUserData,
  type User_Question_Bool_Exp,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_NEXT_QUESTION = graphql(/* GraphQL */ `
  query GetUserNextQuestion(
    $userId: uuid!
    $now: timestamptz!
    $where: user_question_bool_exp = {}
  ) {
    user_by_pk(user_id: $userId) {
      user_questions(
        where: {
          active_on: { _lte: $now }
          retired_on: { _is_null: true }
          _and: [$where]
        }
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
  currentQuestionId: string = "",
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  const where: User_Question_Bool_Exp = currentQuestionId
    ? { id: { _neq: currentQuestionId } }
    : {};

  try {
    const result = await this.client.query({
      query: GET_USER_NEXT_QUESTION,
      variables: { userId, now, where },
      fetchPolicy: "no-cache",
    });

    return result.data.user_by_pk?.user_questions?.[0] ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
