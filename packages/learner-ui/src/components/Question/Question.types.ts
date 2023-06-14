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

export type OnSubmit = (selection: Selection) => void;

export type QuestionProps = {
  questionItem: QuestionItem;
  variant: Variant;
  onSubmit: OnSubmit;
  onClose: () => void;
  offset?: number;
  onContinue: () => void;
};
