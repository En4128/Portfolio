import { socialLinks } from '../utils/constants'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  GitHub: <SiGithub />,
  LinkedIn: <SiLinkedin />,
  Twitter: <RiTwitterXFill />,
  Insta: <SiInstagram />,
  Email: <HiOutlineMail />,
  Phone: <FiPhone />,
}

export const Footer = () => (
  <footer className="relative pb-12 pt-16">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-gradient-to-r from-accent-blue/40 via-accent-purple/30 to-accent-pink/40 blur-[150px] opacity-60 pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-8 text-sm text-white/70">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">Elangovan</p>
          <p>Let's connect and build something great!</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: '0 10px 40px rgba(96,165,250,0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white"
        >
          Back to top
        </motion.button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:border-white/30"
            whileHover={{ y: -6, scale: 1.1, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
          >
            <span className="text-xl text-white/80 transition group-hover:text-white">{iconMap[link.label] ?? <SiGithub />}</span>
          </motion.a>
        ))}
      </div>
      <div className="text-xs text-white/50">
        <p>© 2025 Elangovan . All right reserved.</p>
      </div>
    </div>
  </footer>
)


