import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { loaderVariants } from '../utils/animations'
import { ProgressBar } from './ProgressBar'

type LoaderProps = {
  progress: number
  isVisible: boolean
}

export const Loader = ({ progress, isVisible }: LoaderProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#04050d]"
        variants={loaderVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="w-20 h-20"
          animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="w-64 space-y-3 text-center">
          <ProgressBar value={progress} />
          <p className="text-sm tracking-[0.3em] text-white/70">{Math.round(progress)}%</p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)


