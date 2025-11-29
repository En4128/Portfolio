import type { Variants } from 'framer-motion'

export const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  },
})

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
  },
})

export const staggerContainer = (stagger = 0.12): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
})

export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
  tap: { scale: 0.98 },
}

export const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    rotate: [-2, 2, -2],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const tagVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.3 },
  }),
}

export const loaderVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.4 } },
}


