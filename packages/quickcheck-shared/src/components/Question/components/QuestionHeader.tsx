import React, { type FC } from "react"

import { isNumber } from "remeda"

import { useIsDesktop } from "~qcs/utils/useIsDesktop"

import { Header, HeaderReturn, HeaderUnansweredQuestions } from "~qcs/components"
import { useQuestionContext } from "~qcs/components/Question"

export const QuestionHeader: FC = () => {
  const { userData, onShowOnCloseModal, submitted, closeLable } = useQuestionContext()
  const isDesktop = useIsDesktop()

  const modifier = submitted ? 1 : 0
  const unansweredQuestions = Math.max((userData?.unanswered_questions ?? 0) - modifier, 0)

  const optimisticUserData = {
    ...userData,
    unanswered_questions: unansweredQuestions,
  }

  return (
    <Header
      left={<HeaderReturn onClose={onShowOnCloseModal} label={closeLable} />}
      right={
        isNumber(unansweredQuestions) && <HeaderUnansweredQuestions userData={optimisticUserData} short={!isDesktop} />
      }
    />
  )
}
