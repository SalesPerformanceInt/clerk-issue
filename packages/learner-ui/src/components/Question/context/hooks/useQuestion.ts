import { useRef, useState } from "react";
import { useMeasure } from "react-use";

import invariant from "tiny-invariant";

import type { Confidence, Selection } from "../../Question.types";
import { confidenceMap } from "../utils/condienceMap";
import type { useQuestionProps } from "./useQuestion.types";

export const useQuestion = ({ onSubmit }: useQuestionProps) => {
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

  const onConfidenceClick = (confidence: Confidence) => {
    invariant(selected, "Missing selection");

    setShowConfidence(false);

    if (selected?.correct) {
      const numberOfConfettiPieces = confidenceMap.get(confidence);
      setNumberOfConfettiPieces(numberOfConfettiPieces);
    }

    onSubmit(selected, confidence);

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
