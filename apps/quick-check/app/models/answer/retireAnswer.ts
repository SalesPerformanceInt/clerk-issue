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

  return streak >= 2 || (attempts?.aggregate?.count ?? 0) + 1 >= 6;
};

export const getRetiredOn = (
  userQuestion: BaseUserQuestionFragment,
  reviewedAnswer: ReviewedAnswer,
) =>
  shouldRetireUserQuestion(userQuestion, reviewedAnswer)
    ? reviewedAnswer.lastAnsweredOn
    : null;
