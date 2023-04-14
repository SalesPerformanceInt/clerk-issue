import React from "react";

import {
  Confetti,
  ConfidenceModal,
  Container,
  Header,
} from "accelerate-learner-ui";

import { useQuestionItem } from "./hooks/useQuestionItem";

import type { QuestionItemData, QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem = ({ entryData }: QuestionItemProps) => {
  const questionItem = entryData as QuestionItemData;

  const {
    variants,
    selected,
    showConfidence,
    numberOfConfettiPieces,
    onVariantSelect,
    onGoBackClick,
    onConfidenceClick,
    onConfettiComplete,
  } = useQuestionItem({ questionItem });

  return (
    <div className="flex justify-center w-full pb-4 overflow-hidden scale-100 bg-indigo-950">
      <Container>
        <Header
          currentTopic={`Unknown`}
          $={{
            currentTopic: questionItem.$?.title,
          }}
        />

        {variants.map(({ VariantComponent, variantData, variantId }) => (
          <VariantComponent
            key={variantId}
            selected={selected}
            showConfidence={showConfidence}
            onVariantSelect={onVariantSelect}
            onGoBackClick={onGoBackClick}
            {...variantData}
          />
        ))}

        <ConfidenceModal
          show={showConfidence}
          onConfidenceClick={onConfidenceClick}
        />
      </Container>

      {numberOfConfettiPieces && (
        <Confetti
          recycle={false}
          gravity={0.2}
          numberOfPieces={numberOfConfettiPieces}
          onConfettiComplete={onConfettiComplete}
        />
      )}
    </div>
  );
};
