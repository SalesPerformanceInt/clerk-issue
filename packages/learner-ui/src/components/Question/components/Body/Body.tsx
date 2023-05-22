import React, { FC } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";

import { useQuestionContext } from "~/components/Question";
import {
  BreakAction,
  CONFIDENCE_HEIGHT,
  QuestionVariant,
} from "~/components/Question/components";

export const Body: FC = () => {
  const {
    onBreak,
    bodyRef,
    bodyHeight,
    offset = 0,
    showConfidence,
  } = useQuestionContext();

  const BOTTOM_PADDING = 32 + offset;
  const confidenceHeight = CONFIDENCE_HEIGHT + 38 + BOTTOM_PADDING;

  return (
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
          {!onBreak ? <QuestionVariant /> : <BreakAction />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
