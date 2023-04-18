import type { MultipleChoiceProps } from "../../MultipleChoice.types";

export type MultipleChoiceFeedbackProps = {
  feedback: boolean;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
} & Pick<MultipleChoiceProps, "selected">;
