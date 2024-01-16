import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_ACHIEVEMENTS = graphql(/* GraphQL */ `
  query GetUserAchievements($userId: uuid!, $today: date!) {
    user_by_pk(user_id: $userId) {
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

export async function getUserAchievements(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const today = getToday(now);

    const result = await this.client.query({
      query: GET_USER_ACHIEVEMENTS,
      variables: { userId, today },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const achievements = { ...result.data.user_by_pk };

    const attemptedSkills = achievements.skills_attempted.aggregate?.count ?? 0;
    const totalSkills = achievements.total_skills.aggregate?.count ?? 0;
    const attemptedSkillsPercentage =
      (attemptedSkills / totalSkills) * 100 || 0;

    const completedEnrollments =
      achievements.completed_enrollments.aggregate?.count ?? 0;
    const totalEnrollments =
      achievements.total_enrollments.aggregate?.count ?? 0;
    const completedEnrollmentsPercentage =
      (completedEnrollments / totalEnrollments) * 100 || 0;

    const retiredQuestions =
      achievements.retired_questions.aggregate?.count ?? 0;
    const totalQuestions = achievements.total_questions.aggregate?.count ?? 0;
    const retiredQuestionsPercentage =
      (retiredQuestions / totalQuestions) * 100 || 0;

    return {
      attemptedSkills,
      totalSkills,
      attemptedSkillsPercentage,
      completedEnrollments,
      totalEnrollments,
      completedEnrollmentsPercentage,
      retiredQuestions,
      totalQuestions,
      retiredQuestionsPercentage,
    };
  } catch (error) {
    logError({ error, log: "getUserAchievements" });
    return null;
  }
}

export type UserDashboardAchievements = NonNullable<
  Awaited<ReturnType<typeof getUserAchievements>>
>;
