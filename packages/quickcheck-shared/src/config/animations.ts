import { cubicBezier, type Variants } from "framer-motion"

const easeInOutBack = cubicBezier(0.68, -0.6, 0.32, 1.6)

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
}

export const grow: Variants = {
  initial: {
    opacity: 0,
    height: 0,
    transition: {
      ease: easeInOutBack,
      duration: 0.6,
    },
  },
  animate: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.6,
      ease: easeInOutBack,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.6,
      ease: easeInOutBack,
    },
  },
}

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
})

export const slideLeft: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.35,
    },
  },
}

export const activateBackground: Variants = {
  initial: {
    backgroundColor: "var(--background-secondary)",
    borderTopColor: "var(--primary-50)",
    borderTopWidth: "1px",
  },
  active: {
    backgroundColor: "var(--primary)",
    borderTopColor: "var(--primary)",
    borderTopWidth: "0px",
    transition: {
      duration: 0.35,
    },
  },
}
