import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  external?: boolean
}

export function Button({ children, href, variant = 'primary', className = '', external = false }: ButtonProps) {
  const classes =
    variant === 'primary'
      ? 'bg-accent text-slate-950 shadow-glow hover:-translate-y-0.5 hover:bg-accentSoft'
      : 'border border-white/10 bg-white/5 text-white hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/5'

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${classes} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${classes} ${className}`}
    >
      {children}
    </button>
  )
}
