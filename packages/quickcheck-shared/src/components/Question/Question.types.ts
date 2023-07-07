import type { DataCSLP, QuestionItem } from "~/contentstack";

export { QuestionItem };

export const variants = ["mcquestion"] as const;

export type Variant = (typeof variants)[number];

export type Selection = {
  correct: boolean;
  feedback: string;
  feedbackLiveEdit?: DataCSLP;
  value: string;
};

export type OnSubmit = (selection: Selection) => void;
