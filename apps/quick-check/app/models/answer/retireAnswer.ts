import type { BaseUserQuestionFragment } from "~/graphql";

import type { ReviewedAnswer } from "./answer";

/**
 * Retire Answer
 */

const shouldRetireUserQuestion = (
  userQuestion: BaseUserQuestionFragment,
  reviewedAnswer: ReviewedAnswer,
) => {
  const { streak } = reviewedAnswer;
  const { attempts } = userQuestion;

  return streak >= 2 || attempts + 1 >= 6;
};

export const getRetiredOn = (
  userQuestion: BaseUserQuestionFragment,
  reviewedAnswer: ReviewedAnswer,
) =>
  shouldRetireUserQuestion(userQuestion, reviewedAnswer)
    ? new Date().toISOString()
    : null;
