import React, { useState } from "react";

import { Question, variants, type Variant } from "accelerate-learner-ui";

import type { QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem = ({ questionItem }: QuestionItemProps) => {
  const availableVariants = variants.filter((variant) =>
    questionItem.variants.find((_variant) => variant in _variant),
  );

  const [variant, setVariant] = useState<Variant>(
    availableVariants[0] ?? "mcquestion",
  );

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
          {availableVariants.map((variant) => (
            <option value={variant} key={variant}>
              {variant}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
