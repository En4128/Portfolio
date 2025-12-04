import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { FiCode, FiGitBranch, FiSettings } from 'react-icons/fi'

const techLabels = [
  { name: 'Docker', position: '-top-4 -left-8' },
  { name: 'React.js', position: '-top-4 -right-8' },
  { name: 'Jenkins', position: '-bottom-4 -right-8' },
  { name: 'AWS', position: '-bottom-4 -left-8' },
]

const features = [
  {
    icon: <FiCode className="text-2xl" />,
    title: 'Clean Code',
    description: 'Writing maintainable code',
  },
  {
    icon: <FiSettings className="text-2xl" />,
    title: 'DevOps',
    description: 'Deployment and automation',
  },
  {
    icon: <FiGitBranch className="text-2xl" />,
    title: 'CI/CD',
    description: 'Continuous Integration and Deployment',
  },
]

export const About = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-12 lg:grid-cols-2 items-center"
      >
        {/* Left side - Profile Photo with Tech Labels */}
        <motion.div variants={fadeInUp(0)} className="relative flex justify-center">
          <div className="relative w-80 h-80">
            {/* Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-white/5"></div>
            <div className="absolute inset-[-20px] rounded-full border border-white/5"></div>
            <div className="absolute inset-[-40px] rounded-full border border-white/5"></div>

            {/* Circular Profile Photo */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent-blue/60 shadow-[0_0_40px_rgba(96,165,250,0.6),0_0_80px_rgba(96,165,250,0.4),0_0_120px_rgba(96,165,250,0.2)]"
              animate={{
                boxShadow: [
                  '0 0 40px rgba(96,165,250,0.6), 0 0 80px rgba(96,165,250,0.4), 0 0 120px rgba(96,165,250,0.2)',
                  '0 0 60px rgba(96,165,250,0.8), 0 0 100px rgba(96,165,250,0.5), 0 0 140px rgba(96,165,250,0.3)',
                  '0 0 40px rgba(96,165,250,0.6), 0 0 80px rgba(96,165,250,0.4), 0 0 120px rgba(96,165,250,0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src="/public/img.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Tech Labels */}
            {techLabels.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
                className={`absolute ${tech.position} bg-black/80 backdrop-blur-md border border-accent-blue/40 rounded-lg px-4 py-2 text-sm font-medium shadow-[0_0_20px_rgba(96,165,250,0.4),0_0_40px_rgba(96,165,250,0.2)] hover:border-accent-blue/70 hover:shadow-[0_0_30px_rgba(96,165,250,0.6),0_0_60px_rgba(96,165,250,0.3)] transition-all duration-300 cursor-pointer z-10`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div variants={fadeInUp(0.1)} className="space-y-6">
          <div>
            <p className="text-accent-blue text-sm uppercase tracking-[0.3em] mb-2">About Me</p>
            <h2 className="text-3xl md:text-5xl font-display leading-tight">
              Creating Success By {' '}
              <span className="text-accent-blue">Constant Improvement</span>
            </h2>
          </div>

          <p className="text-white/70 text-lg leading-relaxed">
            As a passionate DevOps Engineer and Frontend Developer, I bring expertise in streamlining delivery pipelines and developing modern, responsive web applications. With a strong academic foundation in Computer Science and focused skill development in cloud platforms and automation, I aim to create robust engineering environments that elevate performance and enhance user experience.
          </p>

          <p className="text-white/70 leading-relaxed">
            I enjoy solving complex problems through clean, efficient code and continuously expanding my knowledge. With hands-on experience from internships and personal projects, I am eager to contribute to innovative teams and create impactful digital solutions.
          </p>

          {/* Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-3 pt-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(96, 165, 250, 0.5)',
                  boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
                }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 space-y-2 cursor-pointer group"
              >
                <motion.div
                  className="text-accent-blue"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-semibold text-sm group-hover:text-accent-blue transition-colors duration-300">{feature.title}</h3>
                <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)
