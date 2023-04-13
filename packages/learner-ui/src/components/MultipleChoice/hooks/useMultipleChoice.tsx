import { compact } from "remeda";
import invariant from "tiny-invariant";

import type { MultipleChoiceProps } from "../MultipleChoice.types";

type UseMultipleChoiceProps = Pick<
  MultipleChoiceProps,
  "question" | "selected" | "showConfidence"
>;

export const useMultipleChoices = ({
  question,
  selected,
  showConfidence,
}: UseMultipleChoiceProps) => {
  invariant(question.choices, "No choices found");

  const choices = compact(question.choices);
  const isFeedbackActive = Boolean(selected && !showConfidence);

  return {
    choices,
    isFeedbackActive,
  };
};
