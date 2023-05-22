import { useRef, useState } from "react";
import { useMeasure } from "react-use";

import type { Selection } from "../Question.types";

export const useQuestion = () => {
  const [showConfidence, setShowConfidence] = useState(false);
  const [selected, setSelected] = useState<Selection | null>(null);
  const [numberOfConfettiPieces, setNumberOfConfettiPieces] = useState<
    number | null
  >(null);
  const [onBreak, setOnBreak] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const [bodyRef, { height: bodyHeight }] = useMeasure<HTMLDivElement>();

  const hasSelected = selected !== null;

  const isFeedbackActive = hasSelected && !showConfidence;

  const onConfidenceClick = (numberOfPieces: number) => {
    setShowConfidence(false);
    if (selected?.correct) setNumberOfConfettiPieces(numberOfPieces);
    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
      500,
    );
  };

  const onSelection = (selection: Selection) => {
    setSelected(selection);
    setShowConfidence(true);
  };

  const onGoBackClick = () => {
    setSelected(null);
    setShowConfidence(false);
  };

  const onConfettiComplete = () => {
    setNumberOfConfettiPieces(null);
  };

  const goOnBreak = () => setOnBreak(true);

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
    bottomRef,
    onBreak,
    goOnBreak,
    bodyRef,
    bodyHeight,
  };
};
