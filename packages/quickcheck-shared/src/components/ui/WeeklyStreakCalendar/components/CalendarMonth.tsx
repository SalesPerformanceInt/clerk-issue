import React, { FC } from "react";

import { DateTime } from "luxon";
import { find, identity, isTruthy, map, pipe, reverse, times } from "remeda";

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
        className="w-5 text-center font-semibold text-xs leading-4 uppercase text-text"
      >
        {day.toFormat("ccccc")}
      </p>
    ))}
  </div>
);

type CalendarMonthProps = {
  calendar: Week[];
};

const CalendarMonth: FC<CalendarMonthProps> = ({ calendar }, ref) => (
  <div className="flex-grow">
    <DaysOfWeek />
    {calendar.map((week) => (
      <CalendarWeek
        key={week.days[0]?.date.toISODate()}
        week={week}
        className="mt-4"
      />
    ))}
  </div>
);

export { CalendarMonth };
