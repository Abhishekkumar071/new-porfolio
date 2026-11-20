import { DSA_ACHIEVEMENTS, PROFILE } from '../data.js'
import { ExternalIcon } from './Icons.jsx'

export default function ProblemSolving() {
  return (
    <div className="dsa-section">
      <div className="dsa-spotlight">
        <div className="dsa-spotlight__content">
          <div className="dsa-spotlight__badge">Contest Achievement 🥈</div>
          <h3 className="dsa-spotlight__title">2nd Place — Code Storm Hackathon (NIET)</h3>
          <p className="dsa-spotlight__team">
            Team <strong>OUR RAK</strong> • Algorithmic Speed, Optimization &amp; Precision
          </p>
          <p className="dsa-spotlight__text">
            Competed in high-pressure algorithmic rounds focused on time and space complexity optimizations,
            graph traversal algorithms, and clean, bug-free implementations under tight contest deadlines.
          </p>
          <div className="dsa-spotlight__links">
            <a
              className="link"
              href="/certification/2nd possition in dsa hackthon at niet.jpg"
              target="_blank"
              rel="noreferrer"
            >
              View Podium Certificate <ExternalIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="dsa-stats-grid">
        {DSA_ACHIEVEMENTS.map((item) => (
          <div key={item.title} className="dsa-stat-card">
            <div className="dsa-stat-card__top">
              <span className="dsa-stat-card__cat">{item.category}</span>
              <span className="dsa-stat-card__badge">{item.badge}</span>
            </div>
            <h4 className="dsa-stat-card__title">
              {item.href ? (
                <a className="link link--quiet" href={item.href} target="_blank" rel="noreferrer">
                  {item.title} <ExternalIcon />
                </a>
              ) : (
                item.title
              )}
            </h4>
            <p className="dsa-stat-card__sub">{item.subtitle}</p>
            <p className="dsa-stat-card__detail">{item.detail}</p>
            <div className="dsa-stat-card__result">{item.result}</div>
          </div>
        ))}
      </div>

      <div className="dsa-profiles-bar">
        <span className="dsa-profiles-bar__label">Explore Live Profiles:</span>
        <div className="dsa-profiles-bar__links">
          <a className="link" href={PROFILE.links.leetcode} target="_blank" rel="noreferrer">
            LeetCode (1758) <ExternalIcon />
          </a>
          <a className="link" href={PROFILE.links.codeforces} target="_blank" rel="noreferrer">
            Codeforces (Specialist) <ExternalIcon />
          </a>
          <a className="link" href={PROFILE.links.gfg} target="_blank" rel="noreferrer">
            GeeksforGeeks <ExternalIcon />
          </a>
          <a className="link" href={PROFILE.links.codolio} target="_blank" rel="noreferrer">
            Codolio Unified Portfolio <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
