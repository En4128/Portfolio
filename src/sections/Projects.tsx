import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../utils/constants'
import { fadeInUp, staggerContainer } from '../utils/animations'

export const Projects = () => (
  <section id="projects" className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 sm:px-6 space-y-12">
      <SectionHeading
        eyebrow="Project Work"
        title=" "
        subtitle=" "
      />
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeInUp(index * 0.05)}
            whileHover={{ y: -8, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70 bg-gradient-to-r from-accent-blue/30 via-transparent to-accent-pink/30" />
            <Card className="h-full relative overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 via-transparent to-white/10"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="flex flex-col h-full gap-5 relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <motion.span
                    className="text-xs uppercase tracking-[0.3em] text-white/60 rounded-full border border-white/15 px-3 py-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.tags[0]}
                  </motion.span>
                </div>
                <p className="text-sm text-white/70 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70"
                      initial={{ opacity: 0, y: 8 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * tagIndex }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.div className="mt-2 self-start">
                  <Button href={project.link} className="text-xs" icon={<span>↗</span>}>
                    View project
                  </Button>
                  
                </motion.div>
              </div>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)


