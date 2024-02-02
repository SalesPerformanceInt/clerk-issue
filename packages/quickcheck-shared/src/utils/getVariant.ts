import type { QuestionItem, Variant } from "~qcs/components/Question";
import type { QuestionItemVariant } from "~qcs/contentstack";

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
