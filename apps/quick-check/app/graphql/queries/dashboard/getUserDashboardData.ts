import { logError } from "quickcheck-shared";

import {
  flattenUserActiveQuestionsData,
  graphql,
  type GQLProxyUserData,
  type GraphQLClient,
} from "~/graphql";

import { getToday } from "~/utils/date";

export const GET_USER_DASHBOARD_DATA = graphql(/* GraphQL */ `
  query GetUserDashboardData($userId: uuid!, $today: date!) {
    user_by_pk(user_id: $userId) {
      ...BaseUser
      ...UserActiveQuestionsData
      completed_enrollments: user_enrollments_aggregate {
        aggregate {
          count(distinct: true)
        }
      }
    }
  }
`);

export async function getUserDashboardData(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const today = getToday(now);

    const result = await this.query({
      query: GET_USER_DASHBOARD_DATA,
      variables: {
        userId,
        today,
      },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const surveyEligibility = await this.getSurveyEligibility(proxyData);

    const dashboard_data = { ...result.data.user_by_pk };

    const activeEnrollments =
      dashboard_data.active_enrollments.aggregate?.count || 0;
    const completedEnrollments =
      dashboard_data.completed_enrollments.aggregate?.count || 0;

    return {
      ...dashboard_data,
      total_enrollments: activeEnrollments + completedEnrollments,
      surveyEligibility,
      ...flattenUserActiveQuestionsData(dashboard_data),
    };
  } catch (error) {
    logError({ error, log: "getUserDashboardData" });
    return null;
  }
}

export type UserDashboardData = NonNullable<
  Awaited<ReturnType<typeof getUserDashboardData>>
>;
