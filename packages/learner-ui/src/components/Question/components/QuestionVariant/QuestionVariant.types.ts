import type { QuestionItemVariant } from "~/contentstack";

import type { Variant } from "../../Question.types";

export type RestrictQuestionItemVariant<
  V extends Variant,
  Q extends QuestionItemVariant = QuestionItemVariant,
> = Q extends unknown ? (V extends keyof Q ? Q : undefined) : undefined;
