import { Download, ExternalLink, Printer, X } from 'lucide-react'
import { certifications, education, profile, skillCategories } from '../data/portfolio'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="resume-sheet">
          <div className="resume-header">
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                {profile.fullName}
              </h2>
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '13px', marginTop: '4px' }}>
                {profile.role}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '6px' }}>
                {profile.location} • {profile.email} • {profile.phone}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-pill" onClick={handlePrint} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Printer size={13} /> Print
              </button>
              <a
                href={`mailto:${profile.email}?subject=Inquiry%20regarding%20AI%20Engineering%20Role`}
                className="btn-pill active"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Download size={13} /> Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="resume-section-title">Professional Summary</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
              {profile.bio} Demonstrated foundation in algorithmic development, computer vision with PyTorch and YOLO,
              systems programming in C++, relational SQL schemas, and agile team delivery.
            </p>
          </div>

          <div>
            <h3 className="resume-section-title">Formal Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {education.map((item) => (
                <div key={item.degree} style={{ padding: '8px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '15px' }}>{item.degree}</strong>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)' }}>
                      {item.period}
                    </span>
                  </div>
                  <p style={{ color: 'var(--cyan-accent)', fontSize: '13px' }}>{item.institution}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="resume-section-title">Verified Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '8px 12px',
                    borderRadius: '6px'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{cert.title}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--text-dim)', marginLeft: '10px', fontFamily: 'var(--font-mono)' }}>
                      ID: {cert.credentialId}
                    </span>
                  </div>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--accent)', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="resume-section-title">Core Competencies</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {skillCategories.map((cat) => (
                <div key={cat.title} style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {cat.title}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {cat.items.map((i) => i.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
              Full verification links and repositories available at{' '}
              <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                github.com/Niththeesh
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
