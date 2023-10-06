import React, { FC, useEffect } from "react";

import { Taxon } from "~/contentstack";

import type { UserData } from "~/utils/types";

import {
  Action,
  OnCloseModal,
  QuestionHeader,
  QuestionVariant,
} from "./components";

import type { OnSubmit, QuestionItem, Variant } from "./Question.types";
import { QuestionContextProvider } from "./context/QuestionContext";

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
