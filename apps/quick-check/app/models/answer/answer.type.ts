import { z } from "zod";

import type { BaseUserQuestionFragment, GetUserData } from "~/graphql";

import { answerSchema } from "./handlers/parseAnswer";

/**
 * Answer
 */

export const ANSWER = "ANSWER";

export type Answer = z.infer<typeof answerSchema>;

/**
 * Answer Review
 */

export type ReviewedAnswer = {
  latestReviewGap: number;
  difficulty: number;
  streak: number;
  answerDate: string;
  score: number;
};

export type AnswerToReview = ReviewedAnswer & {
  performanceRating: number;
  lastAnsweredOn: string | null
};

/**
 * Answer Data
 */

export type SaveAnswerData = {
  userQuestion: BaseUserQuestionFragment;
  currentAnswer: Answer;
  reviewedAnswer: ReviewedAnswer;
  userQuestionNextActiveDate: string;
  user: GetUserData;
};
