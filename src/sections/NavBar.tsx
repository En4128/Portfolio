import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { navLinks } from '../utils/constants'
import type { SectionId } from '../utils/constants'
import { NavLink } from '../components/NavLink'
import { Button } from '../components/Button'
import { fadeIn } from '../utils/animations'

type NavBarProps = {
  activeSection: SectionId
  onNavigate: (section: SectionId) => void
}

export const NavBar = ({ activeSection, onNavigate }: NavBarProps) => (
  <motion.header
    className="fixed top-4 left-1/2 z-40 w-[92vw] max-w-5xl -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl"
    variants={fadeIn(0)}
    initial="hidden"
    animate="show"
  >
    <nav className="flex items-center justify-between px-5 py-3">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-9 w-9" />
        <span className="hidden sm:block font-display text-lg tracking-wide">Elangovan</span>
      </div>
      <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar max-w-xs md:max-w-full">
        {navLinks.map((link) => (
          <NavLink key={link.href} label={link.label} target={link.href} isActive={activeSection === link.href} onNavigate={onNavigate} />
        ))}
      </div>
      <Button variant="ghost" onClick={() => onNavigate('contact')} className="text-xs px-4 py-2">
        Contact
      </Button>
    </nav>
  </motion.header>
)


