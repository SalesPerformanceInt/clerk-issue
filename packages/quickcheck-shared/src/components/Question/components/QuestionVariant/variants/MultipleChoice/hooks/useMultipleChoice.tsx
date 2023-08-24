import { useEffect, useMemo } from "react";

import { compact, find } from "remeda";

import { useQuestionContext } from "~/components/Question";

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

  const onChoiceSelect: OnMCChoiceSelect = ({ choice }) => {
    onSelection({
      correct: choice.correct,
      feedback: choice.feedback,
      feedbackLiveEdit: choice.$?.feedback,
      value: choice._metadata.uid,
    });
  };

  useEffect(() => {
    if (initialChoiceId) {
      const initialChoice = find(
        choices,
        ({ choice }) => choice._metadata.uid === initialChoiceId,
      );
      if (initialChoice) {
        onChoiceSelect(initialChoice);
      }
    }
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
