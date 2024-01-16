import type { QuestionItemVariant } from "~/contentstack";

import type { QuestionItem, Variant } from "~/components/Question";

export type RestrictQuestionItemVariant<
  V extends Variant,
  Q extends QuestionItemVariant = QuestionItemVariant,
> = Q extends unknown ? (V extends keyof Q ? Q : undefined) : undefined;

export const getVariant = <V extends Variant>(
  questionItem: QuestionItem,
  variant: V,
) => {
  const questionVariant = questionItem.variants.find(
    (_variant) => variant in _variant,
  );

  return questionVariant as RestrictQuestionItemVariant<V>;
};
