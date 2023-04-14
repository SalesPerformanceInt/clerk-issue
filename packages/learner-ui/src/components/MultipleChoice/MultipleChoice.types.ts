import type { ChoiceData, ChoiceProps } from "../Choice/Choice.types";

export type MCQuestion = {
  prompt?: string | null;
  stem?: string | null;
  instruction?: string | null;
  choices?: (Pick<ChoiceProps, "choice"> | null)[] | null;
};

export type OnChoiceSelect = ({ choice }: Pick<ChoiceProps, "choice">) => void;

export type MultipleChoiceProps = {
  question: MCQuestion;
  selected: ChoiceData | null;
  showConfidence: boolean;
  onChoiceSelect: ({ choice }: Pick<ChoiceProps, "choice">) => void;
  onGoBackClick?: () => void;
};
