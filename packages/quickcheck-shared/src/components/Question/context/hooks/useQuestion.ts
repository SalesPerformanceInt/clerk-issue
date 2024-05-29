import { useState } from "react"

import { invariant } from "~qcs/utils/invariant"

import type { Selection } from "../../Question.types"
import type { QuestionContextProps } from "../QuestionContext.types"

export type useQuestionProps = Pick<QuestionContextProps, "onSubmit" | "onContinue">

export const useQuestion = ({ onSubmit, onContinue }: useQuestionProps) => {
  const [submitted, setSubmitted] = useState(false)
  const [continued, setContinued] = useState(false)
  const [selected, setSelected] = useState<Selection | null>(null)

  const [showOnCloseModal, toggleShowOnCancelModal] = useState(false)
  const onCancelClose = () => toggleShowOnCancelModal(false)
  const onShowOnCloseModal = () => toggleShowOnCancelModal(true)

  const hasSelected = selected !== null

  const submitAnswer = () => {
    invariant(selected, "Missing selection")

    setSubmitted(true)

    onSubmit(selected)
  }

  const onContinueClick = () => {
    setContinued(true)

    onContinue()
  }

  const onSelection = (selection: Selection) => {
    setSelected(selection)
  }

  const onGoBackClick = () => {
    setSelected(null)
  }

  return {
    submitted,
    selected,
    hasSelected,
    submitAnswer,
    onGoBackClick,
    onSelection,
    showOnCloseModal,
    onCancelClose,
    onShowOnCloseModal,
    onContinueClick,
    continued,
  }
}
