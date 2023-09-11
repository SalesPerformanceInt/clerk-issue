import { useMemo, type FC } from "react";
import { useTranslation } from "react-i18next";

import { DateTime } from "luxon";
import { dropLast, isEmpty, last, map, pipe, take } from "remeda";
import { twMerge } from "tailwind-merge";
import { useDashboardContext } from "~/pages/Dashboard";

import {
  Card,
  CardTitle,
  WeeklyStreakCalendar,
  makeCalendar,
  type CardProps,
  type Week,
} from "quickcheck-shared";

const getStreakCount = (
  calendar: Week[],
  count: number = 0,
  initial: boolean = true,
): number => {
  const remaining = dropLast(calendar, 1);
  const activity = last(calendar)?.activity;

  if (isEmpty(calendar) || !activity) return count;

  if (initial)
    return getStreakCount(remaining, activity ? count + 1 : count, false);

  return getStreakCount(remaining, count + 1, false);
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

  const streakCount = useMemo(() => getStreakCount(calendar), [calendar]);

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
