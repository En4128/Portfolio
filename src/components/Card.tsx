import clsx from 'clsx'
import { motion } from 'framer-motion'


import type { HTMLMotionProps } from 'framer-motion'

type CardProps = HTMLMotionProps<'div'> & {
  gradient?: boolean
}

export const Card = ({ className, gradient = true, children, ...rest }: CardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={clsx(
      'glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500',
      gradient && 'bg-glass-gradient',
      className
    )}
    {...rest}
  >
    {children}
  </motion.div>
)


