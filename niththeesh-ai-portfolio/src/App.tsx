import './App.css'
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Brain,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Menu,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  X
} from 'lucide-react'
import { useEffect, useState } from 'react'

import { ProjectModal } from './components/ProjectModal'
import { ResumeModal } from './components/ResumeModal'
import { TerminalPlayground } from './components/TerminalPlayground'
import {
  certifications,
  education,
  navItems,
  profile,
  projects,
  skillCategories,
  type Project
} from './data/portfolio'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Message form state
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  // Simulated live telemetry latency
  const [telemetryLatency, setTelemetryLatency] = useState(18.4)

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryLatency(Number((16 + Math.random() * 4).toFixed(1)))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3500)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopiedEmail(true)
    showToast(`Email copied: ${profile.email}`)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactName || !contactEmail || !contactMessage) {
      showToast('Please fill out all contact fields.')
      return
    }
    // Open user's default mail client with pre-filled content
    const subject = encodeURIComponent(`Inquiry from ${contactName} via AI Portfolio`)
    const body = encodeURIComponent(`From: ${contactName} (${contactEmail})\n\nMessage:\n${contactMessage}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    showToast('Launching email client...')
    setContactName('')
    setContactEmail('')
    setContactMessage('')
  }

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="site-shell">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="status">
          <Sparkles size={16} color="var(--accent)" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Résumé Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Project Deep-Dive Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <a className="brand" href="#home" aria-label="Niththeesh home">
            <span className="brand-mark">N</span>
            <div className="brand-text">
              <span className="brand-title">{profile.name}</span>
              <span className="brand-tag">AI ENGINEERING</span>
            </div>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="btn-header-cta"
              onClick={() => setResumeOpen(true)}
            >
              <FileText size={14} /> Inspect Résumé
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="section-wrap hero-section" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-status-pill">
                <span className="status-beacon" />
                <span>{profile.status}</span>
              </div>

              <h1 className="hero-headline">
                Engineering <span className="text-gradient">Intelligence.</span>
                <br />
                Solving Hard Problems.
              </h1>

              <p className="hero-subtext">{profile.bio}</p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  Explore Selected Systems <ArrowDown size={15} />
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setResumeOpen(true)}
                >
                  <FileText size={15} /> Technical Résumé
                </button>
                <button
                  type="button"
                  className="copy-pill-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={13} color="var(--accent)" /> : <Copy size={13} />}
                  <span>{profile.email}</span>
                </button>
              </div>

              <div className="hero-meta-strip">
                <div className="hero-meta-item">
                  <span>Location:</span>
                  <strong>{profile.location}</strong>
                </div>
                <div className="hero-meta-item">
                  <span>Track:</span>
                  <strong>Pearson BTEC HND → UTS AI Engineering</strong>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-card">
                <div className="profile-hud-header">
                  <span className="hud-tag">
                    <Activity size={12} /> HUD // BIOMETRIC & TELEMETRY
                  </span>
                  <span>ID: AI-ENG-2026</span>
                </div>

                <div className="profile-image-wrap">
                  <img
                    className="profile-photo"
                    src="/profile.png"
                    alt={`${profile.fullName} profile portrait`}
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = '/fiver profile.png'
                    }}
                  />
                </div>

                <div className="profile-hud-footer">
                  <div className="profile-identity">
                    <h3>{profile.fullName}</h3>
                    <p>Higher National Diploma in Computing</p>
                  </div>
                  <span className="project-badge">ACTIVE REPO</span>
                </div>
              </div>

              {/* Live Telemetry Card */}
              <div className="telemetry-card">
                <div className="telemetry-stat">
                  <span className="stat-label">Inference Latency</span>
                  <span className="stat-value highlight">{telemetryLatency} ms</span>
                </div>
                <div className="telemetry-stat">
                  <span className="stat-label">Primary Framework</span>
                  <span className="stat-value">PyTorch / C++</span>
                </div>
                <div className="telemetry-stat">
                  <span className="stat-label">Vector Store</span>
                  <span className="stat-value">ChromaDB RAG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED SYSTEMS & PROJECTS */}
        <section className="section-wrap" id="projects">
          <div className="section-header">
            <span className="section-label">01 // Engineering Showcase</span>
            <h2 className="section-title">Selected Systems & Technical Projects</h2>
            <p className="section-desc">
              Demonstrated engineering across real-time computer vision, retrieval-augmented neural pipelines,
              and low-level C++ concurrent scheduling.
            </p>
          </div>

          <div className="projects-filter-bar">
            {['All', 'AI & ML', 'Systems & Core', 'Database & Apps'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div>
                  <div className="project-card-top">
                    <span className="project-badge">{project.category}</span>
                    <span className="project-status">{project.status} • {project.year}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>

                  <ul className="project-highlights-list">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-metrics-banner">
                    {project.metrics}
                  </div>
                </div>

                <div className="project-footer">
                  <div className="project-tech-pills">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn-inspect-project"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INTERACTIVE TERMINAL PLAYGROUND */}
        <section className="section-wrap" id="terminal">
          <div className="section-header">
            <span className="section-label">02 // Interactive Console</span>
            <h2 className="section-title">Query the Engineering Environment</h2>
            <p className="section-desc">
              Interact with the simulated terminal console to explore technical capabilities, research notes,
              and academic milestones in a developer-first environment.
            </p>
          </div>

          <TerminalPlayground />
        </section>

        {/* TECHNICAL FOUNDATIONS & CAPABILITIES */}
        <section className="section-wrap" id="capabilities">
          <div className="section-header">
            <span className="section-label">03 // Technical Matrix</span>
            <h2 className="section-title">Foundations, Toolchains & Competencies</h2>
            <p className="section-desc">
              Structured capabilities grounded in computing fundamentals, systems architecture, and rapid
              technological adoption.
            </p>
          </div>

          <div className="capabilities-bento">
            {skillCategories.map((cat, idx) => (
              <div key={cat.title} className="capability-card">
                <div className="capability-card-head">
                  <div className="capability-icon-wrap">
                    {idx === 0 && <Code2 size={22} />}
                    {idx === 1 && <Brain size={22} />}
                    {idx === 2 && <Terminal size={22} />}
                    {idx === 3 && <ShieldCheck size={22} />}
                  </div>
                  <div className="capability-title-group">
                    <h3>{cat.title}</h3>
                    <p>{cat.subtitle}</p>
                  </div>
                </div>

                <div className="capability-items-list">
                  {cat.items.map((item) => (
                    <div key={item.name} className="capability-item-row">
                      <div className="cap-item-left">
                        <span className="cap-item-name">{item.name}</span>
                        <span className="cap-item-tag">{item.tag}</span>
                      </div>
                      <span className="cap-item-level">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC PATHWAY & TIMELINE */}
        <section className="section-wrap" id="education">
          <div className="section-header">
            <span className="section-label">04 // Academic Roadmap</span>
            <h2 className="section-title">Education & Engineering Milestones</h2>
            <p className="section-desc">
              A continuous trajectory merging formal British computing qualifications with forward-looking AI degree specializations.
            </p>
          </div>

          <div className="timeline-track">
            {education.map((item) => (
              <div key={item.degree} className="timeline-entry">
                <div className="timeline-node">
                  <GraduationCap size={20} />
                </div>
                <div className="timeline-content-card">
                  <div className="timeline-period-badge">{item.period}</div>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-desc">{item.description}</p>

                  <ul className="timeline-highlights">
                    {item.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VERIFIED CERTIFICATIONS */}
        <section className="section-wrap" id="certifications">
          <div className="section-header">
            <span className="section-label">05 // Verified Credentials</span>
            <h2 className="section-title">Industry & Technical Certifications</h2>
            <p className="section-desc">
              Verified problem-solving assessments across algorithmic Python and relational database querying.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div>
                  <div className="cert-head">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span style={{ fontSize: '12px', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-id-tag">Credential ID: {cert.credentialId}</p>

                  <div className="cert-skills-wrap">
                    {cert.skills.map((s) => (
                      <span key={s} className="tech-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link-btn"
                >
                  <span>Verify Credential</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT & COLLABORATION HUB */}
        <section className="section-wrap" id="contact">
          <div className="section-header">
            <span className="section-label">06 // Connect</span>
            <h2 className="section-title">Initiate Collaboration</h2>
            <p className="section-desc">
              Interested in discussing an AI Engineering internship, research role, or technical collaboration?
              Reach out directly.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <div>
                <span className="project-badge">DIRECT CHANNEL</span>
                <a className="contact-direct-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Always eager to connect with engineering mentors, AI teams, and forward-thinking builders.
                  Based in {profile.location}, open to remote and on-site opportunities.
                </p>

                <button type="button" className="btn btn-secondary" onClick={handleCopyEmail}>
                  <Copy size={15} /> Copy Email Address
                </button>
              </div>

              <div className="contact-socials-row">
                <a href={profile.github} target="_blank" rel="noreferrer" className="social-btn">
                  <Github size={16} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@company.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Inquiry</label>
                  <textarea
                    className="form-textarea"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Describe the opportunity or project..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={15} /> Transmit Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <strong style={{ fontSize: '18px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {profile.fullName}
              </strong>
              <p style={{ color: 'var(--text-dim)', fontSize: '13px', marginTop: '4px' }}>
                Aspiring AI Engineer • Computing Professional
              </p>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="#home" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Top ↑
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 {profile.fullName}. Built with precision, React & TypeScript.</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)' }}>
              SYSTEM STATUS // 100% OPERATIONAL
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
