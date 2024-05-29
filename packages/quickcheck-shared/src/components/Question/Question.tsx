import React, { useEffect, type FC } from "react"

import { Taxon } from "~qcs/contentstack"

import type { UserData } from "~qcs/utils/types"

import { OnCloseModal, QuestionAction, QuestionHeader, QuestionVariant } from "./components"

import { QuestionContextProvider } from "./context/QuestionContext"
import type { OnSubmit, QuestionItem, Variant } from "./Question.types"

export type QuestionProps = {
  questionItem: QuestionItem
  variant: Variant
  onSubmit: OnSubmit
  onClose: () => void
  offset?: number
  onContinue: () => void
  enrollmentTaxonomy?: Taxon | null
  initialChoiceId?: string | null
  userData?: UserData | null
  score?: number
  totalScore?: number
  closeLable?: string
}

export const Question: FC<QuestionProps> = (props) => {
  useEffect(() => {
    document.body.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <QuestionContextProvider {...props}>
      <QuestionHeader />
      <QuestionVariant />
      <QuestionAction />
      <OnCloseModal />
    </QuestionContextProvider>
  )
}
