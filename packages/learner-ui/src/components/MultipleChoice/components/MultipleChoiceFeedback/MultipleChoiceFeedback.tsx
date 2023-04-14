import React from "react";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { MultipleChoiceConfidence } from "../MultipleChoiceConfidence";
import type { MultipleChoiceFeedbackProps } from "./MultipleChoiceFeedback.types";
import { choiceFeedback } from "./choiceFeedback";

export const MultipleChoiceFeedback = ({
  feedback,
  selected,
  onGoBackClick,
}: MultipleChoiceFeedbackProps) => {
  if (!feedback || !selected) return null;

  const { feedbackText, icon, color } = choiceFeedback.get(selected.correct);

  return (
    <>
      <AnimatePresence>
        <motion.div
          key="correct"
          className="flex items-center space-x-2 "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.25 },
          }}
        >
          <>
            <img className="h-5 w-5 rounded-full" alt="close" src={icon} />

            <p className={classNames("text-sm font-bold", color)}>
              {feedbackText}
            </p>
          </>
        </motion.div>
      </AnimatePresence>

      <MultipleChoiceConfidence
        feedback={!feedback}
        selected={selected}
        onGoBackClick={onGoBackClick}
      />
    </>
  );
};
