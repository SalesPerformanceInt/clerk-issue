import React, { ElementRef, forwardRef } from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { DateTime } from "luxon";

import { CalendarStatus, type Day } from "~/components";

type CalendarDayProps = {
  day: Day;
};

const CalendarDay = forwardRef<
  ElementRef<typeof CalendarStatus>,
  CalendarDayProps
>(({ day: { date, activity }, ...props }, ref) => {
  const future = date.startOf("day") > DateTime.now().startOf("day");
  const today = date.hasSame(DateTime.now(), "day");
  const firstOfMonth = date.set({ day: 1 }).hasSame(date, "day");

  return (
    <div className="relative">
      {today && (
        <div className="flex absolute -bottom-1.5 left-0 right-0 justify-center">
          <div className="h-1 w-1 rounded-full bg-primary-75" />
        </div>
      )}
      {firstOfMonth && (
        <div className="border border-transparent flex absolute -top-2.5 left-0 right-0 justify-center">
          <p className="text-primary-75 text-xxs leading-none font-semibold uppercase">
            {date.toFormat("LLL")}
          </p>
        </div>
      )}
      <CalendarStatus future={future} activity={activity} />
    </div>
  );
});
CalendarDay.displayName = "CalendarDay";

export { CalendarDay };
