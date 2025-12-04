import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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

export const NavBar = ({ activeSection, onNavigate }: NavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavigate = (section: SectionId) => {
    onNavigate(section)
    setIsMobileMenuOpen(false)
  }

  return (
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              label={link.label}
              target={link.href}
              isActive={activeSection === link.href}
              onNavigate={handleNavigate}
            />
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Button
          variant="ghost"
          onClick={() => handleNavigate('contact')}
          className="hidden md:block text-xs px-4 py-2"
        >
          Contact
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col px-5 py-4 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  label={link.label}
                  target={link.href}
                  isActive={activeSection === link.href}
                  onNavigate={handleNavigate}
                />
              ))}
              <Button
                variant="ghost"
                onClick={() => handleNavigate('contact')}
                className="text-xs px-4 py-2 mt-2"
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}


