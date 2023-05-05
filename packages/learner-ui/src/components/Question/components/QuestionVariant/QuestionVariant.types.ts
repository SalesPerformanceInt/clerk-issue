import type { QuestionItem } from "~/contentstack";

import type { Variant } from "../../Question.types";

export type QuestionVariantProps = {
  questionItem: QuestionItem;
  variant: Variant;
  onClose: () => void;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
  offset?: number;
};
