import { useRef, useState } from "react";
import { useMeasure } from "react-use";

import invariant from "tiny-invariant";

import type { Selection } from "../../Question.types";
import type { useQuestionProps } from "./useQuestion.types";

export const useQuestion = ({ onSubmit }: useQuestionProps) => {
  const [showAction, setShowAction] = useState(false);
  const [selected, setSelected] = useState<Selection | null>(null);
  const [numberOfConfettiPieces, setNumberOfConfettiPieces] = useState<
    number | null
  >(null);
  const [onBreak, setOnBreak] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const [bodyRef, { height: bodyHeight }] = useMeasure<HTMLDivElement>();

  const hasSelected = selected !== null;

  const isFeedbackActive = hasSelected && !showAction;

  const onActionClick = () => {
    invariant(selected, "Missing selection");

    setShowAction(false);

    if (selected?.correct) {
      setNumberOfConfettiPieces(1000);
    }

    onSubmit(selected);

    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
      500,
    );
  };

  const onSelection = (selection: Selection) => {
    setSelected(selection);
    setShowAction(true);
  };

  const onGoBackClick = () => {
    setSelected(null);
    setShowAction(false);
  };

  const onConfettiComplete = () => {
    setNumberOfConfettiPieces(null);
  };

  const goOnBreak = () => setOnBreak(true);

  return {
    showAction,
    selected,
    numberOfConfettiPieces,
    hasSelected,
    isFeedbackActive,
    onActionClick,
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
