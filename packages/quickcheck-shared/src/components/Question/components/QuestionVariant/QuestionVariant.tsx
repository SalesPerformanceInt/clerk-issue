import React, { FC } from "react";

import {
  QuestionItem,
  Variant,
  useQuestionContext,
} from "~/components/Question";

import type { RestrictQuestionItemVariant } from "./QuestionVariant.types";
import { MultipleChoice } from "./variants";

const getVariant = <V extends Variant>(
  questionItem: QuestionItem,
  variant: V,
) => {
  const questionVariant = questionItem.variants.find(
    (_variant) => variant in _variant,
  );

  return questionVariant as RestrictQuestionItemVariant<V>;
};

export const QuestionVariant: FC = () => {
  const { questionItem, variant } = useQuestionContext();

  const questionVariant = getVariant(questionItem, variant);
  if (!questionVariant) return null;

  if ("mcquestion" in questionVariant)
    return <MultipleChoice mcquestion={questionVariant.mcquestion} />;

  return null;
};
