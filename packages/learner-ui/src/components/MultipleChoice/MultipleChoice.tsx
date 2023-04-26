import React from "react";

import { Confetti, ConfidenceModal, Container, Header } from "~/components";

import { MultipleChoiceChoices } from "./components/MultipleChoiceChoices";
import { MultipleChoiceConfidence } from "./components/MultipleChoiceConfidence";
import { MultipleChoiceFeedback } from "./components/MultipleChoiceFeedback";
import { MultipleChoiceSection } from "./components/MultipleChoiceSection";

import { useMultipleChoices } from "./hooks/useMultipleChoice";

import type { MultipleChoiceProps } from "./MultipleChoice.types";

export const MultipleChoice = ({
  mcquestion,
  onClose,
  currentTopic,
  totalScore,
  topicPercentage,
}: MultipleChoiceProps) => {
  const {
    choices,
    isFeedbackActive,
    onConfidenceClick,
    onChoiceSelect,
    onGoBackClick,
    numberOfConfettiPieces,
    onConfettiComplete,
    selected,
    showConfidence,
  } = useMultipleChoices({
    mcquestion,
  });

  return (
    <>
      <div className="flex min-h-screen w-full justify-center bg-indigo-950">
        <Container className="relative scale-100 overflow-hidden">
          <Header currentTopic={currentTopic} onClose={onClose} />
          <div className="flex-1 rounded-t-3xl bg-white p-8 pb-36">
            <div className="mb-5">
              <MultipleChoiceSection
                text={mcquestion.prompt}
                hidden={Boolean(selected)}
                className="mb-5 text-sm"
                $={{ text: mcquestion.$?.prompt }}
              />

              <div
                className="question-stem mb-6 [&>*]:!mb-4 [&>*]:max-w-full [&>p]:text-2xl"
                dangerouslySetInnerHTML={{
                  __html: mcquestion.stem ?? "",
                }}
                {...mcquestion.$?.stem}
              />

              <MultipleChoiceSection
                text={mcquestion.instruction}
                hidden={Boolean(selected)}
                className="text-sm"
                $={{ text: mcquestion.$?.instruction }}
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
          <ConfidenceModal
            show={showConfidence}
            onConfidenceClick={onConfidenceClick}
          />
        </Container>
      </div>
      {numberOfConfettiPieces && (
        <Confetti
          recycle={false}
          gravity={0.2}
          numberOfPieces={numberOfConfettiPieces}
          onConfettiComplete={onConfettiComplete}
        />
      )}
    </>
  );
};
