type ProgressBarProps = {
  value: number
}

export const ProgressBar = ({ value }: ProgressBarProps) => (
  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink transition-all duration-300 ease-out"
      style={{ width: `${value}%` }}
    />
  </div>
)


