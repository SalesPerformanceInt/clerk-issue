import React, { FC } from "react";

import {
  CONFIDENCE_HEIGHT,
  Confetti,
  ConfidenceModal,
  Container,
  Header,
} from "~/components";

import { QuestionVariant } from "./components/QuestionVariant";

import { useQuestion } from "./hooks/useQuestion";

import type { QuestionProps } from "./Question.types";
import { QuestionContext } from "./context/QuestionContext";

export const Question: FC<QuestionProps> = ({
  questionItem,
  variant,
  onClose,
  currentTopic,
  topicPercentage,
  totalScore,
  offset = 0,
}) => {
  const {
    showConfidence,
    selected,
    numberOfConfettiPieces,
    hasSelected,
    isFeedbackActive,
    onConfidenceClick,
    onGoBackClick,
    onSelection,
    onConfettiComplete,
  } = useQuestion();

  const confidenceHeight = CONFIDENCE_HEIGHT + 70 + offset;

  return (
    <QuestionContext.Provider
      value={{
        selected,
        hasSelected,
        isFeedbackActive,
        onGoBackClick,
        onSelection,
      }}
    >
      <div className="flex min-h-screen w-full justify-center bg-indigo-950">
        <Container className={"relative scale-100 overflow-hidden"}>
          <Header currentTopic={currentTopic} onClose={onClose} />
          <div
            className={"flex-1 rounded-t-3xl bg-white p-8"}
            style={{
              paddingBottom: showConfidence ? confidenceHeight : offset,
            }}
          >
            <QuestionVariant
              questionItem={questionItem}
              variant={variant}
              onClose={onClose}
              currentTopic={currentTopic}
              topicPercentage={topicPercentage}
              totalScore={totalScore}
              offset={offset}
            />
            <ConfidenceModal
              show={showConfidence}
              onConfidenceClick={onConfidenceClick}
              offset={offset}
            />
          </div>
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
    </QuestionContext.Provider>
  );
};
