import { DateTime } from "luxon";
import { contentStack } from "~/contentstack.server";
import { graphql, type WithApolloClient } from "~/graphql";

export const GET_USER_DASHBOARD = graphql(/* GraphQL */ `
  query GetUserDashboard(
    $userId: uuid!
    $datetime: timestamptz!
    $date: date!
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
            { completed_on: { _is_null: true, _lte: $date } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _gt: 0 }
                  filter: { retired_on: { _is_null: true } }
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
            { completed_on: { _is_null: false } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _eq: 0 }
                  filter: { retired_on: { _is_null: true } }
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
        where: { user_answers_aggregate: { count: { predicate: { _gt: 0 } } } }
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
          _or: [
            { completed_on: { _is_null: false } }
            {
              user_questions_aggregate: {
                count: {
                  predicate: { _eq: 0 }
                  filter: { retired_on: { _is_null: true } }
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
      total_enrollments: user_enrollments_aggregate {
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

export async function getUserDashboard(this: WithApolloClient, userId: string) {
  try {
    const now = DateTime.now();

    const result = await this.client.query({
      query: GET_USER_DASHBOARD,
      variables: {
        userId,
        datetime: now.toISO()!,
        date: now.toISODate()!,
        monthAgo: now.minus({ month: 1 }).toISO()!,
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
