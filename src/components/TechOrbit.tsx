import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { SiReact, SiJavascript, SiKubernetes, SiAmazon, SiGithub,SiMongodb, SiTailwindcss, SiDocker } from 'react-icons/si'

const icons: { Icon: IconType; label: string; top: string; left: string; color: string }[] = [
  { Icon: SiReact, label: 'React', top: '6%', left: '25%', color: '#61DAFB' },
  { Icon: SiTailwindcss, label: 'Tailwindcss', top: '42%', left: '10%', color: '#38BDF8' },
  { Icon: SiJavascript, label: 'JavaScript', top: '10%', left: '62%', color: '#F7DF1E' },
  { Icon: SiMongodb, label: 'MongoDB', top: '40%', left: '55%', color: '#4DB33D' },
  { Icon: SiKubernetes, label: 'Kubernetes', top: '32%', left: '30%', color: '#326CE5' },
  { Icon: SiAmazon, label: 'AWS', top: '54%', left: '78%', color: '#FF9900' },
  { Icon: SiGithub, label: 'GitHub', top: '74%', left: '48%', color: '#181717' },
  { Icon: SiDocker, label: 'Docker', top: '70%', left: '20%', color: '#2496ED' },
]

const circleLayers = ['5%', '18%', '32%', '48%']

const GridLines = () => (
  <>
    {circleLayers.map((offset) => (
      <div key={offset} className="absolute inset-0" style={{ padding: offset }}>
        <div className="h-full w-full rounded-full border border-white/[0.07]" />
      </div>
    ))}
    <div className="absolute inset-0 flex items-center">
      <div className="h-px w-full bg-white/10" />
    </div>
    <div className="absolute inset-0 justify-center flex">
      <div className="w-px h-full bg-white/10" />
    </div>
    <div className="absolute inset-0 rotate-45 flex items-center">
      <div className="h-px w-full bg-white/10" />
    </div>
    <div className="absolute inset-0 -rotate-45 flex items-center">
      <div className="h-px w-full bg-white/10" />
    </div>
  </>
)

export const TechOrbit = () => (
  <div className="relative h-56 w-full max-w-xs sm:h-64 sm:max-w-sm md:h-72 md:max-w-md">
    <div className="absolute -top-16 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent-blue/40 to-transparent blur-[60px]" />
    <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-gradient-to-br from-accent-pink/30 to-transparent blur-[60px]" />
    <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-xl border border-white/10" />
    <GridLines />
    {icons.map(({ Icon, label, top, left, color }) => (
      <motion.div
        key={label}
        className="absolute flex h-11 w-11 items-center justify-center rounded-[18px] bg-white/5 border border-white/15 backdrop-blur text-white/80"
        style={{ top, left, transform: 'translate(-50%, -50%)', borderColor: `${color}33` }} 
        animate={{ y: ['-6%', '6%', '-6%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${color}66` }} 
      >
        <Icon className="relative text-xl" style={{ color: color }} /> 
      </motion.div>
    ))}
    <motion.div
      
      animate={{ scale: [1, 1.0, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      
    </motion.div>
  </div>
)