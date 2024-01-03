import { contentStack } from "~/contentstack.server";
import { DateTime } from "luxon";

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql";

import { makeCalendar } from "~/utils/calendar";

export const GET_WEEKLY_STREAK_CALENDAR = graphql(/* GraphQL */ `
  query GetWeeklyStreakCalendar($userId: uuid!, $monthAgo: timestamptz!) {
    user_by_pk(user_id: $userId) {
      ...BaseUser
      user_answers(where: { created_at: { _gte: $monthAgo } }) {
        ...BaseUserAnswer
      }
    }
  }
`);

export async function getWeeklyStreakCalendar(
  this: GraphQLClient,
  proxyData: GQLProxyUserData,
) {
  try {
    const { userId, now } = proxyData;

    const result = await this.client.query({
      query: GET_WEEKLY_STREAK_CALENDAR,
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
    console.log("ERROR", error);
    return null;
  }
}

export type WeeklyStreakCalendarData = NonNullable<
  Awaited<ReturnType<typeof getWeeklyStreakCalendar>>
>;
