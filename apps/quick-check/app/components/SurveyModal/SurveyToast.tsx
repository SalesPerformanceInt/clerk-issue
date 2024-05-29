import { type FC } from "react"
import { useTranslation } from "react-i18next"

import { useIsDesktop } from "~qcs/index"
import { AnimatePresence, motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

import { useSurveyContext } from "./SurveyContext"

export const SurveyToast: FC = () => {
  const { t } = useTranslation()

  const { toast, footerHeight } = useSurveyContext()

  const isDesktop = useIsDesktop()

  const bottom = `${(isDesktop ? 24 : 8) + footerHeight}px`

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={isDesktop ? "desktop-toast" : "mobile-toast"}
          variants={{
            initial: {
              transform: `translateY(calc(100% + ${bottom}))`,
              transition: { duration: 0.6 },
            },
            animate: {
              transform: "translateY(0)",
              transition: { duration: 0.6, delay: 0.6 },
            },
            exit: {
              transform: `translateY(calc(100% + ${bottom}))`,
              transition: { duration: 0.6 },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          className={twMerge(
            "fixed left-2 right-2 z-50 rounded bg-primary p-4 shadow-card",
            "sm:left-auto sm:right-6 sm:box-content sm:w-96",
          )}
          style={{ bottom }}
        >
          <h1 className="text-center text-base font-bold leading-6 text-contrast">{t("survey.thank_you")}</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
