import { easeInOut } from "framer-motion";

export const overlay = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.15, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, delay: 0.25, ease: easeInOut },
  },
};

export const taskAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.25, duration: 0.15, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.15, ease: easeInOut },
  },
};
