import React, { type FC } from "react"
import { useTranslation } from "react-i18next"
import { useNavigation } from "@remix-run/react"

import { twMerge } from "tailwind-merge"

import { Button } from "~qcs/components"

import { useQuestionContext } from "../context"

export const OnCloseModal: FC = () => {
  const { showOnCloseModal, onClose, onCancelClose } = useQuestionContext()
  const { t } = useTranslation()

  const { state } = useNavigation()
  const loading = state !== "idle"

  if (!showOnCloseModal) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 w-full">
      <div className="fixed bottom-0 left-0 right-0 top-0 w-full bg-black opacity-50" onClick={onCancelClose} />
      <div
        className={twMerge(
          "fixed bottom-0 left-0 right-0 mx-auto flex w-full flex-col gap-4 bg-background p-6 shadow-card",
          "sm:bottom-1/2 sm:box-content sm:max-w-sm sm:translate-y-1/2",
        )}
      >
        <h1 className="text-xl font-semibold leading-8">{t("question.close.header")}</h1>
        <p className="text-base font-normal leading-6">{t("question.close.body")}</p>
        <div className="flex gap-4">
          <Button background="light" variant="secondary" className="flex-1" onClick={onCancelClose}>
            {t("buttons.nevermind")}
          </Button>

          <Button
            background="light"
            className="flex-1"
            onClick={onClose}
            data-testid="OnClose-Confirm"
            loading={loading}
          >
            {t("buttons.im_sure")}
          </Button>
        </div>
      </div>
    </div>
  )
}
