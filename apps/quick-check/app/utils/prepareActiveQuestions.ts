import type { QuestionItem } from "quickcheck-shared";

import { ENROLLMENT_PERIOD } from "~/utils/enrollmentConstants";

/**
 * Date Utils
 */

const isWeekend = (date: Date) => date.getDay() % 6 === 0;

/**
 * Question Utils
 */

const prepareActiveGap = (minQuestionsPerDay: number) => (question: number) =>
  Math.floor((1 / minQuestionsPerDay) * Math.max(0, question));

const getActiveDate = (date: Date, daysToAdd: number): string => {
  if (daysToAdd <= 0) return date.toISOString();

  date.setDate(date.getDate() + 1);
  const updatedDaysToAdd = isWeekend(date) ? daysToAdd : daysToAdd - 1;

  return getActiveDate(date, updatedDaysToAdd);
};

/**
 * Prepare Active Questions
 */

export const prepareActiveQuestions = (questions: QuestionItem[]) => {
  const baseDate = new Date();

  const minQuestionsPerDay = questions.length / ENROLLMENT_PERIOD;
  const getActiveGap = prepareActiveGap(minQuestionsPerDay);

  const activeQuestionsDate = questions.map((_, question) => {
    const activeQuestionGap =
      getActiveGap(question) - getActiveGap(question - 1);

    return getActiveDate(baseDate, activeQuestionGap);
  });

  return activeQuestionsDate;
};
