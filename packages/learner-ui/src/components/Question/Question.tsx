import React, { FC } from "react";

import { PageLayout } from "~/components";

import {
  BottomAnchor,
  Header,
  QuestionAction,
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

      <QuestionAction />

      <QuestionConfetti />
    </QuestionContextProvider>
  );
};
