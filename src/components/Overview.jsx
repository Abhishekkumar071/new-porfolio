import { PILLARS } from '../data.js'

export default function Overview() {
  return (
    <div className="overview">
      <div className="overview__lead">
        <p>
          I am a Computer Science student at NIET (CGPA 8.9) who genuinely loves solving difficult engineering
          problems. I spend my time building backend systems that do not break under unexpected retries, practicing
          algorithms for speed, and exploring practical AI tools that assist people rather than making blind guesses.
        </p>
      </div>

      <div className="pillars-grid">
        {PILLARS.map((pillar) => (
          <div key={pillar.number} className="pillar-card">
            <div className="pillar-card__top">
              <span className="pillar-card__num">{pillar.number}</span>
              <span className="pillar-card__tag">{pillar.tag}</span>
            </div>
            <h3 className="pillar-card__title">{pillar.title}</h3>
            <p className="pillar-card__desc">{pillar.summary}</p>
            <div className="pillar-card__tech">
              <span className="pillar-card__tech-label">Core Tech:</span> {pillar.tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
