import { DateTime } from "luxon";

import { logError } from "quickcheck-shared";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

import { makeCalendar } from "~/utils/calendar";

export const GET_USER_WEEKLY_STREAK_CALENDAR = graphql(/* GraphQL */ `
  query GetUserWeeklyStreakCalendar($userId: uuid!, $monthAgo: timestamptz!) {
    user_by_pk(user_id: $userId) {
      tenant_id
      user_answers(where: { created_at: { _gte: $monthAgo } }) {
        ...BaseUserAnswer
      }
    }
  }
`);

export async function getUserWeeklyStreakCalendar(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const result = await this.query({
      query: GET_USER_WEEKLY_STREAK_CALENDAR,
      variables: {
        userId,
        monthAgo: DateTime.fromISO(now)
          .minus({ month: 1 })
          .startOf("day")
          .toISO()!,
      },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const { user_by_pk } = result.data;

    const weeklyStreak = await this.getUserWeeklyStreak(proxyData);

    const answerDates = user_by_pk.user_answers.map(({ created_at }) =>
      DateTime.fromISO(created_at),
    );

    const calendar = makeCalendar(answerDates, now);

    return {
      ...user_by_pk,
      weeklyStreak,
      calendar,
    };
  } catch (error) {
    logError({ error, log: "getUserWeeklyStreakCalendar" });
    return null;
  }
}

export type UserDashboardWeeklyStreakCalendar = NonNullable<
  Awaited<ReturnType<typeof getUserWeeklyStreakCalendar>>
>;
