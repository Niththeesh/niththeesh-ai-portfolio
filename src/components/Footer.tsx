import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[-0.06em] text-white">{profile.name}</p>
          <p className="mt-2 text-sm text-slate-400">AI Engineering • Computing • Technology</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 px-5 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 Niththeesh. All rights reserved.</p>
        <div className="inline-flex items-center gap-2 text-slate-400">
          <span>Built with React + TypeScript</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </footer>
  )
}
