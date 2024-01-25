import { useCallback, useEffect, useMemo } from "react";

import { useQuestionContext } from "~qcs/components/Question";
import { compact, find } from "remeda";

import type { MultipleChoiceProps } from "../MultipleChoice";
import type { OnMCChoiceSelect } from "../MultipleChoice.types";

type UseMultipleChoiceProps = Pick<MultipleChoiceProps, "mcquestion">;

export const useMultipleChoices = ({ mcquestion }: UseMultipleChoiceProps) => {
  const {
    submitted,
    onSelection,
    onGoBackClick,
    selected,
    hasSelected,
    initialChoiceId,
  } = useQuestionContext();

  const choices = useMemo(
    () => compact(mcquestion.choices),
    [mcquestion.choices],
  );

  const onChoiceSelect: OnMCChoiceSelect = useCallback(
    ({ choice }) => {
      onSelection({
        correct: choice.correct,
        feedback: choice.feedback,
        feedbackLiveEdit: choice.$?.feedback,
        value: choice._metadata.uid,
      });
    },
    [onSelection],
  );

  const initialChoice = useMemo(
    () =>
      find(choices, ({ choice }) => choice._metadata.uid === initialChoiceId),
    [initialChoiceId, choices],
  );

  useEffect(() => {
    if (initialChoice) onChoiceSelect(initialChoice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    submitted,
    onChoiceSelect,
    onGoBackClick,
    choices,
    selected,
    hasSelected,
  };
};
