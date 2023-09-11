import { DateTime } from "luxon";
import { contentStack } from "~/contentstack.server";
import { graphql, type WithApolloClient } from "~/graphql";

export const GET_USER_DASHBOARD = graphql(/* GraphQL */ `
  query GetUserDashboard(
    $userId: uuid!
    $datetime: timestamptz!
    $monthAgo: timestamptz!
  ) {
    user_by_pk(user_id: $userId) {
      ...BaseUser
      ...UserActiveQuestionsData
      user_answers(where: { created_at: { _gte: $monthAgo } }) {
        ...BaseUserAnswer
      }
      user_enrollments {
        ...BaseUserEnrollment
        attempted: user_questions_aggregate(
          where: {
            user_answers_aggregate: { count: { predicate: { _gt: 0 } } }
            retired_on: { _is_null: true }
          }
        ) {
          aggregate {
            count
          }
        }
        unattempted: user_questions_aggregate(
          where: {
            user_answers_aggregate: { count: { predicate: { _eq: 0 } } }
            retired_on: { _is_null: true }
          }
        ) {
          aggregate {
            count
          }
        }
        retired: user_questions_aggregate(
          where: { retired_on: { _is_null: false } }
        ) {
          aggregate {
            count
          }
        }
        total: user_questions_aggregate {
          aggregate {
            count
          }
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
        monthAgo: now.minus({ month: 1 }).toISO()!,
      },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const { user_by_pk } = result.data;

    const user_enrollments = await Promise.all(
      user_by_pk.user_enrollments.map(async (enrollment) => {
        const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id);
        return {
          ...enrollment,
          taxonomy,
        };
      }),
    );

    return {
      ...user_by_pk,
      user_enrollments,
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
