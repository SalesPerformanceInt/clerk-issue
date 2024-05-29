import { DateTime } from "luxon"
import { isEmpty } from "remeda"

import { logError } from "quickcheck-shared"

import { graphql, type GQLProxyUserData, type GraphQLClient } from "~/graphql"

export const GET_USER_ANSWERS_BY_WEEK = graphql(/* GraphQL */ `
  query GetUserAnswersByWeek($userId: uuid!, $start: timestamptz!, $end: timestamptz!) {
    user_answer(
      where: { _and: [{ user_id: { _eq: $userId } }, { created_at: { _gte: $start } }, { created_at: { _lte: $end } }] }
    ) {
      ...BaseUserAnswer
    }
  }
`)

export async function getUserWeeklyStreak(this: GraphQLClient, proxyData: GQLProxyUserData) {
  try {
    const { userId, now } = proxyData

    const getWeeklyStreak = async (start: DateTime, initial = true, count = 0): Promise<number> => {
      const result = await this.query({
        query: GET_USER_ANSWERS_BY_WEEK,
        variables: {
          userId,
          start: start.startOf("week").minus({ day: 1 }).toISODate()!,
          end: start.startOf("week").minus({ day: 1 }).plus({ week: 1 }).toISODate()!,
        },
        fetchPolicy: "no-cache",
      })

      const hasAnswer = !isEmpty(result.data.user_answer)
      const weekBefore = start.minus({ week: 1 })

      if (initial) {
        return getWeeklyStreak(weekBefore, false, hasAnswer ? count + 1 : count)
      }

      if (!hasAnswer) return count

      return getWeeklyStreak(weekBefore, false, count + 1)
    }

    return getWeeklyStreak(DateTime.fromISO(now))
  } catch (error) {
    logError({ error, log: "getUserWeeklyStreak" })
    return null
  }
}

export type UserDashboardWeeklyStreak = NonNullable<Awaited<ReturnType<typeof getUserWeeklyStreak>>>
