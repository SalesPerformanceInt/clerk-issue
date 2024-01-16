import React, { type FC } from "react";

import { twMerge } from "tailwind-merge";

import { CalendarMonth, WeeklyActivity, type Week } from "~/components";

type WeeklyStreakCalendarProps = {
  calendar: Week[];
  now: string;
  className?: string;
};

const WeeklyStreakCalendar: FC<WeeklyStreakCalendarProps> = ({
  calendar,
  now,
  className,
}) => (
  <div className={twMerge("flex", className)}>
    <CalendarMonth calendar={calendar} now={now} />
    <WeeklyActivity calendar={calendar} now={now} />
  </div>
);

export { WeeklyStreakCalendar };
