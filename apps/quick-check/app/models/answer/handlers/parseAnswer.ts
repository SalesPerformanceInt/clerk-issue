import { z } from "zod";

import { variants } from "quickcheck-shared";

import { parseSchema } from "~/utils/parseSchema";

/**
 * Schemas
 */

export const answerSchema = z.object({
  userQuestionId: z.string(),
  questionId: z.string(),
  correct: z.boolean(),
  variant: z.enum(variants),
  uid: z.string(),
  now: z.string(),
});

export const parseAnswer = (value: unknown) => parseSchema(value, answerSchema);
