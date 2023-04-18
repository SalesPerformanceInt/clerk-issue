import React from "react";

import { MultipleChoiceChoices } from "./components/MultipleChoiceChoices";
import { MultipleChoiceConfidence } from "./components/MultipleChoiceConfidence";
import { MultipleChoiceFeedback } from "./components/MultipleChoiceFeedback";
import { MultipleChoiceSection } from "./components/MultipleChoiceSection";

import { useMultipleChoices } from "./hooks/useMultipleChoice";

import type { MultipleChoiceProps } from "./MultipleChoice.types";

export const MultipleChoice = ({
  question,
  selected,
  showConfidence,
  onChoiceSelect,
  onGoBackClick,
  currentTopic,
  totalScore,
  topicPercentage,
}: MultipleChoiceProps) => {
  const { choices, isFeedbackActive } = useMultipleChoices({
    question,
    selected,
    showConfidence,
  });

  return (
    <div className="flex-1 rounded-t-3xl bg-white p-8">
      <div className="mb-5">
        <MultipleChoiceSection
          text={question.prompt}
          feedback={isFeedbackActive}
          className="mb-5 text-sm"
        />

        <div
          className="mb-6 [&>*]:!mb-4 [&>*]:max-w-full [&>p]:text-sm first:[&>p]:text-2xl"
          dangerouslySetInnerHTML={{
            __html: question.stem ?? "",
          }}
        />

        <MultipleChoiceSection
          text={question.instruction}
          feedback={isFeedbackActive}
          className="text-sm"
        />
      </div>

      <div className="space-y-4">
        <MultipleChoiceChoices
          choices={choices}
          feedback={isFeedbackActive}
          selected={selected}
          onChoiceSelect={onChoiceSelect}
        />

        <MultipleChoiceConfidence
          feedback={isFeedbackActive}
          selected={selected}
          onGoBackClick={onGoBackClick}
        />

        <MultipleChoiceFeedback
          feedback={isFeedbackActive}
          selected={selected}
          currentTopic={currentTopic}
          totalScore={totalScore}
          topicPercentage={topicPercentage}
        />
      </div>
    </div>
  );
};
