import { useQuestionContext } from "~/components/Question/context/QuestionContext";

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
  } = useQuestionContext();

  const onChoiceSelect: OnTFChoiceSelect = (choice) => {
    const correct = choice === tfquestion.correct;
    onSelection({
      correct,
      feedback: correct ? tfquestion.feedback : tfquestion.incorrect_feedback,
      feedbackLiveEdit: tfquestion.$?.feedback,
    });
  };

  return {
    onChoiceSelect,
    onGoBackClick,
    isFeedbackActive,
    selected,
    hasSelected,
  };
};
