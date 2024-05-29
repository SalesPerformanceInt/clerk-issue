import React, { type FC } from "react"
import { useTranslation } from "react-i18next"

import { Progress, ProgressIndicator } from "@radix-ui/react-progress"

import type { QuestionItem } from "~qcs/components/Question"

/**
 * Question Review Bar Props
 */

export type QuestionReviewBarProps = {
  questionItem: QuestionItem
  correctAnswers: number
  incorrectAnswers: number
}

/**
 * Question Review Bar Component
 */

export const QuestionReviewBar: FC<QuestionReviewBarProps> = ({ questionItem, correctAnswers, incorrectAnswers }) => {
  const { t } = useTranslation()

  const correctAnswersPercentage = (correctAnswers / (correctAnswers + incorrectAnswers)) * 100
  const incorrectAnswersPercentage = (incorrectAnswers / (correctAnswers + incorrectAnswers)) * 100

  return (
    <header className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-6">
      <label className="whitespace-pre text-xs font-semibold uppercase text-success">
        <span> {t("enrollment.skill.answered_correctly")} </span>
        <span> {correctAnswers} </span>
        <span>{t("enrollment.skill.times", { count: correctAnswers })}</span>
      </label>

      <Progress
        className="relative h-4 w-full flex-1 basis-auto overflow-hidden rounded-full bg-primary-25 sm:w-auto"
        aria-label={`${questionItem.title} ${t("common.progress_bar.aria_label")}`}
      >
        <ProgressIndicator
          className="absolute h-full w-full bg-success-50"
          style={{
            transform: `translateX(-${100 - correctAnswersPercentage}%)`,
          }}
        />
        <ProgressIndicator
          className="absolute h-full w-full bg-warning-50"
          style={{
            transform: `translateX(${100 - incorrectAnswersPercentage}%)`,
          }}
        />
      </Progress>

      <label className="text-xs font-semibold uppercase text-warning">
        <span> {t("enrollment.skill.answered_incorrectly")} </span>
        <span> {incorrectAnswers} </span>
        <span>{t("enrollment.skill.times", { count: incorrectAnswers })}</span>
      </label>
    </header>
  )
}
