import { DateTime, type WeekdayNumbers } from "luxon";
import { find, identity, isTruthy, map, pipe, reverse, times } from "remeda";

import type { Day, Week } from "quickcheck-shared";

const DAYS_PER_WEEK = 7;
const CALENDAR_WEEKS = 4;

/**
 * Day
 */

const getDayActivity = (date: DateTime, answerDates: DateTime[]) =>
  pipe(
    answerDates,
    find((day) => day.hasSame(date, "day")),
    isTruthy,
  );

const makeDay =
  (startDate: DateTime, answerDates: DateTime[]) =>
  (weekday: number): Day => {
    const date = startDate.set({ weekday: weekday as WeekdayNumbers });
    const activity = getDayActivity(date, answerDates);

    return { date, activity };
  };

/**
 * Week
 */

const getWeekActivity = (days: Day[]) =>
  pipe(
    days,
    find(({ activity }) => activity),
    isTruthy,
  );

const makeWeek = (startDate: DateTime, answerDates: DateTime[]): Week => {
  const days = pipe(
    DAYS_PER_WEEK,
    times(identity),
    map(makeDay(startDate, answerDates)),
  );

  const activity = getWeekActivity(days);

  return { days, activity };
};

/**
 * Calendar
 */

export const makeCalendar = (answerDates: DateTime[], now: string) =>
  pipe(
    CALENDAR_WEEKS,
    times(identity),
    reverse(),
    map((n) =>
      makeWeek(DateTime.fromISO(now).minus({ weeks: n - 1 }), answerDates),
    ),
  );
