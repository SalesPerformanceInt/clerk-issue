import React, { type FC } from "react";

import { CalendarMonth, WeeklyActivity, type Week } from "~qcs/components";
import { twMerge } from "tailwind-merge";

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
