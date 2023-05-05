import { useState } from "react";

import type { Selection } from "../Question.types";

export const useQuestion = () => {
  const [showConfidence, setShowConfidence] = useState(false);
  const [selected, setSelected] = useState<Selection | null>(null);
  const [numberOfConfettiPieces, setNumberOfConfettiPieces] = useState<
    number | null
  >(null);

  const hasSelected = selected !== null;

  const isFeedbackActive = hasSelected && !showConfidence;

  const onConfidenceClick = (numberOfPieces: number) => {
    setShowConfidence(false);
    if (selected?.correct) setNumberOfConfettiPieces(numberOfPieces);
  };

  const onSelection = (selection: Selection) => {
    setSelected(hasSelected ? null : selection);
    setShowConfidence(!showConfidence);
  };

  const onGoBackClick = () => {
    setSelected(null);
    setShowConfidence(false);
  };

  const onConfettiComplete = () => setNumberOfConfettiPieces(null);

  return {
    showConfidence,
    selected,
    numberOfConfettiPieces,
    hasSelected,
    isFeedbackActive,
    onConfidenceClick,
    onGoBackClick,
    onSelection,
    onConfettiComplete,
  };
};
