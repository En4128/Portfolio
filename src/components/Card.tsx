import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  gradient?: boolean
}

export const Card = ({ className, gradient = true, children, ...rest }: CardProps) => (
  <div
    className={clsx(
      'glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500',
      gradient && 'bg-glass-gradient',
      className
    )}
    {...rest}
  >
    {children}
  </div>
)


