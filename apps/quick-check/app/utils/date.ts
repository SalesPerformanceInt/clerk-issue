export const isWeekend = (date: Date) => date.getDay() % 6 === 0;

export const getValidBusinessDate = (date: Date, daysToAdd: number): string => {
  if (daysToAdd <= 0) return date.toISOString();

  date.setDate(date.getDate() + 1);
  const updatedDaysToAdd = isWeekend(date) ? daysToAdd : daysToAdd - 1;

  return getValidBusinessDate(date, updatedDaysToAdd);
};
