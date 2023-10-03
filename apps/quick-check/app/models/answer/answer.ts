import { z } from "zod";

import { variants } from "quickcheck-shared";

import { parseSchema } from "~/utils/parseSchema";

export const ANSWER = "ANSWER";

/**
 * Schemas
 */

export const answerSchema = z.object({
  id: z.string(),
  questionId: z.string(),
  correct: z.boolean(),
  variant: z.enum(variants),
  uid: z.string(),
  now: z.string(),
});

export const parseAnswer = (value: unknown) => parseSchema(value, answerSchema);

/**
 * Types
 */

export type Answer = z.infer<typeof answerSchema>;

export type ReviewedAnswer = {
  latestReviewGap: number;
  difficulty: number;
  streak: number;
  lastAnsweredOn: string | null;
  score: number;
};

export type AnswerToReview = ReviewedAnswer & {
  performanceRating: number;
  answerDate: string;
};
