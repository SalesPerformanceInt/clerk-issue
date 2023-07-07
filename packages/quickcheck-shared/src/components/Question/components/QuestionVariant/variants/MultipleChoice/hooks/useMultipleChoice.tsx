import { compact } from "remeda";

import { useQuestionContext } from "~/components/Question";

import type { MultipleChoiceProps } from "../MultipleChoice";
import type { OnMCChoiceSelect } from "../MultipleChoice.types";

type UseMultipleChoiceProps = Pick<MultipleChoiceProps, "mcquestion">;

export const useMultipleChoices = ({ mcquestion }: UseMultipleChoiceProps) => {
  const { submitted, onSelection, onGoBackClick, selected, hasSelected } =
    useQuestionContext();

  const choices = compact(mcquestion.choices);

  const onChoiceSelect: OnMCChoiceSelect = ({ choice }) => {
    onSelection({
      correct: choice.correct,
      feedback: choice.feedback,
      feedbackLiveEdit: choice.$?.feedback,
      value: choice._metadata.uid,
    });
  };

  return {
    submitted,
    onChoiceSelect,
    onGoBackClick,
    choices,
    selected,
    hasSelected,
  };
};
