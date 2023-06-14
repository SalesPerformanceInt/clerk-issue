import type { Variants } from "framer-motion";

export const fadeAndCollapse: Variants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "unset",
    transition: {
      duration: 0.5,
      delay: 0.5,
      opacity: { delay: 0.75, duration: 0.5 },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
      height: { delay: 0.1, duration: 0.5 },
    },
  },
};

export const fade = (duration = 0.25): Variants => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration },
  },
  exit: {
    opacity: 0,
    transition: { duration },
  },
});
