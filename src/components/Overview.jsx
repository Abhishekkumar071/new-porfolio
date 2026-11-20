import { PILLARS } from '../data.js'

export default function Overview() {
  return (
    <div className="overview">
      <div className="overview__lead">
        <p>
          I am a Software Engineer and Computer Science undergraduate specializing in Artificial Intelligence &amp;
          Machine Learning at NIET (CGPA 8.9). My engineering journey is anchored on three interdependent foundations:
          deterministic backend architecture, rigorous algorithmic problem solving, and human-supervised agentic AI.
        </p>
      </div>

      <div className="pillars-grid">
        {PILLARS.map((pillar) => (
          <div key={pillar.tag} className="pillar-card">
            <span className="pillar-card__tag">{pillar.tag}</span>
            <h3 className="pillar-card__title">{pillar.title}</h3>
            <p className="pillar-card__desc">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
