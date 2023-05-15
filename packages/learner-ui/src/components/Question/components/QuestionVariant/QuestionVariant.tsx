import React, { FC } from "react";

import { Variant } from "~/components/Question";

import type {
  QuestionVariantProps,
  RestrictQuestionItemVariant,
} from "./QuestionVariant.types";
import {
  FillBlanks,
  MultipleChoice,
  ReorderList,
  TrueFalseQuestion,
} from "./variants";

const getVariant = <V extends Variant>(
  questionItem: QuestionVariantProps["questionItem"],
  variant: V,
) => {
  const questionVariant = questionItem.variants.find(
    (_variant) => variant in _variant,
  );

  return questionVariant as RestrictQuestionItemVariant<V>;
};

export const QuestionVariant: FC<QuestionVariantProps> = ({
  questionItem,
  variant,
  currentTopic,
  topicPercentage,
  totalScore,
  offset,
}) => {
  const questionVariant = getVariant(questionItem, variant);
  if (!questionVariant) return null;

  if ("mcquestion" in questionVariant) {
    return (
      <MultipleChoice
        mcquestion={questionVariant.mcquestion}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
      />
    );
  }

  if ("tfquestion" in questionVariant) {
    return (
      <TrueFalseQuestion
        tfquestion={questionVariant.tfquestion}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
        offset={offset}
      />
    );
  }

  if ("fillblanksquestion" in questionVariant) {
    return (
      <FillBlanks
        fillblanksquestion={questionVariant.fillblanksquestion}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
      />
    );
  }

  if ("reorderlistquestion" in questionVariant) {
    return (
      <ReorderList
        reorderlistquestion={questionVariant.reorderlistquestion}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
      />
    );
  }

  return null;
};
