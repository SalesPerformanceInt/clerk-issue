import type { QuestionItem } from "~/contentstack";

export type Variant = "mcquestion" | "tfquestion";

export type QuestionVariantProps = {
  questionItem: QuestionItem;
  variant: Variant;
  onClose: () => void;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
};
