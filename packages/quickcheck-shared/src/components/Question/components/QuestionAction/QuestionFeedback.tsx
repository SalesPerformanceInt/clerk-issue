import React, { type FC } from "react"
import { useTranslation } from "react-i18next"

import { faAward } from "@fortawesome/pro-regular-svg-icons"
import { faCheckCircle, faTimesCircle } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { grow, slideLeft } from "~qcs/config/animations"
import { AnimatePresence, motion } from "framer-motion"
import parse from "html-react-parser"
import { isNumber } from "remeda"
import { twMerge } from "tailwind-merge"

import { useQuestionContext } from "~qcs/components/Question"

interface QuestionFeedbackHeaderProps {
  className?: string
  icon: FontAwesomeIconProps["icon"]
  message: string
}

const QuestionFeedbackHeader: FC<QuestionFeedbackHeaderProps> = ({ className, icon, message }) => (
  <div className={twMerge("flex items-center space-x-2 font-bold", className)}>
    <FontAwesomeIcon icon={icon} />
    <p>{message}</p>
  </div>
)

export const QuestionFeedback: FC = () => {
  const { selected, submitted, score, totalScore } = useQuestionContext()
  const { t } = useTranslation()

  return (
    <div className="flex-1">
      <AnimatePresence>
        {submitted && (
          <motion.div
            variants={grow}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-6 flex flex-col space-y-4"
            data-testid="QuestionItem-ChoiceFeedback"
          >
            <div className="flex items-center justify-between overflow-hidden">
              {selected?.correct ? (
                <QuestionFeedbackHeader
                  className="text-success-50"
                  icon={faCheckCircle}
                  message={t("question.feedback.correct")}
                />
              ) : (
                <QuestionFeedbackHeader
                  className="text-warning-50"
                  icon={faTimesCircle}
                  message={t("question.feedback.incorrect")}
                />
              )}

              {isNumber(score) && (
                <motion.div
                  variants={slideLeft}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex items-center justify-end gap-2"
                >
                  <motion.span className="flex items-center text-contrast">
                    <FontAwesomeIcon icon={faAward} className="mr-1 translate-y-[1px] text-xs" />
                    {totalScore}
                  </motion.span>

                  <motion.span className="font-bold text-success-50">+{score}</motion.span>
                </motion.div>
              )}
            </div>
            <p className="text-base text-contrast">
              {parse(selected?.feedback.replace("<p>", "").replace("</p>", "") ?? "")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
