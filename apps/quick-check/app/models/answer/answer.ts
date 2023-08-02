import { z } from "zod";

import { variants } from "quickcheck-shared";

import { parseSchema } from "~/utils/parseSchema";

export const answerSchema = z.object({
  id: z.string(),
  questionId: z.string(),
  correct: z.boolean(),
  variant: z.enum(variants),
  uid: z.string(),
});

export type Answer = z.infer<typeof answerSchema>;

export const parseAnswer = (value: unknown) => parseSchema(value, answerSchema);
