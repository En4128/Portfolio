import clsx from 'clsx'
import type { SectionId } from '../utils/constants'

type NavLinkProps = {
  label: string
  target: SectionId
  isActive: boolean
  onNavigate: (target: SectionId) => void
}

export const NavLink = ({ label, target, isActive, onNavigate }: NavLinkProps) => (
  <button
    onClick={() => onNavigate(target)}
    className={clsx(
      'relative px-4 py-2 text-sm font-medium transition-colors',
      isActive ? 'text-white' : 'text-white/70 hover:text-white'
    )}
  >
    {label}
    {isActive && <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-white/80 rounded-full" />}
  </button>
)


