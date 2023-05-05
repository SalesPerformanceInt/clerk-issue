import React, { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";

import type { TFChoicesProps } from "./TFChoices.types";

export const CHOICES_HEIGHT = 90;

export const TFChoices: FC<TFChoicesProps> = ({
  onChoiceSelect,
  offset = 0,
  tfquestion,
  show,
}) => {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: CHOICES_HEIGHT + offset,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          exit={{
            height: 0,
            transition: {
              // delay: 0.5,
              duration: 0.5,
            },
          }}
          className={`fixed bottom-0 left-0 right-0 flex w-full justify-center bg-white h-[${
            CHOICES_HEIGHT + offset
          }px]`}
        >
          <div className="w-full border-t border-t-black px-8 py-5">
            <div className="flex justify-center space-x-5">
              <button
                onClick={() => onChoiceSelect(false)}
                className="h-12 max-w-[150px] flex-1 rounded bg-red-300 px-2 py-2 text-xs hover:bg-sky-300"
              >
                {tfquestion.falsey_label}
              </button>
              <button
                onClick={() => onChoiceSelect(true)}
                className="h-12 max-w-[150px] flex-1 rounded bg-lime-200 px-2 py-2 text-xs  hover:bg-yellow-200"
              >
                {tfquestion.truthy_label}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
