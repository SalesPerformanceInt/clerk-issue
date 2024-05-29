import React, { forwardRef, type FC } from "react"
import { useTranslation } from "react-i18next"
import { useMeasure } from "react-use"

import { faArrowRight } from "@fortawesome/pro-light-svg-icons"

import { UserData } from "~qcs/utils/types"
import { useIsDesktop } from "~qcs/utils/useIsDesktop"

import { Button, ResponsiveContainer } from "~qcs/components"

interface MobileMenuProps {
  userData?: UserData
  onStart: () => void
}

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(({ userData, onStart }, ref) => {
  const isDesktop = useIsDesktop()
  const [measureRef, { height }] = useMeasure<HTMLDivElement>()
  const { t } = useTranslation()

  const allEnrollmentsComplete = userData?.active_enrollments === 0

  if (isDesktop) return null

  return (
    <>
      <div ref={ref} style={{ height }} />
      <ResponsiveContainer
        ref={measureRef}
        className="fixed inset-x-0 bottom-0 box-border border-t border-secondary bg-background"
      >
        <div className="flex flex-col items-center gap-1 px-4 pb-4 pt-2">
          <p className="text-xs uppercase text-primary-75">
            {t(allEnrollmentsComplete ? "common.all_enrollments_complete" : "common.unanswered", {
              count: userData?.unanswered_questions,
            })}
          </p>
          {!!userData?.unanswered_questions && (
            <Button background="light" onClick={onStart} rightIcon={faArrowRight}>
              {t("common.start")}
            </Button>
          )}
        </div>
      </ResponsiveContainer>
    </>
  )
})
