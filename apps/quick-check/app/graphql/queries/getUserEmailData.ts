import { DateTime } from "luxon";

import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_EMAIL_DATA = graphql(/* GraphQL */ `
  query GetUserEmailData($userId: uuid!, $today: date!) {
    user_by_pk(user_id: $userId) {
      ...UserWithActiveToken
      ...UserActiveQuestionsData
      user_answers(order_by: { created_at: desc }, limit: 1) {
        correct
        created_at
        id
        question_id
      }
      user_question_activated_today: user_questions(
        where: { active_on: { _eq: $today }, retired_on: { _is_null: true } }
        limit: 1
      ) {
        ...BaseUserQuestion
      }
      user_enrollments(limit: 1, order_by: { created_at: asc }) {
        ...BaseUserEnrollment
      }
    }
  }
`);

export async function getUserEmailData(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  const today = DateTime.fromISO(now).toISODate()!;

  try {
    const { data } = await this.client.query({
      query: GET_USER_EMAIL_DATA,
      variables: { userId, today },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    const { user_by_pk } = data;

    return {
      ...user_by_pk,
      active_enrollments: user_by_pk.active_enrollments.aggregate?.count,
      unanswered_questions: user_by_pk.unanswered_questions.aggregate?.count,
      last_user_answer: user_by_pk.user_answers[0],
      user_question_activated_today:
        user_by_pk.user_question_activated_today[0],
      first_user_enrollment: user_by_pk.user_enrollments[0],
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type GetUserEmailData = NonNullable<
  Awaited<ReturnType<typeof getUserEmailData>>
>;
