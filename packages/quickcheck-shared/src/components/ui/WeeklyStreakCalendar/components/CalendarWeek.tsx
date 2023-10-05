import React, { type FC } from "react";

import { twMerge } from "tailwind-merge";

import { CalendarDay, type Week } from "~/components";

type CalendarWeekProps = {
  week: Week;
  now: string;
  className?: string;
};

const CalendarWeek: FC<CalendarWeekProps> = ({ week, now, className }) => (
  <div className={twMerge("flex justify-between", className)}>
    {week.days.map((day) => (
      <CalendarDay key={day.date.toISODate()} day={day} now={now} />
    ))}
  </div>
);

export { CalendarWeek };
