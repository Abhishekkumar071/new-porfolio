import { useEffect, useRef, useState } from 'react'
import { PROFILE, EXPERIENCE, STACK } from './data.js'
import { useTheme } from './hooks/useTheme.js'
import PaymentDemo from './components/PaymentDemo.jsx'
import Overview from './components/Overview.jsx'
import ProblemSolving from './components/ProblemSolving.jsx'
import Work from './components/Work.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import { EntriesHead, StaticEntry } from './components/Entries.jsx'
import { SearchIcon, SunIcon, MoonIcon, DownloadIcon } from './components/Icons.jsx'
import MouseTrail from './components/MouseTrail.jsx'

const YEAR = new Date().getFullYear()
const IS_MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

const NAV = [
  ['Overview', 'overview'],
  ['Problem Solving', 'problem-solving'],
  ['Systems & AI', 'work'],
  ['Experience', 'experience'],
  ['Stack', 'stack'],
  ['Certifications', 'certifications'],
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
      .then(() => showToast('Email copied to clipboard'))
      .catch(() => showToast(`Copy blocked. My email is ${PROFILE.email}`))
  }

  const actions = [
    { id: 'go-top', group: 'Go to', label: 'Top / Hero', run: () => go('top') },
    { id: 'go-overview', group: 'Go to', label: 'Engineering Overview', run: () => go('overview') },
    { id: 'go-dsa', group: 'Go to', label: 'Problem Solving (DSA)', run: () => go('problem-solving') },
    { id: 'go-work', group: 'Go to', label: 'Systems & AI Projects', run: () => go('work') },
    { id: 'go-exp', group: 'Go to', label: 'Professional Experience', run: () => go('experience') },
    { id: 'go-stack', group: 'Go to', label: 'Technical Stack', run: () => go('stack') },
    { id: 'go-certs', group: 'Go to', label: 'Certifications & Honors', run: () => go('certifications') },
    { id: 'go-contact', group: 'Go to', label: 'Contact', run: () => go('contact') },
    { id: 'o-resume', group: 'Open', label: 'Download Resume (PDF)', run: () => open(PROFILE.resume) },
    { id: 'o-github', group: 'Open', label: 'GitHub Profile', run: () => open(PROFILE.links.github) },
    { id: 'o-linkedin', group: 'Open', label: 'LinkedIn Profile', run: () => open(PROFILE.links.linkedin) },
    { id: 'o-leetcode', group: 'Open', label: 'LeetCode Profile (1758)', run: () => open(PROFILE.links.leetcode) },
    { id: 'o-cf', group: 'Open', label: 'Codeforces Profile (Specialist)', run: () => open(PROFILE.links.codeforces) },
    { id: 'o-gfg', group: 'Open', label: 'GeeksforGeeks Profile', run: () => open(PROFILE.links.gfg) },
    { id: 'o-codolio', group: 'Open', label: 'Codolio Profile', run: () => open(PROFILE.links.codolio) },
    { id: 'd-email', group: 'Do', label: 'Copy Email Address', run: copyEmail },
    {
      id: 'd-theme',
      group: 'Do',
      label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
      run: toggleTheme,
    },
  ]

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

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
          <section className="block block--hero" id="top">
            <aside className="hero__margin">
              <img className="hero__photo" src="/ProfileP.jpg" alt="Abhishek Kumar" width="320" height="360" />
              <p>Open to Software &amp; Backend Engineering roles</p>
            </aside>
            <div className="block__body">
              <div className="hero__badge-row">
                <span className="hero__pill">B.Tech CSE (AI &amp; ML) • CGPA 8.9</span>
                <span className="hero__pill">1,000+ Algorithmic Problems</span>
                <span className="hero__pill hero__pill--accent">2nd Place Code Storm 🥈</span>
              </div>
              <h1 className="hero__name">{PROFILE.name}</h1>
              <p className="hero__title">{PROFILE.title}</p>
              <p className="hero__lede">
                I build deterministic backend systems that guarantee correctness when network requests retry, solve
                complex algorithmic challenges at scale, and architect agentic AI workflows that keep humans in the loop.
              </p>
              <p className="hero__meta">
                Based in {PROFILE.location}. Core focus in Java &amp; Spring Boot, Python &amp; Django/FastAPI, Data
                Structures &amp; Algorithms, and Applied Generative AI.
              </p>
              <div className="hero__cta">
                <a className="btn btn--solid" href={PROFILE.resume} download="Abhishek_Kumar_Resume.pdf">
                  <DownloadIcon /> Download Resume
                </a>
                <a className="btn" href={`mailto:${PROFILE.email}`}>
                  Email Me
                </a>
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
              <PaymentDemo />
            </div>
          </section>

          <section className="block" id="overview" aria-labelledby="h-overview">
            <h2 className="block__title" id="h-overview">
              Overview
            </h2>
            <div className="block__body">
              <Overview />
            </div>
          </section>

          <section className="block" id="problem-solving" aria-labelledby="h-dsa">
            <h2 className="block__title" id="h-dsa">
              Problem Solving
            </h2>
            <div className="block__body">
              <ProblemSolving />
            </div>
          </section>

          <section className="block" id="work" aria-labelledby="h-work">
            <h2 className="block__title" id="h-work">
              Systems &amp; AI
            </h2>
            <div className="block__body">
              <Work />
            </div>
          </section>

          <section className="block" id="experience" aria-labelledby="h-exp">
            <h2 className="block__title" id="h-exp">
              Experience
            </h2>
            <div className="block__body">
              <div className="entries">
                <EntriesHead labels={['Timeline', 'Organization & Contribution', 'Focus / Tech']} />
                {EXPERIENCE.map((x) => (
                  <StaticEntry key={x.title} {...x} />
                ))}
              </div>
            </div>
          </section>

          <section className="block" id="stack" aria-labelledby="h-stack">
            <h2 className="block__title" id="h-stack">
              Stack
            </h2>
            <div className="block__body">
              <dl className="stack">
                {STACK.map((s) => (
                  <div key={s.label} className="stack__row">
                    <dt>{s.label}</dt>
                    <dd>{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="block" id="certifications" aria-labelledby="h-certs">
            <h2 className="block__title" id="h-certs">
              Credentials
            </h2>
            <div className="block__body">
              <Certifications />
            </div>
          </section>

          <section className="block" id="contact" aria-labelledby="h-contact">
            <h2 className="block__title" id="h-contact">
              Contact
            </h2>
            <div className="block__body">
              <p className="contact__lead">
                I am actively seeking Software Engineering, Backend, and AI Engineering roles. Whether you have an
                architectural challenge, an internship opening, or a full-time role, let's talk.
              </p>
              <Contact />
            </div>
          </section>
        </main>

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
