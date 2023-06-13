import { variants } from "accelerate-learner-ui";
import { isString } from "remeda";
import { z } from "zod";

export const answerSchema = z.object({
  questionId: z.string(),
  correct: z.boolean(),
  variant: z.enum(variants),
  uid: z.string(),
});

export type Answer = z.infer<typeof answerSchema>;

export const parseAnswer = (value: unknown) => {
  try {
    if (isString(value)) {
      return answerSchema.parse(JSON.parse(value));
    } else {
      return answerSchema.parse(value);
    }
  } catch {}
  return null;
};
