import React, { FC } from "react";

import { twMerge } from "tailwind-merge";

import { CalendarDay, type Week } from "~/components";

type CalendarWeekProps = {
  week: Week;
  className?: string;
};

const CalendarWeek: FC<CalendarWeekProps> = ({ week, className }) => (
  <div className={twMerge("flex justify-between", className)}>
    {week.days.map((day) => (
      <CalendarDay key={day.date.toISODate()} day={day} />
    ))}
  </div>
);

export { CalendarWeek };
