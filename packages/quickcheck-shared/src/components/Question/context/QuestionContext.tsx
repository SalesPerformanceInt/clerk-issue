import React, { createContext, useContext, type FC } from "react";

import { useQuestion } from "./hooks/useQuestion";

import type { QuestionItem, Selection } from "../Question.types";
import type {
  QuestionContextProps,
  QuestionContextProviderProps,
} from "./QuestionContext.types";

const defaultProps: QuestionContextProps = {
  selected: null,
  hasSelected: false,
  onGoBackClick: () => undefined,
  onSelection: (_selection: Selection) => undefined,
  currentTopic: "",
  onClose: () => undefined,
  questionItem: {} as QuestionItem,
  variant: "mcquestion",
  submitted: false,
  submitAnswer: () => undefined,
  onSubmit: () => undefined,
  onContinue: () => undefined,
  offset: 0,
};

export const QuestionContext =
  createContext<QuestionContextProps>(defaultProps);

export const useQuestionContext = () => useContext(QuestionContext);

export const QuestionContextProvider: FC<QuestionContextProviderProps> = ({
  children,
  offset = 0,
  ...props
}) => {
  const questionProps = useQuestion(props);

  const currentTopic = props.questionItem.taxonomy[0]?.title ?? "";

  return (
    <QuestionContext.Provider
      value={{ currentTopic, ...props, ...questionProps, offset }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
