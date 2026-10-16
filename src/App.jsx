import { useEffect, useRef, useState } from 'react'
import { PROFILE, RATINGS, EXPERIENCE, STACK } from './data.js'
import { useTheme } from './hooks/useTheme.js'
import PaymentDemo from './components/PaymentDemo.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import { EntriesHead, StaticEntry } from './components/Entries.jsx'
import { SearchIcon, SunIcon, MoonIcon, DownloadIcon } from './components/Icons.jsx'
import MouseTrail from './components/MouseTrail.jsx'

const YEAR = new Date().getFullYear()
const IS_MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

const NAV = [
  ['Work', 'work'],
  ['Experience', 'experience'],
  ['Stack', 'stack'],
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
      .then(() => showToast('Email copied'))
      .catch(() => showToast(`Copy blocked. My email is ${PROFILE.email}`))
  }

  const actions = [
    { id: 'go-demo', group: 'Go to', label: 'Payment demo', run: () => go('top') },
    { id: 'go-ratings', group: 'Go to', label: 'Ratings', run: () => go('ratings') },
    { id: 'go-work', group: 'Go to', label: 'Work', run: () => go('work') },
    { id: 'go-exp', group: 'Go to', label: 'Experience', run: () => go('experience') },
    { id: 'go-stack', group: 'Go to', label: 'Stack', run: () => go('stack') },
    { id: 'go-contact', group: 'Go to', label: 'Contact', run: () => go('contact') },
    { id: 'o-resume', group: 'Open', label: 'Download resume', run: () => open(PROFILE.resume) },
    { id: 'o-github', group: 'Open', label: 'GitHub profile', run: () => open(PROFILE.links.github) },
    { id: 'o-linkedin', group: 'Open', label: 'LinkedIn profile', run: () => open(PROFILE.links.linkedin) },
    { id: 'o-leetcode', group: 'Open', label: 'LeetCode profile', run: () => open(PROFILE.links.leetcode) },
    { id: 'o-cf', group: 'Open', label: 'Codeforces profile', run: () => open(PROFILE.links.codeforces) },
    { id: 'd-email', group: 'Do', label: 'Copy my email address', run: copyEmail },
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
              <p>Open to SDE internships</p>
            </aside>
            <div className="block__body">
              <h1 className="hero__name">{PROFILE.name}</h1>
              <p className="hero__lede">
                I build backend systems that stay correct when requests are retried, and AI workflows that stop and
                ask a person before they act.
              </p>
              <p className="hero__meta">
                B.Tech student in Computer Science (AI &amp; ML) at NIET, {PROFILE.location}. Java and Spring Boot
                first, Python for the AI side.
              </p>
              <div className="hero__cta">
                <a className="btn btn--solid" href={PROFILE.resume} download="Abhishek_Kumar_Resume.pdf">
                  <DownloadIcon /> Download resume
                </a>
                <a className="btn" href={`mailto:${PROFILE.email}`}>
                  Email me
                </a>
                <a className="btn" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <PaymentDemo />
            </div>
          </section>

          <section className="block" id="ratings" aria-labelledby="h-ratings">
            <h2 className="block__title" id="h-ratings">
              Ratings
            </h2>
            <div className="block__body">
              <div className="entries">
                <EntriesHead labels={['Source', 'Detail', 'Result']} />
                {RATINGS.map((r) => (
                  <StaticEntry key={r.name} date={r.name} title={r.detail} result={r.result} href={r.href} />
                ))}
              </div>
            </div>
          </section>

          <section className="block" id="work" aria-labelledby="h-work">
            <h2 className="block__title" id="h-work">
              Work
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
                <EntriesHead labels={['When', 'What', 'Result']} />
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

          <section className="block" id="contact" aria-labelledby="h-contact">
            <h2 className="block__title" id="h-contact">
              Contact
            </h2>
            <div className="block__body">
              <p className="contact__lead">
                I am looking for an SDE or AI engineering internship. Tell me about the team and the problem, and I
                will reply to the email you give.
              </p>
              <Contact />
            </div>
          </section>
        </main>

        <footer className="foot">
          <p className="block__body">© {YEAR} {PROFILE.name}</p>
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
