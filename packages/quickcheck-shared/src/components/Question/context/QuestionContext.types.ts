import { ReactNode } from "react";

import type { QuestionProps } from "../Question";
import type { Selection } from "../Question.types";

export interface QuestionContextProps extends QuestionProps {
  selected: Selection | null;
  hasSelected: boolean;
  onGoBackClick: () => void;
  onSelection: (selection: Selection) => void;
  currentTopic: string;
  submitted: boolean;
  submitAnswer: () => void;
}

export interface QuestionContextProviderProps extends QuestionProps {
  children: ReactNode;
}
