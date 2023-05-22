import React, { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { BottomDrawerProps } from "./BottomDrawer.types";

export const getBottomDrawerVariants = (height: number | string) => ({
  initial: { height: 0 },
  animate: {
    height,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
});

export const BottomDrawer: FC<BottomDrawerProps> = ({
  children,
  height,
  show,
  initial = false,
}) => (
  <AnimatePresence initial={initial}>
    {show && (
      <motion.div
        variants={getBottomDrawerVariants(height)}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed bottom-0 left-0 right-0 flex w-full justify-center"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
