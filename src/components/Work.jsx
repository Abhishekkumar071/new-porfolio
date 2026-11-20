import { useState } from 'react'
import { PROJECTS, FLOW } from '../data.js'
import PipelineExplorer from './PipelineExplorer.jsx'
import { EntriesHead } from './Entries.jsx'
import { ExternalIcon } from './Icons.jsx'

const CATEGORIES = ['All', 'Backend Systems', 'Practical AI', 'Full-Stack & Cloud']

function Project({ p, open, onToggle }) {
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
          <div className={hasMedia ? 'detail__body detail__body--media' : 'detail__body'}>
            <div className="detail__text">
              <div className="detail__section">
                <h4 className="detail__heading">The Problem</h4>
                <p className="detail__summary">{p.summary}</p>
              </div>

              <div className="detail__section">
                <h4 className="detail__heading">What I Built</h4>
                <ul className="detail__points">
                  {p.whatIBuilt.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>

              <p className="detail__stack">
                <span>Built with:</span> {p.stack}
              </p>

              {p.links && p.links.length > 0 ? (
                <div className="detail__links">
                  {p.links.map((l) => (
                    <a key={l.href} className="link btn btn--small" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ExternalIcon />
                    </a>
                  ))}
                </div>
              ) : null}
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
  )
}

export default function Work() {
  const [openId, setOpenId] = useState('talentpilot')
  const [activeCat, setActiveCat] = useState('All')

  const filtered =
    activeCat === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCat)

  return (
    <div>
      <div className="filter-bar" role="tablist" aria-label="Filter projects by domain">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCat === cat}
            className={`filter-btn ${activeCat === cat ? 'filter-btn--active' : ''}`}
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
