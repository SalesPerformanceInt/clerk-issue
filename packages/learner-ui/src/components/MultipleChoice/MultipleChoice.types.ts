import type { ChoiceItem } from "../Choice/Choice.types";

export type MCQuestion = {
  prompt: string;
  stem: string;
  instruction: string;
  choices: ChoiceItem[];
};

export type MultipleChoiceProps = {
  question: MCQuestion;
  selected: ChoiceItem["choice"] | null;
  showConfidence: boolean;
  onChoiceSelect: ({ choice }: ChoiceItem) => void;
  onGoBackClick: () => void;
};
