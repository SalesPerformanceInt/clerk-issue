import { DateTime } from "luxon"

export const isWeekend = (date: Date) => date.getDay() % 6 === 0

export const getNextValidBusinessDate = (date: Date, daysToAdd: number): string => {
  if (daysToAdd <= 0) return DateTime.fromJSDate(date).toISODate()!

  date.setDate(date.getDate() + 1)
  const updatedDaysToAdd = isWeekend(date) ? daysToAdd : daysToAdd - 1

  return getNextValidBusinessDate(date, updatedDaysToAdd)
}

export const getToday = (now: string) => DateTime.fromISO(now).toISODate()!
export const getYesterday = (today: string) => DateTime.fromISO(today).minus({ days: 1 }).toISODate()!

export const formatDate = (date: string | undefined | null) =>
  date ? DateTime.fromISO(date).toFormat("LLL dd yyyy") : ""
