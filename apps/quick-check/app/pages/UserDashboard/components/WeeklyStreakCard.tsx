import { Suspense, useMemo, type FC } from "react"
import { useTranslation } from "react-i18next"
import { useOutletContext } from "@remix-run/react"

import { DateTime } from "luxon"
import { TypedAwait } from "remix-typedjson"

import {
  CardTitle,
  MobileCarouselCard,
  MobileCarouselCardSkeleton,
  WeeklyStreakCalendar,
  type CardProps,
} from "quickcheck-shared"

import type { UserDashboardWeeklyStreakCalendar } from "~/graphql"

import { makeCalendar } from "~/utils/calendar"

import type { TimeTravelContext } from "~/components/TimeTravel"

/**
 * Weekly Streak Suspense Component
 */

type WeeklyStreakSuspenseProps = {
  weeklyStreakPromise: Promise<UserDashboardWeeklyStreakCalendar | null>
}

export const WeeklyStreakSuspense: FC<WeeklyStreakSuspenseProps> = ({ weeklyStreakPromise }) => {
  return (
    <Suspense fallback={<MobileCarouselCardSkeleton className="h-64 p-6" qty title />}>
      <TypedAwait resolve={weeklyStreakPromise}>
        {(weeklyStreakData) => {
          if (!weeklyStreakData) return null

          return <WeeklyStreakCard weeklyStreakData={weeklyStreakData} />
        }}
      </TypedAwait>
    </Suspense>
  )
}

/**
 * Weekly Streak Card Component
 */

type WeeklyStreakCardProps = CardProps & {
  weeklyStreakData: UserDashboardWeeklyStreakCalendar
}

const WeeklyStreakCard: FC<WeeklyStreakCardProps> = ({ weeklyStreakData, ...props }) => {
  const { t } = useTranslation()
  const { now } = useOutletContext<TimeTravelContext>()

  const answerDates = useMemo(
    () => weeklyStreakData.user_answers.map(({ created_at }) => DateTime.fromISO(created_at)),
    [weeklyStreakData.user_answers],
  )

  const calendar = useMemo(() => makeCalendar(answerDates, now), [answerDates, now])

  return (
    <MobileCarouselCard className="p-6" {...props}>
      <CardTitle
        className="pb-6"
        qty={weeklyStreakData.weeklyStreak ?? 0}
        title={t("user.dashboard.weekly_streak")}
        tooltip={[t("user.dashboard.weekly_streak.tooltip")]}
      />

      <WeeklyStreakCalendar calendar={calendar} now={now} />
    </MobileCarouselCard>
  )
}
