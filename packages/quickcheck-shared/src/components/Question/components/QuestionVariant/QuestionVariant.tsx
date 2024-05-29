import React, { type FC } from "react"

import { getVariant } from "~qcs/utils/getVariant"

import { useQuestionContext } from "~qcs/components/Question"

import { MultipleChoice } from "./variants"

export const QuestionVariant: FC = () => {
  const { questionItem, variant } = useQuestionContext()

  const questionVariant = getVariant(questionItem, variant)
  if (!questionVariant) return null

  if ("mcquestion" in questionVariant) return <MultipleChoice mcquestion={questionVariant.mcquestion} />

  return null
}
