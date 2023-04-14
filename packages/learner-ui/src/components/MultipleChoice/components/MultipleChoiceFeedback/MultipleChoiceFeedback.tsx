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
        <motion.section
          key="correct"
          title="Response Feedback"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.25 },
          }}
          {...selected.$?.feedback}
        >
          <>
            <div className="flex items-center space-x-2">
              <img className="w-5 h-5 rounded-full" alt="close" src={icon} />

              <p className={classNames("text-sm font-bold", color)}>
                {feedbackText}
              </p>
            </div>
            <div
              className="mt-2 text-sm display-block"
              dangerouslySetInnerHTML={{
                __html: selected.feedback || "",
              }}
            ></div>
          </>
        </motion.section>
      </AnimatePresence>

      <MultipleChoiceConfidence
        feedback={!feedback}
        selected={selected}
        onGoBackClick={onGoBackClick}
      />
    </>
  );
};
