import React, { FC, createContext, createRef, useContext } from "react";

import { useQuestion } from "./hooks/useQuestion";

import type { QuestionItem, Selection } from "../Question.types";
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
  showAction: false,
  onActionClick: () => undefined,
  onConfettiComplete: () => undefined,
  numberOfConfettiPieces: null,
  bottomRef: createRef(),
  onSubmit: () => undefined,
  onContinue: () => undefined,
};

export const QuestionContext =
  createContext<QuestionContextProps>(defaultProps);

export const useQuestionContext = () => useContext(QuestionContext);

export const QuestionContextProvider: FC<QuestionContextProviderProps> = ({
  children,
  ...props
}) => {
  const questionProps = useQuestion(props);

  const currentTopic = props.questionItem.taxonomy[0]?.title ?? "";

  return (
    <QuestionContext.Provider
      value={{ currentTopic, ...props, ...questionProps }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
