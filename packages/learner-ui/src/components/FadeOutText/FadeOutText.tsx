import React, { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { fadeAndCollapse } from "~/config/animations";

import type { FadeOutTextProps } from "./FadeOutText.types";

export const FadeOutText: FC<FadeOutTextProps> = ({ text, hidden, $ }) => {
  return (
    <AnimatePresence initial={false}>
      {!hidden && text && (
        <motion.p
          className="mb-5 text-sm"
          variants={fadeAndCollapse}
          initial="initial"
          animate="animate"
          exit="exit"
          {...$?.text}
        >
          {text}
        </motion.p>
      )}
    </AnimatePresence>
  );
};
