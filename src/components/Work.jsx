import { useState } from 'react'
import { PROJECTS, FLOW } from '../data.js'
import PipelineExplorer from './PipelineExplorer.jsx'
import { EntriesHead } from './Entries.jsx'
import { ExternalIcon } from './Icons.jsx'

const CATEGORIES = ['All', 'Backend Systems', 'Practical AI', 'Full-Stack & Cloud']
const CARD_VIEWS = [
  { id: 'problem', label: '1. The Problem 🎯' },
  { id: 'built', label: '2. What I Built 🛠️' },
  { id: 'impact', label: '3. Impact & Stack ⚡' },
]

function Project({ p, open, onToggle }) {
  const [activeTab, setActiveTab] = useState('problem')
  const panelId = `detail-${p.id}`
  const hasMedia = Boolean(p.image)

  return (
    <div className={`entry ${open ? 'entry--open' : ''}`}>
      <button
        type="button"
        className="entry__row entry__btn cols"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="entry__date c-date">
          <span className="entry__year">{p.date}</span>
          <span className="entry__cat-tag">{p.category}</span>
        </span>
        <span className="c-title">
          <span className="entry__title">{p.title}</span>
          <span className="entry__sub">{p.sub}</span>
        </span>
        <span className="entry__result c-result">{p.result}</span>
        <span className="entry__toggle c-toggle" aria-hidden="true" />
      </button>

      <div
        className="detail"
        data-open={open}
        id={panelId}
        role="region"
        aria-label={`${p.title} details`}
        inert={!open ? '' : undefined}
      >
        <div className="detail__clip">
          <div className="detail__card-wrapper">
            {/* 3-Way Card Switch */}
            <div className="card-switch" role="tablist" aria-label="3-part project view">
              {CARD_VIEWS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === v.id}
                  className={`card-switch__btn ${activeTab === v.id ? 'card-switch__btn--active' : ''}`}
                  onClick={() => setActiveTab(v.id)}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className={hasMedia ? 'detail__body detail__body--media' : 'detail__body'}>
              <div className="detail__text">
                {/* View 1: The Problem */}
                {activeTab === 'problem' && (
                  <div className="detail__tab-pane anim-fade">
                    <h4 className="detail__heading">The Real Problem</h4>
                    <p className="detail__summary">{p.summary}</p>
                    <p className="detail__tagline-box">
                      <strong>Core Challenge:</strong> {p.tagline}
                    </p>
                  </div>
                )}

                {/* View 2: What I Built */}
                {activeTab === 'built' && (
                  <div className="detail__tab-pane anim-fade">
                    <h4 className="detail__heading">What I Built &amp; Engineering Decisions</h4>
                    <ul className="detail__points">
                      {p.whatIBuilt.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* View 3: Real Impact & Tech */}
                {activeTab === 'impact' && (
                  <div className="detail__tab-pane anim-fade">
                    <h4 className="detail__heading">Measurable Outcome &amp; Tech Stack</h4>
                    <div className="impact-box">
                      <span className="impact-box__badge">Key Guarantee:</span>
                      <span className="impact-box__val">{p.result}</span>
                    </div>

                    <p className="detail__stack">
                      <span>Built with:</span> {p.stack}
                    </p>

                    {p.links && p.links.length > 0 ? (
                      <div className="detail__links">
                        {p.links.map((l) => (
                          <a key={l.href} className="link btn btn--solid btn--small" href={l.href} target="_blank" rel="noreferrer">
                            {l.label} <ExternalIcon />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}

                {/* Quick 3-way navigation shortcuts */}
                <div className="card-switch-dots">
                  {CARD_VIEWS.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      aria-label={v.label}
                      className={`switch-dot ${activeTab === v.id ? 'switch-dot--active' : ''}`}
                      onClick={() => setActiveTab(v.id)}
                    />
                  ))}
                </div>
              </div>

              {hasMedia ? (
                <figure className="shot">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" />
                </figure>
              ) : null}

              {p.flow ? (
                <div className="detail__flow">
                  <PipelineExplorer steps={FLOW} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work({ domainFilter = 'All' }) {
  const [openId, setOpenId] = useState('talentpilot')
  const [activeCat, setActiveCat] = useState('All')

  // Synchronize with external 3-way focus switcher if passed
  const currentCategory = domainFilter !== 'All' ? domainFilter : activeCat

  const filtered =
    currentCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === currentCategory)

  return (
    <div>
      <div className="filter-bar" role="tablist" aria-label="Filter projects by domain">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={currentCategory === cat}
            className={`filter-btn ${currentCategory === cat ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="entries">
        <EntriesHead labels={['Date / Domain', 'Project & Architecture', 'Key Guarantee']} />
        {filtered.map((p) => (
          <Project
            key={p.id}
            p={p}
            open={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
          />
        ))}
      </div>
    </div>
  )
}
