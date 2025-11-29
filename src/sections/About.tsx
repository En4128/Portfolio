import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'
import { fadeInUp, staggerContainer } from '../utils/animations'


const timeline = [
  { year: '2024 — 2026', role: 'MCA Computer Application', desc: 'SRM Institute Of Science & Technology, Kattankulathur, Chennai.' },
  { year: '2021 — 2024', role: 'Bsc Computer Science', desc: 'SRM Institute Of Science & Technology, Kattankulathur, Chennai.' },
]

export const About = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      <SectionHeading eyebrow="About Me" title="Building solid systems and communicating them effectively." subtitle="I’m a hardworking and positive person who loves learning new things and improving myself every day." />
      <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <motion.div variants={fadeInUp(0)} className="space-y-6">
          <Card className="space-y-6">
            <p className="text-white/70">
              I lead engineering efforts that sit at the intersection of platform, product, and people. My approach values clarity—roadmaps that everyone understands, systems that are observable, and
              experiences that feel effortless. Whether it’s orchestrating async Python workers, crafting motion-rich React surfaces, or hardening CI/CD pipelines, I care about calm impact.
            </p>
            <p>
            - Elangovan
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
            
             
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/Elangovan_resume.pdf" download>
                Download CV
              </Button>
              <Button variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact
              </Button>
            </div>
          </Card>
        </motion.div>
        <motion.div variants={fadeInUp(0.1)}>
          <Card className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Education</p>
            <div className="space-y-5">
              {timeline.map((step) => (
                <div key={step.year} className="relative pl-5">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-white" />
                  <p className="text-sm text-white/60">{step.year}</p>
                  <p className="text-base font-semibold">{step.role}</p>
                  <p className="text-sm text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
)


