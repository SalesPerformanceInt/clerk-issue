import React, { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { fade } from "~/config/animations";

import type { TFSelectedChoiceProps } from "./TFSelectedChoice.types";

export const TFSelectedChoice: FC<TFSelectedChoiceProps> = ({
  show,
  selected,
  tfquestion,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="go-back"
          className="flex"
          variants={fade()}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <p className="text-xl">
            You chose:
            <span
              className={`${
                selected?.correct ? "bg-lime-200" : "bg-red-300"
              } -m-1 ml-2 p-1 font-bold`}
            >
              {selected?.correct
                ? tfquestion.truthy_label
                : tfquestion.falsey_label}
            </span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
