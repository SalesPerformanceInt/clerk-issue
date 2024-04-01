import React, { type FC } from "react";
import { useMeasure } from "react-use";

import { activateBackground } from "~qcs/config/animations";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { useQuestionContext } from "~qcs/components/Question";

import { QuestionActionButton } from "./QuestionActionButton";
import { QuestionFeedback } from "./QuestionFeedback";

export const QuestionAction: FC = () => {
  const { offset, submitted } = useQuestionContext();

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <>
      <div style={{ height }} />
      <motion.div
        ref={ref}
        variants={activateBackground}
        initial="initial"
        animate={submitted && "active"}
        className="fixed inset-x-0 bottom-0 flex w-full justify-center"
      >
        <div className="w-full max-w-desktop px-0 sm:px-6 lg:px-0">
          <div
            style={offset ? { marginBottom: offset } : undefined}
            className="flex flex-col p-4 sm:justify-between sm:px-0 sm:py-6"
          >
            <QuestionFeedback />

            <div
              className={twMerge(
                "flex items-end justify-end",
                offset && "justify-end",
              )}
            >
              <QuestionActionButton />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
