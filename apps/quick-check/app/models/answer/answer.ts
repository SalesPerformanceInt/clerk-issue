import { z } from "zod";

import { variants } from "quickcheck-shared";

import { parseSchema } from "~/utils/parseSchema";

/**
 * Schemas
 */

export const answerSchema = z.object({
  id: z.string(),
  questionId: z.string(),
  correct: z.boolean(),
  variant: z.enum(variants),
  uid: z.string(),
});

export const parseAnswer = (value: unknown) => parseSchema(value, answerSchema);

/**
 * Types
 */

export type Answer = z.infer<typeof answerSchema>;

export type ReviewedAnswer = Answer & {
  daysBetweenReviews: number;
  difficulty: number;
};

export type ToReview = {
  performanceRating: number;
  daysBetweenReviews: number;
  dateLastReviewed: Date | null;
  answerDate: Date;
  difficulty: number;
};
