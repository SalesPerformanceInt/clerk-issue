import React, { type FC } from "react"
import { useTranslation } from "react-i18next"
import { useNavigation } from "@remix-run/react"

import { faArrowRight } from "@fortawesome/pro-light-svg-icons"
import { isNumber } from "remeda"

import { useQuestionContext } from "~qcs/components/Question"
import { Button } from "~qcs/components/ui/Button"

export const QuestionActionButton: FC = () => {
  const { submitAnswer, hasSelected, submitted, continued, onContinueClick, userData } = useQuestionContext()

  const { state } = useNavigation()
  const loading = continued ? state === "loading" : state === "submitting"

  const { t } = useTranslation()

  const unansweredQuestions = userData?.unanswered_questions
  const isLastQuestion = isNumber(unansweredQuestions) && unansweredQuestions <= 1

  if (submitted && isLastQuestion)
    return (
      <Button loading={loading} rightIcon={faArrowRight} onClick={onContinueClick} className="bg-accent text-text">
        {t("question.buttons.finish_up")}
      </Button>
    )

  if (submitted)
    return (
      <Button loading={loading} rightIcon={faArrowRight} onClick={onContinueClick}>
        {t("question.buttons.next_question")}
      </Button>
    )

  return (
    <Button background="light" disabled={!hasSelected} rightIcon={faArrowRight} onClick={submitAnswer}>
      {t("question.buttons.check_answer")}
    </Button>
  )
}
