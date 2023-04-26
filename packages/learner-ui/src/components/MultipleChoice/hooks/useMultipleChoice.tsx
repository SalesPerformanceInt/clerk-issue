import { useState } from "react";

import { compact } from "remeda";
import invariant from "tiny-invariant";

import type { OnChoiceSelect } from "~/components/MultipleChoice";

import type { MCSelected } from "../";
import type { MultipleChoiceProps } from "../MultipleChoice.types";

type UseMultipleChoiceProps = Pick<MultipleChoiceProps, "mcquestion">;

export const useMultipleChoices = ({ mcquestion }: UseMultipleChoiceProps) => {
  invariant(mcquestion.choices, "No choices found");

  const [selected, setSelected] = useState<MCSelected>(null);
  const [showConfidence, setShowConfidence] = useState(false);
  const [numberOfConfettiPieces, setNumberOfConfettiPieces] = useState<
    number | null
  >(null);

  const choices = compact(mcquestion.choices);
  const isFeedbackActive = Boolean(selected && !showConfidence);

  const onConfidenceClick = (numberOfPieces: number) => {
    setShowConfidence(false);
    if (selected?.correct) setNumberOfConfettiPieces(numberOfPieces);
  };

  const onChoiceSelect: OnChoiceSelect = ({ choice }) => {
    if (choice) {
      setSelected(selected ? null : choice);
      setShowConfidence(!showConfidence);
    }
  };

  const onGoBackClick = () => {
    setSelected(null);
    setShowConfidence(false);
  };

  const onConfettiComplete = () => setNumberOfConfettiPieces(null);

  return {
    onConfidenceClick,
    onChoiceSelect,
    onGoBackClick,
    choices,
    isFeedbackActive,
    numberOfConfettiPieces,
    onConfettiComplete,
    showConfidence,
    selected,
  };
};
