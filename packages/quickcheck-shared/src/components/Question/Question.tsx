import React, { useEffect, type FC } from "react";

import { Taxon } from "~/contentstack";

import type { UserData } from "~/utils/types";

import {
  Action,
  OnCloseModal,
  QuestionHeader,
  QuestionVariant,
} from "./components";

import { QuestionContextProvider } from "./context/QuestionContext";
import type { OnSubmit, QuestionItem, Variant } from "./Question.types";

export type QuestionProps = {
  questionItem: QuestionItem;
  variant: Variant;
  onSubmit: OnSubmit;
  onClose: () => void;
  offset?: number;
  onContinue: () => void;
  enrollmentTaxonomy?: Taxon | null;
  initialChoiceId?: string | null;
  userData?: UserData | null;
  score?: number;
  totalScore?: number;
};

export const Question: FC<QuestionProps> = (props) => {
  useEffect(() => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <QuestionContextProvider {...props}>
      <QuestionHeader />
      <QuestionVariant />
      <Action />
      <OnCloseModal />
    </QuestionContextProvider>
  );
};
