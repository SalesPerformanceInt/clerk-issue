import React, { FC, createContext, createRef, useContext } from "react";

import type { QuestionItem, Selection } from "../Question.types";
import { useQuestion } from "../hooks/useQuestion";
import type {
  QuestionContextProps,
  QuestionContextProviderProps,
} from "./QuestionContext.types";

const defaultProps: QuestionContextProps = {
  selected: null,
  hasSelected: false,
  isFeedbackActive: false,
  onGoBackClick: () => undefined,
  onSelection: (_selection: Selection) => undefined,
  onBreak: false,
  goOnBreak: () => undefined,
  bodyRef: () => undefined,
  bodyHeight: 0,
  currentTopic: "",
  onClose: () => undefined,
  questionItem: {} as QuestionItem,
  variant: "mcquestion",
  totalScore: 0,
  topicPercentage: 0,
  showConfidence: false,
  onConfidenceClick: () => undefined,
  onConfettiComplete: () => undefined,
  numberOfConfettiPieces: null,
  bottomRef: createRef(),
};

export const QuestionContext =
  createContext<QuestionContextProps>(defaultProps);

export const useQuestionContext = () => useContext(QuestionContext);

export const QuestionContextProvider: FC<QuestionContextProviderProps> = ({
  children,
  ...props
}) => {
  const questionProps = useQuestion();

  const currentTopic = props.questionItem.taxonomy[0]?.title ?? "";

  return (
    <QuestionContext.Provider
      value={{
        currentTopic,
        ...props,
        ...questionProps,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
