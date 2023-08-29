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
export const parseAnswerDate = (value: unknown) => {
  const answerDate = new Date();

  const parsedDate = z.string().parse(value);
  const [parsedYear, parsedMonth, parsedDay] = parsedDate.split("-");

  if (!parsedYear || !parsedMonth || !parsedDay) return new Date();

  answerDate.setFullYear(+parsedYear, +parsedMonth - 1, +parsedDay);

  return new Date(answerDate);
};

/**
 * Types
 */

export type Answer = z.infer<typeof answerSchema>;

export type ReviewData = {
  latestReviewGap: number;
  difficulty: number;
  streak: number;
  lastAnsweredOn: Date | null;
};

export type AnswerToReview = ReviewData & {
  performanceRating: number;
  answerDate: Date;
};

export type ReviewedAnswer = Answer & ReviewData;
