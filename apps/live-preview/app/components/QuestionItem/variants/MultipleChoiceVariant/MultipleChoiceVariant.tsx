import React from "react";

import { MultipleChoice } from "accelerate-learner-ui";

import type {
  MultipleChoiceVariantProps,
  QuestionItemVariant,
} from "./MultipleChoiceVariant.types";

export const MultipleChoiceVariant = (props: QuestionItemVariant) => {
  const {
    mcquestion,
    selected,
    showConfidence,
    onVariantSelect,
    onGoBackClick,
  } = props as MultipleChoiceVariantProps;

  return (
    <MultipleChoice
      question={mcquestion}
      selected={selected}
      showConfidence={showConfidence}
      onChoiceSelect={({ choice }) => onVariantSelect(choice)}
      onGoBackClick={() => onGoBackClick()}
    />
  );
};
