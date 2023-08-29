import type { User_Question } from "~/graphql";

import type { ReviewedAnswer } from "./answer";

/**
 * Retire Answer
 */

export const shouldRetireUserQuestion = (
  userQuestion: User_Question,
  reviewedAnswer: ReviewedAnswer,
) => {
  const { streak } = reviewedAnswer;
  const { attempts } = userQuestion;

  return streak >= 2 || attempts + 1 >= 6 ? "retire" : "attempted";
};
