import React, { FC } from "react";

import {
  QuestionItem,
  Variant,
  useQuestionContext,
} from "~/components/Question";

import type { RestrictQuestionItemVariant } from "./QuestionVariant.types";
import {
  FillBlanks,
  MultipleChoice,
  ReorderList,
  ReorderWords,
  TrueFalseQuestion,
} from "./variants";

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

  if ("tfquestion" in questionVariant)
    return <TrueFalseQuestion tfquestion={questionVariant.tfquestion} />;

  if ("fillblanksquestion" in questionVariant)
    return (
      <FillBlanks fillblanksquestion={questionVariant.fillblanksquestion} />
    );

  if ("reorderlistquestion" in questionVariant)
    return (
      <ReorderList reorderlistquestion={questionVariant.reorderlistquestion} />
    );

  if ("reorderwordsquestion" in questionVariant)
    return (
      <ReorderWords
        reorderwordsquestion={questionVariant.reorderwordsquestion}
      />
    );

  return null;
};
