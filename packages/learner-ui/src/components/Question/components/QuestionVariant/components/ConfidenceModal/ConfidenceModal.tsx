import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import type { ConfidenceModalProps } from "./ConfidenceModal.types";

export const CONFIDENCE_HEIGHT = 125;

export const ConfidenceModal = ({
  show,
  onConfidenceClick,
  offset = 0,
}: ConfidenceModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: CONFIDENCE_HEIGHT + offset,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          exit={{
            height: 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="fixed bottom-0 left-0 right-0 flex w-full justify-center bg-white"
        >
          <div className="w-full border-t border-t-black px-8 py-5">
            <p className="mb-4 text-sm">
              Rate how confident you are in your answer
            </p>
            <div className="flex justify-center space-x-5">
              <button
                onClick={() => onConfidenceClick(50)}
                className="h-12 max-w-[150px] flex-1 rounded bg-sky-200 px-2 py-2 text-xs hover:bg-sky-300"
              >
                I don't know
              </button>
              <button
                onClick={() => onConfidenceClick(200)}
                className="h-12 max-w-[150px] flex-1 rounded bg-yellow-100 px-2 py-2 text-xs  hover:bg-yellow-200"
              >
                I'm not sure
              </button>
              <button
                onClick={() => onConfidenceClick(1000)}
                className="h-12 max-w-[150px] flex-1 rounded bg-orange-200 px-2 py-2 text-xs  hover:bg-orange-300"
              >
                I know this
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
