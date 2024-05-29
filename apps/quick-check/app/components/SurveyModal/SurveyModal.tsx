import { Suspense, useEffect, useState, type FC } from "react"
import { useTranslation } from "react-i18next"
import { usePrevious } from "react-use"
import { useFetcher } from "@remix-run/react"

import { faFaceDiagonalMouth, faFaceSmileBeam, faFaceWorried } from "@fortawesome/pro-light-svg-icons"
import { withZod } from "@remix-validated-form/with-zod"
import { grow } from "~qcs/config/animations"
import { useIsDesktop } from "~qcs/index"
import { AnimatePresence, motion } from "framer-motion"
import { TypedAwait } from "remix-typedjson"
import { FormProps, ValidatedForm } from "remix-validated-form"
import { twMerge } from "tailwind-merge"
import { infer, z } from "zod"

import { Button } from "~qcs/components"

import { SurveyChoice } from "./SurveyChoice"
import { SurveyComment } from "./SurveyComment"
import { useSurveyContext } from "./SurveyContext"
import { SurveySubmitButton } from "./SurveySubmitButton"

const surveySchema = z.object({
  sentiment: z.string(),
  comment: z.string().max(500).optional(),
})

export const surveyValidator = withZod(surveySchema)

export type SurveyResponse = z.infer<typeof surveySchema>

interface SurveyModalProps {
  show: boolean
}

export const SurveyModal: FC = () => {
  const { t } = useTranslation()

  const { open, onSubmit, makeOnDismiss } = useSurveyContext()

  const isDesktop = useIsDesktop()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              transition: { duration: 0.6 },
            },
            animate: {
              opacity: 1,
              transition: { duration: 0.6 },
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.6, delay: 0.6 },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed bottom-0 left-0 right-0 top-0 z-50 w-full"
        >
          <div
            className="fixed bottom-0 left-0 right-0 top-0 w-full bg-black opacity-50"
            onClick={makeOnDismiss(false)}
          />
          <motion.div
            key={isDesktop ? "desktop" : "mobile"}
            variants={{
              initial: {
                transform: `translateY(calc(100% + ${isDesktop ? "24px" : "8px"}))`,
                transition: { duration: 0.6 },
              },
              animate: {
                transform: "translateY(0)",
                transition: { duration: 0.6, delay: 0.6 },
              },
              exit: {
                transform: `translateY(calc(100% + ${isDesktop ? "24px" : "8px"}))`,
                transition: { duration: 0.6 },
              },
            }}
            className={twMerge(
              "fixed bottom-2 left-2 right-2 rounded bg-primary p-4 shadow-card",
              "sm:bottom-6 sm:left-auto sm:right-6 sm:box-content sm:w-96",
            )}
          >
            <ValidatedForm
              validator={surveyValidator}
              method="post"
              onSubmit={onSubmit}
              className="flex flex-col gap-4"
            >
              <h1 className="text-center text-base font-bold leading-6 text-contrast">{t("survey.body")}</h1>
              <div className="flex gap-4">
                <SurveyChoice sentiment="good" icon={faFaceSmileBeam} label={t("survey.choices.good")} />
                <SurveyChoice sentiment="neutral" icon={faFaceDiagonalMouth} label={t("survey.choices.neutral")} />
                <SurveyChoice sentiment="bad" icon={faFaceWorried} label={t("survey.choices.bad")} />
              </div>
              <SurveyComment />
              <div className="flex gap-4">
                <Button
                  background="dark"
                  variant="secondary"
                  className="flex-1 text-nowrap"
                  onClick={makeOnDismiss(true)}
                >
                  {t("survey.buttons.remind_me")}
                </Button>

                <SurveySubmitButton />
              </div>
            </ValidatedForm>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
