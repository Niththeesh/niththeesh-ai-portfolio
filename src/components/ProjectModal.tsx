import { CheckCircle2, Github, X } from 'lucide-react'
import type { Project } from '../data/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span className="project-badge">{project.category}</span>
          <span className="project-status">{project.status} • {project.year}</span>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '6px' }}>
          {project.title}
        </h2>
        <p style={{ color: 'var(--cyan-accent)', fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: '18px' }}>
          {project.subtitle}
        </p>

        <div className="project-metrics-banner">
          <strong>Key Benchmark:</strong> {project.metrics}
        </div>

        <div style={{ margin: '24px 0' }}>
          <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px' }}>
            System Overview
          </h4>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
            {project.description}
          </p>
        </div>

        <div style={{ margin: '24px 0' }}>
          <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '12px' }}>
            Key Architecture & Engineering Decisions
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.highlights.map((highlight, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ margin: '24px 0' }}>
          <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '10px' }}>
            Technologies & Frameworks
          </h4>
          <div className="project-tech-pills">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag" style={{ fontSize: '12px', padding: '4px 10px' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '13px' }}
          >
            <Github size={16} /> View on GitHub
          </a>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '10px 20px', fontSize: '13px' }}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  )
}
