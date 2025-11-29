import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiAmazon,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiPrometheus,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiJenkins,
  SiGit,

} from 'react-icons/si'
import { fadeInUp, staggerContainer } from '../utils/animations'

type ToolRow = {
  label: string
  tools: { name: string; Icon: IconType; color: string }[]
}

const toolRows: ToolRow[] = [
  {
    label: 'Frontend & UI',
    tools: [
      { name: 'HTML5', Icon: SiHtml5, color: '#E44D26' },
      { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
      
    ],
  },
  {
    label: 'Python, APIs & Data',
    tools: [
      { name: 'Python', Icon: SiPython, color: '#FFD43B' },
      { name: 'Express', Icon: SiExpress, color: '#EEEEEE' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
     
    ],
  },
  {
    label: 'DevOps & Cloud Tooling',
    tools: [
      { name: 'Docker', Icon: SiDocker, color: '#0DB7ED' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
      { name: 'Jenkins', Icon: SiJenkins, color: 'white' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2C974B' },
      { name: 'Terraform', Icon: SiTerraform, color: '#7B42BC' },
      { name: 'AWS', Icon: SiAmazon, color: '#FF9900' },
      { name: 'Prometheus', Icon: SiPrometheus, color: '#E6522C' },
      
    ],
  },
]

export const Skills = () => (
  <section id="skills" className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="space-y-4 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
          Modern stack focus
        </span>
        <h2 className="text-3xl md:text-4xl font-display">Making apps with modern technologies.</h2>
        <p className="text-white/70 italic">Never miss a task, deadline or idea.</p>
      </div>
      <motion.div
        className="glass gradient-border rounded-[32px] p-8 md:p-12 space-y-10"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {toolRows.map((row, rowIndex) => (
          <motion.div key={row.label} variants={fadeInUp(rowIndex * 0.1)} className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{row.label}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {row.tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="group flex flex-col items-center gap-2 text-white/70"
                  whileHover={{ y: -8, scale: 1.08, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border bg-white/5 shadow-inner shadow-black/40 transition-all duration-300 group-hover:shadow-[0_0_25px] group-hover:shadow-current"
                    style={{ borderColor: `${tool.color}33`, color: tool.color }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle, ${tool.color}26 0%, transparent 70%)` }}
                    />
                    <tool.Icon className="relative text-3xl" style={{ color: tool.color }} />
                  </div>
                  <span className="text-xs uppercase tracking-wide text-white/70 group-hover:text-white" style={{ color: tool.color }}>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)


