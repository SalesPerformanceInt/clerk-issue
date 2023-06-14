import { useQuestionContext } from "~/components/Question";

import type {
  OnTFChoiceSelect,
  TrueFalseQuestionProps,
} from "../TrueFalseQuestion.types";

type UseTrueFalseQuestionProps = Pick<TrueFalseQuestionProps, "tfquestion">;

export const useTrueFalseQuestion = ({
  tfquestion,
}: UseTrueFalseQuestionProps) => {
  const {
    isFeedbackActive,
    onSelection,
    onGoBackClick,
    selected,
    hasSelected,
    offset = 0,
  } = useQuestionContext();

  const onChoiceSelect: OnTFChoiceSelect = (choice) => {
    const correct = choice === tfquestion.correct;
    onSelection({
      correct,
      feedback: correct ? tfquestion.feedback : tfquestion.incorrect_feedback,
      feedbackLiveEdit: tfquestion.$?.feedback,
      value: JSON.stringify(choice),
    });
  };

  return {
    onChoiceSelect,
    onGoBackClick,
    isFeedbackActive,
    selected,
    hasSelected,
    offset,
  };
};
