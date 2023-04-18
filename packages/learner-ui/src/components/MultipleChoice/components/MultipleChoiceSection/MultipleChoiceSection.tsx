import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { fadeAndCollapse } from "../../animations";
import type { MultipleChoiceSectionProps } from "./MultipleChoiceSection.types";

export const MultipleChoiceSection = ({
  text,
  feedback,
}: MultipleChoiceSectionProps) => {
  return (
    <AnimatePresence initial={false}>
      {!feedback && text && (
        <motion.p
          className="mb-5 text-sm"
          variants={fadeAndCollapse}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {text}
        </motion.p>
      )}
    </AnimatePresence>
  );
};
