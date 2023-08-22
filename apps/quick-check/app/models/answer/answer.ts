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
export const parseCurrentDate = (value: unknown) => {
  const currentDate = new Date();

  const parsedDate = z.string().parse(value);
  const [parsedYear, parsedMonth, parsedDay] = parsedDate.split("-");

  if (!parsedYear || !parsedMonth || !parsedDay) return new Date();

  currentDate.setFullYear(+parsedYear, +parsedMonth - 1, +parsedDay);

  return new Date(currentDate);
};

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
