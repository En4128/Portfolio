import { motion, type HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  icon?: ReactNode
  className?: string
  download?: boolean | string
} & HTMLMotionProps<'button'>

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060a]'

export const Button = ({ children, href, variant = 'primary', icon, className, download, ...rest }: ButtonProps) => {
  const classes = clsx(
    baseStyles,
    variant === 'primary'
      ? 'bg-white/90 text-slate-900 hover:bg-white focus-visible:ring-white/80'
      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
    className
  )

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={classes}
      >
        {children}
        {icon}
      </motion.a>
    )
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes} {...rest}>
      {children}
      {icon}
    </motion.button>
  )
}


