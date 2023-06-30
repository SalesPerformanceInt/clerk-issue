import React, { FC } from "react";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { fade } from "~/config/animations";

import { BreakAction, BreakBackground } from "~/components";
import { useQuestionContext } from "~/components/Question";
import {
  DRAWER_HEIGHT,
  QuestionVariant,
} from "~/components/Question/components";

export const QuestionBody: FC = () => {
  const {
    onBreak,
    bodyRef,
    bodyHeight,
    offset = 0,
    showAction,
    onClose,
  } = useQuestionContext();

  const BOTTOM_PADDING = 32 + offset;
  const actionHeight = DRAWER_HEIGHT + 38 + BOTTOM_PADDING;

  return (
    <>
      <BreakBackground show={onBreak} bodyHeight={bodyHeight} />
      <motion.div
        animate={{ height: bodyHeight || "auto" }}
        transition={{ duration: 0.5 }}
        className={twMerge("rounded-t-3xl bg-white", !onBreak && "flex-1")}
      >
        <motion.div ref={bodyRef}>
          <motion.div
            className={twMerge("p-8", !onBreak && "flex-1")}
            style={{
              paddingBottom: showAction ? actionHeight : BOTTOM_PADDING,
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
