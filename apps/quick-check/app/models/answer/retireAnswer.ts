import type { BaseUserQuestionFragment } from "~/graphql";

import type { ReviewedAnswer } from "./answer";

/**
 * Retire Answer
 */

export const shouldRetireUserQuestion = (
  userQuestion: BaseUserQuestionFragment,
  reviewedAnswer: ReviewedAnswer,
) => {
  const { streak } = reviewedAnswer;
  const { attempts } = userQuestion;

  return streak >= 2 || attempts + 1 >= 6 ? "retire" : "attempted";
};
