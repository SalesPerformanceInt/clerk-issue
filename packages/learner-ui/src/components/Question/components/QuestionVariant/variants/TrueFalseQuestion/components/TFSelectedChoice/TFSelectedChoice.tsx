import React, { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { fade } from "~/config/animations";

import type { TFSelectedChoiceProps } from "./TFSelectedChoice.types";

export const TFSelectedChoice: FC<TFSelectedChoiceProps> = ({
  show,
  selected,
  tfquestion,
}) => {
  const selectedChoice = selected && (JSON.parse(selected?.value) as boolean);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="go-back"
          className="flex"
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <p className="text-xl">
            You chose:
            <span
              className={`${
                selectedChoice ? "bg-lime-200" : "bg-red-300"
              } -m-1 ml-2 p-1 font-bold`}
            >
              {selectedChoice
                ? tfquestion.truthy_label
                : tfquestion.falsey_label}
            </span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
