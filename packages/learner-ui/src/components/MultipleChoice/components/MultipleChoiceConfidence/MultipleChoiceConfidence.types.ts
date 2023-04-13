import type { MultipleChoiceProps } from "../../MultipleChoice.types";

export type MultipleChoiceConfidenceProps = {
  feedback: boolean;
  onGoBackClick?: () => void;
} & Pick<MultipleChoiceProps, "selected">;
