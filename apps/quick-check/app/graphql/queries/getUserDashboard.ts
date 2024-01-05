import { getContentStackClient } from "~/contentstack.server";
import { DateTime } from "luxon";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_DASHBOARD = graphql(/* GraphQL */ `
  query GetUserDashboard(
    $userId: uuid!
    $today: date!
    $monthAgo: timestamptz!
  ) {
    user_by_pk(user_id: $userId) {
      ...BaseUser
      ...UserActiveQuestionsData
      user_answers(where: { created_at: { _gte: $monthAgo } }) {
        ...BaseUserAnswer
      }
      active_user_enrollments: user_enrollments(
        where: {
          _and: [
            {
              _or: [
                { expiration_date: { _is_null: true } }
                { expiration_date: { _gte: $today } }
              ]
            }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _gt: 0 }
                  filter: { _or: [{ retired_on: { _is_null: true } }] }
                }
              }
            }
          ]
        }
      ) {
        ...UserEnrollmentWithCounts
      }
      completed_user_enrollments: user_enrollments(
        where: {
          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }
          _or: [
            { expiration_date: { _is_null: false, _lte: $today } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _eq: 0 }
                  filter: { _or: [{ retired_on: { _is_null: true } }] }
                }
              }
            }
          ]
        }
      ) {
        ...UserEnrollmentWithCounts
      }
      skills_attempted: user_questions_aggregate(
        distinct_on: taxonomy_id
        where: {
          last_answered_on: { _is_null: false }
          user_answers_aggregate: { count: { predicate: { _gt: 0 } } }
        }
      ) {
        aggregate {
          count
        }
      }
      total_skills: user_questions_aggregate(distinct_on: taxonomy_id) {
        aggregate {
          count
        }
      }
      completed_enrollments: user_enrollments_aggregate(
        where: {
          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }
          _or: [
            { expiration_date: { _is_null: false, _lte: $today } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _eq: 0 }
                  filter: { _or: [{ retired_on: { _is_null: true } }] }
                }
              }
            }
          ]
        }
      ) {
        aggregate {
          count
        }
      }
      total_enrollments: user_enrollments_aggregate(
        where: {
          user_questions_aggregate: { count: { predicate: { _gt: 0 } } }
        }
      ) {
        aggregate {
          count
        }
      }
      retired_questions: user_questions_aggregate(
        where: { retired_on: { _is_null: false } }
      ) {
        aggregate {
          count
        }
      }
      total_questions: user_questions_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`);

export async function getUserDashboard(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const today = getToday(now);

    const result = await this.client.query({
      query: GET_USER_DASHBOARD,
      variables: {
        userId,
        today,
        monthAgo: DateTime.fromISO(now)
          .minus({ month: 1 })
          .startOf("day")
          .toISO()!,
      },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const { user_by_pk } = result.data;

    const language = user_by_pk.language_preference;
    const contentStack = getContentStackClient(language);

    const active_user_enrollments = await Promise.all(
      user_by_pk.active_user_enrollments.map(async (enrollment) => {
        const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id);
        return {
          ...enrollment,
          taxonomy,
        };
      }),
    );

    const completed_user_enrollments = await Promise.all(
      user_by_pk.completed_user_enrollments.map(async (enrollment) => {
        const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id);

        return {
          ...enrollment,
          taxonomy,
        };
      }),
    );

    const weeklyStreak = await this.getUserWeeklyStreak(proxyData);

    return {
      ...user_by_pk,
      weeklyStreak,
      active_user_enrollments,
      completed_user_enrollments,
      taxonomy_ids: active_user_enrollments.map(
        (enrollment) => enrollment.taxonomy_id,
      ),
      active_enrollments: user_by_pk.active_enrollments.aggregate?.count,
      unanswered_questions: user_by_pk.unanswered_questions.aggregate?.count,
    };
  } catch (error) {
    logError({ error, log: "getUserDashboard" });
    return null;
  }
}

export type DashboardData = NonNullable<
  Awaited<ReturnType<typeof getUserDashboard>>
>;
