import React, { FC } from "react";

import { twMerge } from "tailwind-merge";

import { CalendarMonth, WeeklyActivity, type Week } from "~/components";

type WeeklyStreakCalendarProps = {
  calendar: Week[];
  className?: string;
};

const WeeklyStreakCalendar: FC<WeeklyStreakCalendarProps> = ({
  calendar,
  className,
}) => (
  <div className={twMerge("flex", className)}>
    <CalendarMonth calendar={calendar} />

    <WeeklyActivity calendar={calendar} />
  </div>
);

export { WeeklyStreakCalendar };
