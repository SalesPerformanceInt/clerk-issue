import React, { FC } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";
import { fade } from "~/config/animations";

import { BreakAction, BreakBackground } from "~/components";
import { useQuestionContext } from "~/components/Question";
import {
  CONFIDENCE_HEIGHT,
  QuestionVariant,
} from "~/components/Question/components";

export const QuestionBody: FC = () => {
  const {
    onBreak,
    bodyRef,
    bodyHeight,
    offset = 0,
    showConfidence,
    onClose,
  } = useQuestionContext();

  const BOTTOM_PADDING = 32 + offset;
  const confidenceHeight = CONFIDENCE_HEIGHT + 38 + BOTTOM_PADDING;

  return (
    <>
      <BreakBackground show={onBreak} bodyHeight={bodyHeight} />
      <motion.div
        animate={{ height: bodyHeight || "auto" }}
        transition={{ duration: 0.5 }}
        className={classNames("rounded-t-3xl bg-white", {
          ["flex-1"]: !onBreak,
        })}
      >
        <motion.div ref={bodyRef}>
          <motion.div
            className={classNames("p-8", {
              ["flex-1"]: !onBreak,
            })}
            style={{
              paddingBottom: showConfidence ? confidenceHeight : BOTTOM_PADDING,
            }}
          >
            {!onBreak ? (
              <motion.div
                variants={fade(0.5)}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <QuestionVariant />
              </motion.div>
            ) : (
              <BreakAction onClose={onClose} />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
