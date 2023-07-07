import { useState } from "react";

import invariant from "tiny-invariant";

import type { Selection } from "../../Question.types";
import type { useQuestionProps } from "./useQuestion.types";

export const useQuestion = ({ onSubmit }: useQuestionProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<Selection | null>(null);

  const hasSelected = selected !== null;

  const submitAnswer = () => {
    invariant(selected, "Missing selection");

    setSubmitted(true);

    onSubmit(selected);
  };

  const onSelection = (selection: Selection) => {
    setSelected(selection);
  };

  const onGoBackClick = () => {
    setSelected(null);
  };

  return {
    submitted,
    selected,
    hasSelected,
    submitAnswer,
    onGoBackClick,
    onSelection,
  };
};
