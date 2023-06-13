import { confidences, variants } from "accelerate-learner-ui";
import { z } from "zod";

import { parseSchema } from "~/utils/parseSchema";

export const answerSchema = z.object({
  questionId: z.string(),
  correct: z.boolean(),
  variant: z.enum(variants),
  confidence: z.enum(confidences),
  uid: z.string(),
});

export type Answer = z.infer<typeof answerSchema>;

export const parseAnswer = (value: unknown) => parseSchema(value, answerSchema);
