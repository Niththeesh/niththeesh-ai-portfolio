import { ArrowUpRight } from 'lucide-react'

type CertificationCardProps = {
  title: string
  platform: string
  href: string
}

export function CertificationCard({ title, platform, href }: CertificationCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-400">Certificate</p>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300">{platform}</p>
        </div>
        <span className="inline-flex rounded-full border border-accent/30 bg-accent/5 p-2 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between text-sm font-medium text-accent">
        <span>View Certificate</span>
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </a>
  )
}
