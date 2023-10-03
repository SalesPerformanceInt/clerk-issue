import { useMemo, type FC } from "react";
import { useTranslation } from "react-i18next";

import { useOutletContext } from "@remix-run/react";

import { DateTime } from "luxon";
import { twMerge } from "tailwind-merge";

import {
  Card,
  CardTitle,
  WeeklyStreakCalendar,
  type CardProps,
} from "quickcheck-shared";

import type { DashboardData } from "~/graphql";

import { useDashboardContext } from "~/pages/Dashboard";

import type { TimeTravelContext } from "~/components/TimeTravel";

import { makeCalendar } from "../utils/calendar";

/**
 * Weekly Streak
 */

const getStreakCount = (
  { weekly_streak, weekly_streak_since }: DashboardData,
  now: string,
): number => {
  const sundayBeforeLast = DateTime.fromISO(now)
    .startOf("week")
    .minus({ day: 1, week: 1 })
    .toISODate()!;

  if (weekly_streak_since && weekly_streak_since < sundayBeforeLast) return 0;

  return weekly_streak;
};

export const WeeklyStreakCard: FC<CardProps> = ({ className, ...props }) => {
  const { t } = useTranslation();

  const { now } = useOutletContext<TimeTravelContext>();
  const { dashboard } = useDashboardContext();

  const answerDates = useMemo(
    () =>
      dashboard.user_answers.map(({ created_at }) =>
        DateTime.fromISO(created_at),
      ),
    [dashboard.user_answers],
  );

  const calendar = useMemo(() => makeCalendar(answerDates, now), [answerDates]);

  const streakCount = useMemo(
    () => getStreakCount(dashboard, now),
    [dashboard],
  );

  return (
    <Card className={twMerge("max-w-sm p-6", className)} {...props}>
      <CardTitle
        qty={streakCount}
        title={t("user.dashboard.weekly_streak")}
        className="pb-6"
      />

      <WeeklyStreakCalendar calendar={calendar} now={now} />
    </Card>
  );
};
