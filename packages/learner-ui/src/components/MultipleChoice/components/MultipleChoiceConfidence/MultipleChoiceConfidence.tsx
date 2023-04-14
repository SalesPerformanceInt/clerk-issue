import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { fade } from "../../animations";
import type { MultipleChoiceConfidenceProps } from "./MultipleChoiceConfidence.types";

export const MultipleChoiceConfidence = ({
  selected,
  feedback,
  onGoBackClick,
}: MultipleChoiceConfidenceProps) => {
  if (feedback || !selected) return null;

  return (
    <AnimatePresence>
      <motion.button
        key="go-back"
        className="btn 0 flex items-center space-x-2 hover:!opacity-80"
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={onGoBackClick}
      >
        <img
          className="h-5 w-5 rounded-full"
          alt="close"
          src="/arrow-circle-left.svg"
        />
        <p className="text-neutral-70 text-sm">Choose another answer</p>
      </motion.button>
    </AnimatePresence>
  );
};
