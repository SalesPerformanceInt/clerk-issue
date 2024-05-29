import React, { type FC } from "react"

import parse from "html-react-parser"

import type { RestrictQuestionItemVariant } from "~qcs/utils/getVariant"

import type { QuestionItem } from "~qcs/components/Question"
import { Card, type CardProps } from "~qcs/components/ui/Card"

import { QuestionReviewAnswers } from "./QuestionReviewAnswers"
import { QuestionReviewBar } from "./QuestionReviewBar"

/**
 * Question Review Card Props
 */

export type QuestionReviewCardProps = CardProps & {
  questionItem: QuestionItem
  questionVariant: RestrictQuestionItemVariant<"mcquestion">
  correctAnswers: number
  incorrectAnswers: number
}

/**
 * Question Review Card Component
 */

export const QuestionReviewCard: FC<QuestionReviewCardProps> = ({
  questionItem,
  questionVariant,
  correctAnswers,
  incorrectAnswers,
}) => {
  return (
    <Card className="w-full gap-4 p-4">
      <QuestionReviewBar
        questionItem={questionItem}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
      />

      <p className="font-bold text-primary">{parse(questionVariant?.mcquestion.stem ?? "")}</p>

      <QuestionReviewAnswers questionVariant={questionVariant} />
    </Card>
  )
}
