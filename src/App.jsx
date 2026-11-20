import { useEffect, useRef, useState } from 'react'
import { PROFILE, STATS, EXPERIENCE, STACK_GROUPS } from './data.js'
import { useTheme } from './hooks/useTheme.js'
import PaymentDemo from './components/PaymentDemo.jsx'
import Overview from './components/Overview.jsx'
import ProblemSolving from './components/ProblemSolving.jsx'
import Work from './components/Work.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import AnimatedCounter from './components/AnimatedCounter.jsx'
import { EntriesHead, StaticEntry } from './components/Entries.jsx'
import { SearchIcon, SunIcon, MoonIcon, DownloadIcon } from './components/Icons.jsx'
import MouseTrail from './components/MouseTrail.jsx'

const YEAR = new Date().getFullYear()
const IS_MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

const NAV = [
  ['Overview', 'overview'],
  ['Problem Solving', 'problem-solving'],
  ['Projects', 'work'],
  ['Experience', 'experience'],
  ['Stack', 'stack'],
  ['Credentials', 'certifications'],
  ['Contact', 'contact'],
]

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [toast, setToast] = useState('')
  const toastTimer = useRef(0)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const showToast = (text) => {
    window.clearTimeout(toastTimer.current)
    setToast(text)
    toastTimer.current = window.setTimeout(() => setToast(''), 2600)
  }

  const go = (id) => document.getElementById(id)?.scrollIntoView()
  const open = (href) => window.open(href, '_blank', 'noopener')

  const copyEmail = () => {
    if (!navigator.clipboard) {
      showToast(`Copy blocked. My email is ${PROFILE.email}`)
      return
    }
    navigator.clipboard
      .writeText(PROFILE.email)
      .then(() => showToast('Email copied to clipboard!'))
      .catch(() => showToast(`Copy blocked. My email is ${PROFILE.email}`))
  }

  const actions = [
    { id: 'go-top', group: 'Go to', label: 'Top / Intro', run: () => go('top') },
    { id: 'go-overview', group: 'Go to', label: 'Overview & Principles', run: () => go('overview') },
    { id: 'go-dsa', group: 'Go to', label: 'Problem Solving & Hackathons', run: () => go('problem-solving') },
    { id: 'go-work', group: 'Go to', label: 'Systems & AI Projects', run: () => go('work') },
    { id: 'go-exp', group: 'Go to', label: 'Experience & Internships', run: () => go('experience') },
    { id: 'go-stack', group: 'Go to', label: 'Technical Stack', run: () => go('stack') },
    { id: 'go-certs', group: 'Go to', label: 'Certifications & Proofs', run: () => go('certifications') },
    { id: 'go-contact', group: 'Go to', label: 'Contact', run: () => go('contact') },
    { id: 'o-resume', group: 'Open', label: 'Download Resume (PDF)', run: () => open(PROFILE.resume) },
    { id: 'o-github', group: 'Open', label: 'GitHub Profile', run: () => open(PROFILE.links.github) },
    { id: 'o-linkedin', group: 'Open', label: 'LinkedIn Profile', run: () => open(PROFILE.links.linkedin) },
    { id: 'o-leetcode', group: 'Open', label: 'LeetCode Profile (1,758)', run: () => open(PROFILE.links.leetcode) },
    { id: 'o-cf', group: 'Open', label: 'Codeforces Profile (Specialist)', run: () => open(PROFILE.links.codeforces) },
    { id: 'o-codolio', group: 'Open', label: 'Codolio Portfolio', run: () => open(PROFILE.links.codolio) },
    { id: 'o-gfg', group: 'Open', label: 'GeeksforGeeks Profile', run: () => open(PROFILE.links.gfg) },
    { id: 'd-email', group: 'Action', label: 'Copy Email Address', run: copyEmail },
    {
      id: 'd-theme',
      group: 'Action',
      label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
      run: toggleTheme,
    },
  ]

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      {/* Sticky Top Header */}
      <header className="top">
        <div className="top__in">
          <a className="top__mark" href="#top" aria-label="Abhishek Kumar, back to top">
            AK
          </a>
          <div className="top__right">
            <nav className="top__nav" aria-label="Sections">
              {NAV.map(([label, id]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="top__tools">
              <button
                type="button"
                className="tool"
                aria-label="Open quick actions"
                onClick={() => setPaletteOpen(true)}
              >
                <SearchIcon />
                <span className="tool__text">Quick actions</span>
                <kbd>{IS_MAC ? '⌘K' : 'Ctrl K'}</kbd>
              </button>
              <button
                type="button"
                className="tool tool--icon"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="sheet">
        <main id="main">
          {/* Hero Section */}
          <section className="block block--hero" id="top">
            <aside className="hero__margin">
              <img className="hero__photo" src="/ProfileP.jpg" alt="Abhishek Kumar" width="320" height="360" />
              <div className="status-badge">
                <span className="status-badge__dot" />
                <span className="status-badge__text">Open to SDE Roles</span>
              </div>
            </aside>

            <div className="block__body">
              <div className="hero__intro-tag">
                <span>👋 Welcome to my engineering workspace</span>
              </div>

              <h1 className="hero__name">{PROFILE.name}</h1>
              <p className="hero__title">{PROFILE.role}</p>

              <p className="hero__lede">
                I build reliable backend systems that don’t break when requests retry, solve algorithmic puzzles under
                pressure, and create practical AI workflows with human checkpoints.
              </p>

              <p className="hero__meta">
                Computer Science student (AI &amp; ML) at NIET, Greater Noida. Writing Java &amp; Spring Boot for
                solid enterprise backends, Python for AI/ML, and practicing DSA daily on LeetCode &amp; Codeforces.
              </p>

              {/* Animated Stats Strip */}
              <div className="stats-strip">
                {STATS.map((s) => (
                  <div key={s.label} className="stat-item">
                    <div className="stat-item__num">
                      <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </div>
                    <div className="stat-item__label">{s.label}</div>
                    <div className="stat-item__note">{s.note}</div>
                  </div>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="hero__cta">
                <a className="btn btn--solid" href={PROFILE.resume} download="Abhishek_Kumar_Resume.pdf">
                  <DownloadIcon /> Download Resume
                </a>
                <button type="button" className="btn" onClick={copyEmail}>
                  Copy Email
                </button>
                <a className="btn" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="btn" href={PROFILE.links.leetcode} target="_blank" rel="noreferrer">
                  LeetCode
                </a>
              </div>

              {/* Interactive Idempotency Simulator */}
              <PaymentDemo />
            </div>
          </section>

          {/* Overview & Engineering Philosophy */}
          <section className="block" id="overview" aria-labelledby="h-overview">
            <h2 className="block__title" id="h-overview">
              Overview
            </h2>
            <div className="block__body">
              <Overview />
            </div>
          </section>

          {/* Problem Solving & DSA */}
          <section className="block" id="problem-solving" aria-labelledby="h-dsa">
            <h2 className="block__title" id="h-dsa">
              Problem Solving
            </h2>
            <div className="block__body">
              <ProblemSolving />
            </div>
          </section>

          {/* Selected Projects */}
          <section className="block" id="work" aria-labelledby="h-work">
            <h2 className="block__title" id="h-work">
              Projects
            </h2>
            <div className="block__body">
              <Work />
            </div>
          </section>

          {/* Real Work Experience */}
          <section className="block" id="experience" aria-labelledby="h-exp">
            <h2 className="block__title" id="h-exp">
              Experience
            </h2>
            <div className="block__body">
              <div className="entries">
                <EntriesHead labels={['When', 'Role & Organization', 'Impact / Tech']} />
                {EXPERIENCE.map((x) => (
                  <StaticEntry key={x.title} {...x} />
                ))}
              </div>
            </div>
          </section>

          {/* Structured Tech Stack */}
          <section className="block" id="stack" aria-labelledby="h-stack">
            <h2 className="block__title" id="h-stack">
              Stack
            </h2>
            <div className="block__body">
              <div className="stack-groups">
                {STACK_GROUPS.map((group) => (
                  <div key={group.category} className="stack-card">
                    <h3 className="stack-card__title">{group.category}</h3>
                    <div className="stack-chips">
                      {group.items.map((item) => (
                        <span key={item} className="stack-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications & Proofs */}
          <section className="block" id="certifications" aria-labelledby="h-certs">
            <h2 className="block__title" id="h-certs">
              Credentials
            </h2>
            <div className="block__body">
              <Certifications />
            </div>
          </section>

          {/* Contact Section */}
          <section className="block" id="contact" aria-labelledby="h-contact">
            <h2 className="block__title" id="h-contact">
              Contact
            </h2>
            <div className="block__body">
              <p className="contact__lead">
                Got a question, an interesting engineering challenge, or an open role on your team? Send me a quick
                note below and I will get back to you directly.
              </p>
              <Contact />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="foot">
          <div className="block__body foot__in">
            <p>© {YEAR} {PROFILE.name} • Built with React &amp; Vite</p>
            <div className="foot__links">
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={PROFILE.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
              <a href={PROFILE.links.codeforces} target="_blank" rel="noreferrer">Codeforces</a>
              <a href={PROFILE.links.codolio} target="_blank" rel="noreferrer">Codolio</a>
            </div>
          </div>
        </footer>
      </div>

      {paletteOpen ? <CommandPalette items={actions} onClose={() => setPaletteOpen(false)} /> : null}

      <div className="toast" role="status">
        {toast}
      </div>
      <MouseTrail />
    </>
  )
}
