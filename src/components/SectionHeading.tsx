type SectionHeadingProps = {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-accent/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.06em] text-white md:text-4xl">{title}</h2>
    </div>
  )
}
