import './App.css'
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from './components/Button'
import { CertificationCard } from './components/CertificationCard'
import { Footer } from './components/Footer'
import { SectionHeading } from './components/SectionHeading'
import { SkillCard } from './components/SkillCard'
import { certifications, education, navItems, profile, projectPlaceholder, skillGroups } from './data/portfolio'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Niththeesh home"><span className="brand-mark">N</span><span>{profile.name}</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
        <Button href={`mailto:${profile.email}`} variant="secondary" className="header-cta"><Mail size={15} /> Let&apos;s connect</Button>
      </header>
      <main>
        <section className="hero section-wrap" id="home"><div className="hero-copy"><p className="eyebrow">AI ENGINEERING / COMPUTING</p><h1>Building a future<br /><em>with intelligence.</em></h1><p className="hero-intro">I&apos;m {profile.name.toLowerCase()}, an aspiring AI Engineer and Computing professional focused on learning, solving problems, and creating meaningful technology.</p><div className="hero-actions"><Button href="#about">Explore my work <ArrowDown size={16} /></Button><Button href={profile.resumePath} variant="secondary"><Download size={16} /> Download résumé</Button></div><div className="availability"><span className="status-dot" /> Based in {profile.location}</div></div><div className="hero-visual" aria-label={`${profile.name} profile photo`}><img className="profile-photo" src="/profile.png" alt={`${profile.name} profile`} /></div></section>
        <section className="section-wrap about-section" id="about"><SectionHeading eyebrow="01 / Profile" title="A thoughtful beginning to a technical journey." /><div className="about-grid"><p className="lead-copy">I am developing the technical foundation and professional mindset to grow into a capable AI Engineer. My current path combines formal computing education with practical skills across programming, tools, data, and collaboration.</p><div className="fact-list"><div><span>01</span><p>Learning with intent</p></div><div><span>02</span><p>Grounded in detail</p></div><div><span>03</span><p>Ready for what&apos;s next</p></div></div></div></section>
        <section className="section-wrap education-section" id="education"><SectionHeading eyebrow="02 / Education" title="The foundations I am building on." /><div className="timeline">{education.map((item) => <article className="timeline-item" key={item.degree}><span className="timeline-period">{item.period}</span><div className="timeline-marker" /><div><h3>{item.degree}</h3><p className="institution">{item.institution}</p><p>{item.description}</p></div></article>)}</div></section>
        <section className="section-wrap skills-section" id="skills"><SectionHeading eyebrow="03 / Capabilities" title="Tools, technologies, and working strengths." /><div className="skills-grid">{skillGroups.map((group) => <SkillCard key={group.title} title={group.title} subtitle={group.items.join('  •  ')} />)}</div></section>
        <section className="section-wrap certification-section" id="certifications"><SectionHeading eyebrow="04 / Certifications" title="Proof of continuous learning." /><div className="cert-grid">{certifications.map((item) => <CertificationCard key={item.title} {...item} />)}</div></section>
        <section className="section-wrap project-section" id="projects"><div className="project-panel"><div><p className="eyebrow">05 / Selected work</p><h2>{projectPlaceholder.title}</h2><p>{projectPlaceholder.description}</p></div><div className="project-meta"><span>{projectPlaceholder.category}</span><span>{projectPlaceholder.year}</span><ArrowUpRight size={24} /></div></div></section>
        <section className="section-wrap contact-section" id="contact"><p className="eyebrow">06 / Contact</p><h2>Let&apos;s make something<br /><em>worth remembering.</em></h2><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22} /></a><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></section>
      </main><Footer />
    </div>
  )
}

export default App
