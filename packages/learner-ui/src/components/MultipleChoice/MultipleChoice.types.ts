import type { ChoiceData, ChoiceProps } from "../Choice/Choice.types";

export type MCQuestion = {
  prompt: string;
  stem: string;
  instruction: string;
  choices: Pick<ChoiceProps, "choice">[];
};

export type MultipleChoiceProps = {
  question: MCQuestion;
  selected: ChoiceData | null;
  showConfidence: boolean;
  onChoiceSelect: ({ choice }: Pick<ChoiceProps, "choice">) => void;
  onGoBackClick: () => void;
};
