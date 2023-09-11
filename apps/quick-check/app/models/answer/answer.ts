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
});

export const parseAnswer = (value: unknown) => parseSchema(value, answerSchema);
export const parseAnswerDate = (value?: unknown) => {
  if (!value) return new Date().toISOString();

  const answerDate = new Date();

  const parsedDate = z.string().parse(value);
  const [parsedYear, parsedMonth, parsedDay] = parsedDate.split("-");

  if (!parsedYear || !parsedMonth || !parsedDay)
    return new Date().toISOString();

  answerDate.setFullYear(+parsedYear, +parsedMonth - 1, +parsedDay);

  return new Date(answerDate).toISOString();
};

/**
 * Types
 */

export type Answer = z.infer<typeof answerSchema>;

export type ReviewedAnswer = {
  latestReviewGap: number;
  difficulty: number;
  streak: number;
  lastAnsweredOn: string | null;
};

export type AnswerToReview = ReviewedAnswer & {
  performanceRating: number;
  answerDate: string;
};
