import React, { type FC } from "react";
import { useMeasure } from "react-use";

import { grow } from "~qcs/config/animations";
import { AnimatePresence, motion } from "framer-motion";

import { ResponsiveContainer } from "~qcs/components";
import { useQuestionContext } from "~qcs/components/Question";

import { QuestionActionButton } from "./QuestionActionButton";
import { QuestionFeedback } from "./QuestionFeedback";

const MotionResponsiveContainer = motion(ResponsiveContainer);

export const QuestionAction: FC = () => {
  const { offset, hasSelected } = useQuestionContext();

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <>
      <div style={{ height }} />

      <AnimatePresence>
        {hasSelected && (
          <MotionResponsiveContainer
            variants={grow}
            initial="initial"
            animate="animate"
            ref={ref}
            className="fixed inset-x-0 bottom-0 bg-primary"
          >
            <div
              style={offset ? { marginBottom: offset } : undefined}
              className="flex flex-col p-4 sm:justify-between sm:px-12 sm:py-6"
            >
              <QuestionFeedback />

              <div className="flex items-end justify-end">
                <QuestionActionButton />
              </div>
            </div>
          </MotionResponsiveContainer>
        )}
      </AnimatePresence>
    </>
  );
};
