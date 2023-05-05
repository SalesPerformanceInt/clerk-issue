import React, { useState } from "react";

import { Question, variants, type Variant } from "accelerate-learner-ui";

import type { QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem = ({ questionItem }: QuestionItemProps) => {
  const [variant, setVariant] = useState<Variant>("mcquestion");

  const onClose = () => {
    window.location.reload();
  };

  const currentTopic = "Foo Bar the Topic";
  const totalScore = 1200;
  const topicPercentage = 77;

  return (
    <>
      <Question
        variant={variant}
        onClose={onClose}
        questionItem={questionItem}
        currentTopic={currentTopic}
        topicPercentage={topicPercentage}
        totalScore={totalScore}
        offset={50}
      />
      <div className="absolute right-3 top-3">
        <select
          value={variant}
          onChange={(e) => setVariant(e.target.value as Variant)}
        >
          {variants.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
