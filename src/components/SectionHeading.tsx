type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle: string
}

export const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <div className="text-center md:text-left space-y-3 max-w-2xl">
    <p className="text-sm uppercase tracking-[0.3em] text-white/60">{eyebrow}</p>
    <h2 className="text-3xl md:text-4xl font-display text-white">{title}</h2>
    <p className="text-base text-white/70">{subtitle}</p>
  </div>
)


