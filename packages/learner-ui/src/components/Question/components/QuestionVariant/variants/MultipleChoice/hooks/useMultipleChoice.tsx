import { compact } from "remeda";

import { useQuestionContext } from "~/components/Question";

import type {
  MultipleChoiceProps,
  OnMCChoiceSelect,
} from "../MultipleChoice.types";

type UseMultipleChoiceProps = Pick<MultipleChoiceProps, "mcquestion">;

export const useMultipleChoices = ({ mcquestion }: UseMultipleChoiceProps) => {
  const {
    isFeedbackActive,
    onSelection,
    onGoBackClick,
    selected,
    hasSelected,
  } = useQuestionContext();

  const choices = compact(mcquestion.choices);

  const onChoiceSelect: OnMCChoiceSelect = ({ choice }) => {
    onSelection({
      correct: choice.correct,
      feedback: choice.feedback,
      feedbackLiveEdit: choice.$?.feedback,
      uid: choice._metadata.uid,
    });
  };

  return {
    onChoiceSelect,
    onGoBackClick,
    choices,
    isFeedbackActive,
    selected,
    hasSelected,
  };
};
