import React from "react";

import { QuestionVariant } from "accelerate-learner-ui";

import type { QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem = ({ questionItem }: QuestionItemProps) => {
  const onClose = () => {
    window.location.reload();
  };

  const currentTopic = "Foo Bar the Topic";
  const totalScore = 1200;
  const topicPercentage = 77;

  return (
    <QuestionVariant
      variant="mcquestion"
      onClose={onClose}
      questionItem={questionItem}
      currentTopic={currentTopic}
      topicPercentage={topicPercentage}
      totalScore={totalScore}
    />
  );
};
