import { useMemo, type FC } from "react";
import { useTranslation } from "react-i18next";

import { DateTime } from "luxon";
import { dropLast, isEmpty, last, map, pipe, take } from "remeda";
import { twMerge } from "tailwind-merge";
import type { DashboardData } from "~/graphql";
import { useDashboardContext } from "~/pages/Dashboard";

import {
  Card,
  CardTitle,
  WeeklyStreakCalendar,
  type CardProps,
  type Week,
} from "quickcheck-shared";

import { makeCalendar } from "./utils";

const getStreakCount = ({
  weekly_streak,
  weekly_streak_since,
}: DashboardData): number => {
  const sundayBeforeLast = DateTime.now()
    .startOf("week")
    .minus({ day: 1, week: 1 })
    .toISODate()!;

  if (weekly_streak_since && weekly_streak_since < sundayBeforeLast) return 0;

  return weekly_streak;
};

export const WeeklyStreakCard: FC<CardProps> = ({ className, ...props }) => {
  const { t } = useTranslation();

  const { dashboard } = useDashboardContext();

  const answerDates = useMemo(
    () =>
      pipe(
        dashboard.user_answers,
        map(({ created_at }) => DateTime.fromISO(created_at)),
      ),
    [dashboard.user_answers],
  );

  const calendar = useMemo(() => makeCalendar(answerDates), [answerDates]);

  const streakCount = useMemo(() => getStreakCount(dashboard), [dashboard]);

  return (
    <Card className={twMerge("max-w-sm p-6", className)} {...props}>
      <CardTitle
        qty={streakCount}
        title={t("user.dashboard.weekly_streak")}
        className="pb-6"
      />

      <WeeklyStreakCalendar calendar={calendar} />
    </Card>
  );
};
