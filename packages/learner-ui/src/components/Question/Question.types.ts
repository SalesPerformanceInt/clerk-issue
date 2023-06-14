import type { DataCSLP, QuestionItem } from "~/contentstack";

export { QuestionItem };

export const variants = [
  "mcquestion",
  "tfquestion",
  "fillblanksquestion",
  "reorderlistquestion",
  "reorderwordsquestion",
] as const;

export type Variant = (typeof variants)[number];

export type Selection = {
  correct: boolean;
  feedback: string;
  feedbackLiveEdit?: DataCSLP;
  value: string;
};

export const confidences = ["low", "medium", "high"] as const;

export type Confidence = (typeof confidences)[number];

export type OnSubmit = (selection: Selection, confidence: Confidence) => void;

export type QuestionProps = {
  questionItem: QuestionItem;
  variant: Variant;
  onSubmit: OnSubmit;
  onClose: () => void;
  offset?: number;
  onContinue: () => void;
};
