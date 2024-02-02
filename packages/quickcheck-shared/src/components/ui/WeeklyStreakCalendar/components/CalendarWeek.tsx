import React, { type FC } from "react";

import { CalendarDay, type Week } from "~qcs/components";
import { twMerge } from "tailwind-merge";

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
