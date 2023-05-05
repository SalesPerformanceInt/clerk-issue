import React, { FC } from "react";

import invariant from "tiny-invariant";

import type { QuestionVariantProps } from "./QuestionVariant.types";
import { MultipleChoice, TrueFalseQuestion } from "./components";

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

const getTFQuestion = (questionItem: QuestionVariantProps["questionItem"]) => {
  try {
    const variants = questionItem?.variants;
    invariant(variants, "no variants found");
    const tfquestion = variants.find((variant) => "tfquestion" in variant);
    invariant(tfquestion, "no matching variant found");
    invariant("tfquestion" in tfquestion, "no matching variant found");
    return tfquestion.tfquestion;
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
  offset,
}) => {
  const mcquestion = getMCQuestion(questionItem);
  if (variant === "mcquestion" && mcquestion) {
    return (
      <MultipleChoice
        onClose={onClose}
        mcquestion={mcquestion}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
        offset={offset}
      />
    );
  }

  const tfquestion = getTFQuestion(questionItem);
  if (variant === "tfquestion" && tfquestion) {
    return (
      <TrueFalseQuestion
        tfquestion={tfquestion}
        onClose={onClose}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
        offset={offset}
      />
    );
  }

  return null;
};
