import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type GraphQLClient,
  type User_Question_Bool_Exp,
} from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_NEXT_QUESTION = graphql(/* GraphQL */ `
  query GetUserNextQuestion(
    $userId: uuid!
    $today: date!
    $where: user_question_bool_exp = {}
  ) {
    user_by_pk(user_id: $userId) {
      user_questions(
        where: {
          active_on: { _lte: $today }
          retired_on: { _is_null: true }
          user_enrollment: {
            _or: [
              { expiration_date: { _is_null: true } }
              { expiration_date: { _gt: $today } }
            ]
          }
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
  this: GraphQLClient,
  currentQuestionId: string = "",
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  const today = getToday(now);

  const where: User_Question_Bool_Exp = currentQuestionId
    ? { id: { _neq: currentQuestionId } }
    : {};

  try {
    const result = await this.query({
      query: GET_USER_NEXT_QUESTION,
      variables: { userId, today, where },
      fetchPolicy: "no-cache",
    });

    return result.data.user_by_pk?.user_questions?.[0] ?? null;
  } catch (error) {
    logError({ error, log: "getUserNextQuestion" });
    return null;
  }
}
