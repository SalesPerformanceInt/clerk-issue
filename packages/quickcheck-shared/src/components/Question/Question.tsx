import React, { FC, useEffect } from "react";

import { Action, Header, QuestionVariant } from "./components";

import type { OnSubmit, QuestionItem, Variant } from "./Question.types";
import { QuestionContextProvider } from "./context/QuestionContext";

export type QuestionProps = {
  questionItem: QuestionItem;
  variant: Variant;
  onSubmit: OnSubmit;
  onClose: () => void;
  offset?: number;
  onContinue: () => void;
};

export const Question: FC<QuestionProps> = (props) => {
  useEffect(() => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <QuestionContextProvider {...props}>
      <Header />
      <QuestionVariant />
      <Action />
    </QuestionContextProvider>
  );
};
