import { DSA_CARDS, PROFILE } from '../data.js'
import AlgorithmVisualizer from './AlgorithmVisualizer.jsx'
import { ExternalIcon } from './Icons.jsx'

export default function ProblemSolving() {
  return (
    <div className="dsa-section">
      {/* Hackathon Podium Feature */}
      <div className="dsa-spotlight">
        <div className="dsa-spotlight__content">
          <div className="dsa-spotlight__badge">Hackathon Podium 🥈</div>
          <h3 className="dsa-spotlight__title">2nd Place — Code Storm Hackathon</h3>
          <p className="dsa-spotlight__team">
            NIET Campus • Team <strong>OUR RAK</strong> • Speed &amp; Algorithmic Optimization
          </p>
          <p className="dsa-spotlight__text">
            “DSA competitions aren’t just about coding—they’re about speed, strategy, and pushing boundaries!”
            Our team secured 2nd place by optimizing search and sorting logic, handling difficult edge cases, and
            writing clean, fast code under strict contest countdowns.
          </p>
          <div className="dsa-spotlight__links">
            <a
              className="link"
              href="/certification/2nd possition in dsa hackthon at niet.jpg"
              target="_blank"
              rel="noreferrer"
            >
              View Award Certificate <ExternalIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Visualizer Playground */}
      <AlgorithmVisualizer />

      {/* Verified Contest & Profile Cards */}
      <div className="dsa-stats-grid">
        {DSA_CARDS.map((item) => (
          <div key={item.id} className="dsa-stat-card">
            <div className="dsa-stat-card__top">
              <span className="dsa-stat-card__cat">{item.location}</span>
              <span className="dsa-stat-card__badge">{item.badge}</span>
            </div>

            <h4 className="dsa-stat-card__title">
              {item.actionHref ? (
                <a className="link link--quiet" href={item.actionHref} target="_blank" rel="noreferrer">
                  {item.title} <ExternalIcon />
                </a>
              ) : (
                item.title
              )}
            </h4>

            <p className="dsa-stat-card__detail">{item.description}</p>

            <div className="dsa-stat-card__bottom">
              <span className="dsa-stat-card__result">{item.highlight}</span>
              {item.actionHref ? (
                <a className="link link--small" href={item.actionHref} target="_blank" rel="noreferrer">
                  {item.actionText} →
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Live Profile Quick Bar */}
      <div className="dsa-profiles-bar">
        <span className="dsa-profiles-bar__label">Explore Live Profiles:</span>
        <div className="dsa-profiles-bar__links">
          <a className="link" href={PROFILE.links.leetcode} target="_blank" rel="noreferrer">
            LeetCode (1758) <ExternalIcon />
          </a>
          <a className="link" href={PROFILE.links.codeforces} target="_blank" rel="noreferrer">
            Codeforces (Specialist) <ExternalIcon />
          </a>
          <a className="link" href={PROFILE.links.codolio} target="_blank" rel="noreferrer">
            Codolio Verified Profile <ExternalIcon />
          </a>
          <a className="link" href={PROFILE.links.gfg} target="_blank" rel="noreferrer">
            GeeksforGeeks <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
