import { useState } from 'react'
import { PROJECTS, FLOW } from '../data.js'
import PipelineExplorer from './PipelineExplorer.jsx'
import { EntriesHead } from './Entries.jsx'
import { ExternalIcon } from './Icons.jsx'

function Project({ p, open, onToggle }) {
  const panelId = `detail-${p.id}`
  const hasMedia = Boolean(p.image)

  return (
    <div className="entry">
      <button
        type="button"
        className="entry__row entry__btn cols"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="entry__date c-date">{p.date}</span>
        <span className="c-title">
          <span className="entry__title">{p.title}</span>
          <span className="entry__sub">{p.sub}</span>
        </span>
        <span className="entry__result c-result">{p.result}</span>
        <span className="entry__toggle c-toggle" aria-hidden="true" />
      </button>

      <div className="detail" data-open={open} id={panelId} role="region" aria-label={`${p.title} details`} inert={!open}>
        <div className="detail__clip">
          <div className={hasMedia ? 'detail__body detail__body--media' : 'detail__body'}>
            <div className="detail__text">
              <p className="detail__summary">{p.summary}</p>
              <ul className="detail__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <p className="detail__stack">
                <span>Built with</span> {p.stack}
              </p>
              {p.links.length > 0 ? (
                <p className="detail__links">
                  {p.links.map((l) => (
                    <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ExternalIcon />
                    </a>
                  ))}
                </p>
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

  return (
    <div className="entries">
      <EntriesHead labels={['Date', 'Project', 'Result']} />
      {PROJECTS.map((p) => (
        <Project key={p.id} p={p} open={openId === p.id} onToggle={() => setOpenId(openId === p.id ? null : p.id)} />
      ))}
    </div>
  )
}
