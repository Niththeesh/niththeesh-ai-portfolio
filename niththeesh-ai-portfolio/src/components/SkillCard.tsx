import { ArrowUpRight } from 'lucide-react'

type SkillCardProps = {
  title: string
  subtitle: string
}

export function SkillCard({ title, subtitle }: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5 hover:shadow-glow">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">Skill</span>
        <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <h3 className="text-lg font-semibold tracking-[-0.04em] text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
    </div>
  )
}
