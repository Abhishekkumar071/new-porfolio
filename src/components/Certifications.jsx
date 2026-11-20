import { CERTIFICATIONS } from '../data.js'
import { ExternalIcon } from './Icons.jsx'

export default function Certifications() {
  return (
    <div className="certs-section">
      <div className="entries">
        <div className="entries__head cols" aria-hidden="true">
          <span className="c-date">Year / Issuer</span>
          <span className="c-title">Certification &amp; Scope</span>
          <span className="c-result">Verification</span>
        </div>

        {CERTIFICATIONS.map((cert) => (
          <div key={cert.title} className="entry">
            <div className="entry__row cols">
              <span className="entry__date c-date">
                <span className="entry__year">{cert.year}</span>
                <span className="entry__cat-tag">{cert.issuer}</span>
              </span>

              <div className="c-title">
                <h3 className="entry__title">{cert.title}</h3>
                <p className="entry__body">{cert.detail}</p>
                {cert.file ? (
                  <div className="entry__links-sub">
                    <a className="link link--quiet" href={cert.file} target="_blank" rel="noreferrer">
                      View Certificate Document <ExternalIcon />
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="c-result">
                <span className="cert-badge">{cert.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
