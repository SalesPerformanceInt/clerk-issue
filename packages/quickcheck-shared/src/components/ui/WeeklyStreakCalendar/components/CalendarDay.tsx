import React, { forwardRef, type ElementRef } from "react"

import { DateTime } from "luxon"

import { CalendarStatus, type Day } from "~qcs/components"

type CalendarDayProps = {
  day: Day
  now: string
}

const CalendarDay = forwardRef<ElementRef<typeof CalendarStatus>, CalendarDayProps>(
  ({ day: { date, activity }, now, ...props }, ref) => {
    const future = date.startOf("day") > DateTime.fromISO(now).startOf("day")
    const today = date.hasSame(DateTime.fromISO(now), "day")
    const firstOfMonth = date.set({ day: 1 }).hasSame(date, "day")

    return (
      <div className="relative">
        {today && (
          <div className="absolute -bottom-1.5 left-0 right-0 flex justify-center">
            <div className="h-1 w-1 rounded-full bg-primary-75" />
          </div>
        )}
        {firstOfMonth && (
          <div className="absolute -top-3 left-0 right-0 flex justify-center border border-transparent">
            <p className="text-2xs font-semibold uppercase leading-none text-primary-75">{date.toFormat("LLL")}</p>
          </div>
        )}
        <CalendarStatus future={future} activity={activity} />
      </div>
    )
  },
)
CalendarDay.displayName = "CalendarDay"

export { CalendarDay }
