import { DateTime } from "luxon";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

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
        order_by: [
          {
            user_answers_aggregate: {
              count: asc_nulls_first
              max: { created_at: asc }
            }
          }
        ]
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
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  const today = DateTime.fromISO(now).toISODate()!;

  try {
    const { data } = await this.query({
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
    logError({ error, log: "getUserEmailData" });
    return null;
  }
}

export type GetUserEmailData = NonNullable<
  Awaited<ReturnType<typeof getUserEmailData>>
>;
