import React, { type FC } from "react"
import { useTranslation } from "react-i18next"

import { faArrowRight } from "@fortawesome/pro-light-svg-icons"

import { UserData } from "~qcs/utils/types"
import { useIsDesktop } from "~qcs/utils/useIsDesktop"

import { Button, Support } from "~qcs/components"

interface HeaderUnansweredQuestionsProps {
  userData?: UserData
  onStart?: () => void
  loading?: boolean
  short?: boolean
}

export const HeaderUnansweredQuestions: FC<HeaderUnansweredQuestionsProps> = ({
  userData,
  onStart,
  loading,
  short,
}) => {
  const isDesktop = useIsDesktop()
  const { t } = useTranslation()

  const allEnrollmentsComplete = userData?.active_enrollments === 0

  return (
    <div className="flex items-center gap-4 sm:gap-8">
      <div className="flex items-center gap-4">
        <p className="whitespace-pre text-xs uppercase text-background">
          {t(allEnrollmentsComplete ? "common.all_enrollments_complete" : "common.unanswered", {
            count: userData?.unanswered_questions,
            context: short ? "short" : undefined,
          })}
        </p>

        {isDesktop && !!userData?.unanswered_questions && onStart && (
          <Button onClick={onStart} rightIcon={faArrowRight} loading={loading}>
            {t("common.start")}
          </Button>
        )}

        <Support />
      </div>
    </div>
  )
}
