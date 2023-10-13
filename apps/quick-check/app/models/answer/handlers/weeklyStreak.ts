import { DateTime } from "luxon";

import type { GetUserData, User_Set_Input } from "~/graphql";

/**
 * Get Weekly Streak
 */

const getWeeklyStreak = (
  { weekly_streak, weekly_streak_since }: GetUserData,
  lastSunday: string,
) => {
  if (weekly_streak_since && weekly_streak_since >= lastSunday)
    return weekly_streak;

  const sundayBeforeLast = DateTime.fromISO(lastSunday)
    .minus({ week: 1 })
    .toISODate()!;

  if (weekly_streak_since && weekly_streak_since >= sundayBeforeLast)
    return weekly_streak + 1;

  return 1;
};

export const getUpdatedWeeklyStreakData = (
  user: GetUserData,
  now: string,
): Pick<User_Set_Input, "weekly_streak" | "weekly_streak_since"> => {
  const lastSunday = DateTime.fromISO(now)
    .startOf("week")
    .minus({ day: 1 })
    .toISODate()!;

  return {
    weekly_streak: getWeeklyStreak(user, lastSunday),
    weekly_streak_since: lastSunday,
  };
};
