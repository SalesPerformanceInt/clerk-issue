import React, { type FC } from "react";

import { DateTime } from "luxon";
import { identity, map, pipe, times } from "remeda";

import { CalendarWeek, type Week } from "~/components";

const daysOfWeek = pipe(
  7,
  times(identity),
  map((weekday) => DateTime.now().set({ weekday })),
);

const DaysOfWeek = () => (
  <div className="flex justify-between">
    {daysOfWeek.map((day) => (
      <p
        key={day.toFormat("cccc")}
        className="w-5 text-center text-xs font-semibold uppercase leading-4 text-text"
      >
        {day.toFormat("ccccc")}
      </p>
    ))}
  </div>
);

type CalendarMonthProps = {
  calendar: Week[];
  now: string;
};

const CalendarMonth: FC<CalendarMonthProps> = ({ calendar, now }, ref) => (
  <div className="flex-grow">
    <DaysOfWeek />

    {calendar.map((week) => (
      <CalendarWeek
        key={week.days[0]?.date.toISODate()}
        week={week}
        now={now}
        className="mt-4"
      />
    ))}
  </div>
);

export { CalendarMonth };
