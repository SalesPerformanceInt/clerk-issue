import type { User_Question_Insert_Input } from "~/graphql";

import type { QuestionItem } from "quickcheck-shared";

import { ENROLLMENT_PERIOD } from "~/utils/enrollmentConstants";

/**
 * Date Utils
 */

const isWeekend = (date: Date) => date.getDay() % 6 === 0;

/**
 * Question Utils
 */

const prepareActiveGap =
  (minQuestionsPerDay: number) => (questionIndex: number) =>
    Math.floor((1 / minQuestionsPerDay) * Math.max(0, questionIndex));

const getActiveDate = (date: Date, daysToAdd: number): string => {
  if (daysToAdd <= 0) return date.toISOString();

  date.setDate(date.getDate() + 1);
  const updatedDaysToAdd = isWeekend(date) ? daysToAdd : daysToAdd - 1;

  return getActiveDate(date, updatedDaysToAdd);
};

/**
 * Prepare Active Questions
 */

export const prepareActiveQuestions =
  (user_id: string) => (questions: QuestionItem[]) => {
    const baseDate = new Date();

    const minQuestionsPerDay = questions.length / ENROLLMENT_PERIOD;
    const getActiveGap = prepareActiveGap(minQuestionsPerDay);

    const activeQuestions = questions.map(
      (question, questionIndex): User_Question_Insert_Input => {
        const activeQuestionGap =
          getActiveGap(questionIndex) - getActiveGap(questionIndex - 1);

        const activeDate = getActiveDate(baseDate, activeQuestionGap);

        return {
          question_id: question.uid,
          taxonomy_id: question.topic?.[0]?.uid,
          user_id,
          active_on: activeDate,
        };
      },
    );

    return activeQuestions;
  };
