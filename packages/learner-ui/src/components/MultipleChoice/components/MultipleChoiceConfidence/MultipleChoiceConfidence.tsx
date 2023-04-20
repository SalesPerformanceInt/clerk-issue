import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowCircleLeft } from "~/components/images/ArrowCircleLeft";

import { fade } from "../../animations";
import type { MultipleChoiceConfidenceProps } from "./MultipleChoiceConfidence.types";

export const MultipleChoiceConfidence = ({
  selected,
  feedback,
  onGoBackClick,
}: MultipleChoiceConfidenceProps) => {
  return (
    <AnimatePresence>
      {!feedback && selected && (
        <motion.button
          key="go-back"
          className="btn 0 flex items-center space-x-2 hover:!opacity-80"
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onGoBackClick}
        >
          <ArrowCircleLeft className="h-5 w-5 rounded-full" alt="back" />
          <p className="text-neutral-70 text-sm">Choose another answer</p>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
