import React, { FC } from "react";

import { PageLayout } from "~/components";
import { ConfidenceModal } from "~/components/Question/components";

import {
  Body,
  BottomAnchor,
  BreakBackground,
  Header,
  QuestionConfetti,
} from "./components";

import type { QuestionProps } from "./Question.types";
import { QuestionContextProvider } from "./context/QuestionContext";

export const Question: FC<QuestionProps> = (props) => {
  return (
    <QuestionContextProvider {...props}>
      <PageLayout>
        <Header />
        <BreakBackground />
        <Body />
        <BottomAnchor />
      </PageLayout>
      <ConfidenceModal />
      <QuestionConfetti />
    </QuestionContextProvider>
  );
};
