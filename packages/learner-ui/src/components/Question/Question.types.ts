import type { DataCSLP, QuestionItem } from "~/contentstack";

export const variants = [
  "mcquestion",
  "tfquestion",
  "fillblanksquestion",
  "reorderlistquestion",
] as const;

export type Variant = (typeof variants)[number];

export type Selection = {
  correct: boolean;
  feedback: string;
  feedbackLiveEdit?: DataCSLP;
  uid?: string;
};

export type QuestionProps = {
  questionItem: QuestionItem;
  variant: Variant;
  onClose: () => void;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
  offset?: number;
};
