import React, { FC } from "react";

import { PageLayout } from "~/components";
import { ConfidenceModal } from "~/components/Question/components";

import {
  BottomAnchor,
  Header,
  QuestionBody,
  QuestionConfetti,
} from "./components";

import type { QuestionProps } from "./Question.types";
import { QuestionContextProvider } from "./context/QuestionContext";

export const Question: FC<QuestionProps> = (props) => {
  return (
    <QuestionContextProvider {...props}>
      <PageLayout>
        <Header />
        <QuestionBody />
        <BottomAnchor />
      </PageLayout>
      <ConfidenceModal />
      <QuestionConfetti />
    </QuestionContextProvider>
  );
};
