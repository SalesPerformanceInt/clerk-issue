import type { MultipleChoiceProps } from "../../MultipleChoice.types";

export type MultipleChoiceFeedbackProps = {
  feedback: boolean;
} & Pick<MultipleChoiceProps, "selected">;
