import { DateTime } from "luxon";

import { contentStack } from "~/contentstack.server";

import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_DASHBOARD = graphql(/* GraphQL */ `
  query GetUserDashboard(
    $userId: uuid!
    $now: timestamptz!
    $nowDate: date!
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
          _or: [
            {
              _or: [
                { completed_on: { _is_null: true } }
                { completed_on: { _gte: $nowDate } }
              ]
            }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _gt: 0 }
                  filter: {
                    _or: [
                      { retired_on: { _is_null: true } }
                      { retired_on: { _gte: $now } }
                    ]
                  }
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
          _or: [
            { completed_on: { _is_null: false, _lte: $nowDate } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _eq: 0 }
                  filter: {
                    _or: [
                      { retired_on: { _is_null: true } }
                      { retired_on: { _gte: $now } }
                    ]
                  }
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
          created_at: { _lte: $now }
          last_answered_on: { _is_null: false }
          user_answers_aggregate: {
            count: {
              predicate: { _gt: 0 }
              filter: { created_at: { _lte: $now } }
            }
          }
        }
      ) {
        aggregate {
          count
        }
      }
      total_skills: user_questions_aggregate(
        distinct_on: taxonomy_id
        where: { created_at: { _lte: $now } }
      ) {
        aggregate {
          count
        }
      }
      completed_enrollments: user_enrollments_aggregate(
        where: {
          _or: [
            { completed_on: { _is_null: false, _lte: $nowDate } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _eq: 0 }
                  filter: {
                    _or: [
                      { retired_on: { _is_null: true } }
                      { retired_on: { _gte: $now } }
                    ]
                  }
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
        where: { created_at: { _lte: $now } }
      ) {
        aggregate {
          count
        }
      }
      retired_questions: user_questions_aggregate(
        where: { retired_on: { _is_null: false, _lte: $now } }
      ) {
        aggregate {
          count
        }
      }
      total_questions: user_questions_aggregate(
        where: { created_at: { _lte: $now } }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`);

export async function getUserDashboard(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const result = await this.client.query({
      query: GET_USER_DASHBOARD,
      variables: {
        userId,
        now,
        nowDate: DateTime.fromISO(now).toISODate()!,
        monthAgo: DateTime.fromISO(now).minus({ month: 1 }).toISO()!,
      },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const { user_by_pk } = result.data;

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

    return {
      ...user_by_pk,
      active_user_enrollments,
      completed_user_enrollments,
      taxonomy_ids: active_user_enrollments.map(
        (enrollment) => enrollment.taxonomy_id,
      ),
      active_enrollments: user_by_pk.active_enrollments.aggregate?.count,
      unanswered_questions: user_by_pk.unanswered_questions.aggregate?.count,
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type DashboardData = NonNullable<
  Awaited<ReturnType<typeof getUserDashboard>>
>;
