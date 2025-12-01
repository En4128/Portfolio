import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { fadeInUp, staggerContainer } from '../utils/animations'
import type { SectionId } from '../utils/constants'
import { TechOrbit } from '../components/TechOrbit'
import { Card } from '../components/Card'

type HeroProps = {
  onNavigate: (section: SectionId) => void
}

export const Hero = ({ onNavigate }: HeroProps) => (
  <section id="hero" className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
    <div className="absolute inset-0 opacity-60 blur-[120px] pointer-events-none" />
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <motion.div variants={staggerContainer()} initial="hidden" animate="show" className="grid gap-12 lg:grid-cols-[3fr,2fr] items-center">
        <motion.div variants={fadeInUp(0)} className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60 mx-auto lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-accent-pink animate-pulse" /> Portfolio
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight">Hi, I'm Elangovan</h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto lg:mx-0">
            I blend narrative UX with automation-heavy backends so teams can launch ambitious ideas without chaos. From async FastAPI gateways to motion-rich product surfaces and Kubernetes delivery
            rails—this is what clarity, velocity, and craftsmanship look like.
          </p>
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <Button onClick={() => onNavigate('projects')}>Projects</Button>
            <Button variant="ghost" onClick={() => onNavigate('contact')}>
              Contact
            </Button>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp(0.1)} className="relative flex justify-center">
          <div className="absolute -top-8 -right-6 h-20 w-20 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-4 left-2 h-12 w-24 rounded-full bg-accent-pink/30 blur-3xl" />
          <Card className="p-6 sm:p-8 rounded-3xl flex flex-col items-center gap-6 w-full max-w-sm">
            <p className="text-sm text-white/60 uppercase tracking-[0.4em]">My Tech Stack</p>
            <TechOrbit />

          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
)