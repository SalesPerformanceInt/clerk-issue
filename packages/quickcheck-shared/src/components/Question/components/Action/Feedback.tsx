import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { faCheckCircle, faTimesCircle } from "@fortawesome/pro-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { grow } from "~/config/animations";

import { stripHTML } from "~/utils/stripHTML";

import { useQuestionContext } from "~/components/Question";

interface FeedbackHeaderProps {
  className?: string;
  icon: FontAwesomeIconProps["icon"];
  message: string;
}

const FeedbackHeader: FC<FeedbackHeaderProps> = ({
  className,
  icon,
  message,
}) => (
  <div className={twMerge(" flex items-center space-x-4 font-bold", className)}>
    <FontAwesomeIcon icon={icon} />
    <p className="text-bold">{message}</p>
  </div>
);

export const Feedback: FC = () => {
  const { selected, submitted } = useQuestionContext();
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      <AnimatePresence>
        {submitted && (
          <motion.div
            variants={grow}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col space-y-4 mb-4 sm:mb-0 sm:mr-12"
          >
            {selected?.correct ? (
              <FeedbackHeader
                className="text-success-50"
                icon={faCheckCircle}
                message={t("question.feedback.correct")}
              />
            ) : (
              <FeedbackHeader
                className="text-warning-50"
                icon={faTimesCircle}
                message={t("question.feedback.incorrect")}
              />
            )}
            <p className="text-contrast text-base">
              {stripHTML(selected?.feedback)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
