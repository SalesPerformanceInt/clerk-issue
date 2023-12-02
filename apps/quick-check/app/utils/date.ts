import { DateTime } from "luxon";

export const isWeekend = (date: Date) => date.getDay() % 6 === 0;

export const getNextValidBusinessDate = (
  date: Date,
  daysToAdd: number,
): string => {
  if (daysToAdd <= 0) return DateTime.fromJSDate(date).toISODate()!;

  date.setDate(date.getDate() + 1);
  const updatedDaysToAdd = isWeekend(date) ? daysToAdd : daysToAdd - 1;

  return getNextValidBusinessDate(date, updatedDaysToAdd);
};

export const getToday = (now: string) => DateTime.fromISO(now).toISODate()!;
