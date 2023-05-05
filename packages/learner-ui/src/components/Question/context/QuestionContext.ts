import { createContext, useContext } from "react";

import type { Selection } from "../Question.types";

type QuestionContextProps = {
  selected: Selection | null;
  hasSelected: boolean;
  isFeedbackActive: boolean;
  onGoBackClick: () => void;
  onSelection: (selection: Selection) => void;
};

const defaultProps = {
  selected: null,
  hasSelected: false,
  isFeedbackActive: false,
  onGoBackClick: () => undefined,
  onSelection: (_selection: Selection) => undefined,
};

export const QuestionContext =
  createContext<QuestionContextProps>(defaultProps);

export const useQuestionContext = () => useContext(QuestionContext);
