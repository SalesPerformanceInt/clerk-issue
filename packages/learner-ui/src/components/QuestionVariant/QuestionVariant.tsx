import React, { FC } from "react";

import invariant from "tiny-invariant";
import { MultipleChoice } from "~/components";

import type { QuestionVariantProps } from "./QuestionVariant.types";

const getMCQuestion = (questionItem: QuestionVariantProps["questionItem"]) => {
  try {
    const variants = questionItem?.variants;
    invariant(variants, "no variants found");

    const mcquestion = variants.find((variant) => "mcquestion" in variant);

    invariant(mcquestion, "no multiple choice found");

    invariant("mcquestion" in mcquestion, "no multiple choice found");

    return mcquestion.mcquestion;
  } catch {
    return null;
  }
};

export const QuestionVariant: FC<QuestionVariantProps> = ({
  questionItem,
  variant,
  onClose,
  currentTopic,
  topicPercentage,
  totalScore,
}) => {
  const mcquestion = getMCQuestion(questionItem);
  if (variant === "mcquestion" && mcquestion)
    return (
      <MultipleChoice
        onClose={onClose}
        mcquestion={mcquestion}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
      />
    );

  return null;
};
