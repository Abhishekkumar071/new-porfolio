import { useState } from 'react'
import { EXPERIENCE } from '../data.js'
import { ExternalIcon } from './Icons.jsx'

export default function ExperienceCards() {
  // Start with InChi open by default so recruiters immediately see full engineering depth
  const [expanded, setExpanded] = useState({
    inchi: true,
    insurai: false,
  })

  const toggle = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const allExpanded = Object.values(expanded).every(Boolean)
  const toggleAll = () => {
    const nextState = !allExpanded
    const next = {}
    EXPERIENCE.forEach((item) => {
      next[item.id] = nextState
    })
    setExpanded(next)
  }

  return (
    <div className="exp-section">
      <div className="exp-section__topbar">
        <span className="exp-section__count">
          Showing <strong>{EXPERIENCE.length} Industry Roles</strong> (Interactive Expandable Cards)
        </span>
        <button
          type="button"
          onClick={toggleAll}
          className="btn-exp-toggle-all"
          aria-label={allExpanded ? 'Collapse all experience cards' : 'Extend all experience cards'}
        >
          {allExpanded ? 'Collapse All Cards ▴' : 'Extend All Cards ▾'}
        </button>
      </div>

      <div className="exp-cards-list">
        {EXPERIENCE.map((exp) => {
          const isOpen = Boolean(expanded[exp.id])
          const panelId = `exp-detail-${exp.id}`

          return (
            <article
              key={exp.id}
              className={`exp-card ${isOpen ? 'exp-card--open' : 'exp-card--closed'}`}
            >
              {/* Clickable Header */}
              <button
                type="button"
                className="exp-card__header"
                onClick={() => toggle(exp.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className="exp-card__header-main">
                  <div className="exp-card__meta">
                    <span className="exp-card__date">{exp.date}</span>
                    {exp.isCurrent ? (
                      <span className="exp-card__badge-current">
                        <span className="status-dot status-dot--live" />
                        Current Role
                      </span>
                    ) : null}
                    <span className="exp-card__org">{exp.sub}</span>
                  </div>

                  <h3 className="exp-card__title">{exp.title}</h3>

                  {!isOpen && exp.tagline ? (
                    <p className="exp-card__teaser">{exp.tagline}</p>
                  ) : null}
                </div>

                <div className="exp-card__header-actions">
                  <span className="exp-card__result-pill">{exp.result}</span>
                  <div className="exp-card__toggle-indicator" aria-hidden="true">
                    <span className="exp-card__toggle-label">
                      {isOpen ? 'Collapse' : 'Extend'}
                    </span>
                    <span className={`exp-card__chevron ${isOpen ? 'exp-card__chevron--open' : ''}`}>
                      ▾
                    </span>
                  </div>
                </div>
              </button>

              {/* Extended Details Panel */}
              <div
                id={panelId}
                className="detail"
                data-open={isOpen}
                role="region"
                aria-label={`${exp.title} full details`}
                inert={!isOpen ? '' : undefined}
              >
                <div className="detail__clip">
                  <div className="exp-card__body">
                    {/* Summary Context */}
                    <div className="exp-card__block">
                      <h4 className="exp-card__section-title">Overview & Architecture</h4>
                      <p className="exp-card__summary">{exp.summary || exp.body}</p>
                    </div>

                    {/* Bulleted Technical Responsibilities */}
                    {exp.responsibilities && exp.responsibilities.length > 0 ? (
                      <div className="exp-card__block">
                        <h4 className="exp-card__section-title">Key Engineering Ownership &amp; Impact</h4>
                        <ul className="exp-card__points">
                          {exp.responsibilities.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {/* Tech Stack Chips */}
                    {exp.stackList && exp.stackList.length > 0 ? (
                      <div className="exp-card__block">
                        <h4 className="exp-card__section-title">Technologies & Core Tools</h4>
                        <div className="exp-card__stack-chips">
                          {exp.stackList.map((tech) => (
                            <span key={tech} className="exp-card__chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Repository Links */}
                    {exp.links && exp.links.length > 0 ? (
                      <div className="exp-card__footer">
                        {exp.links.map((link) => (
                          <a
                            key={link.href}
                            className="btn btn--solid btn--small"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label} <ExternalIcon />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
