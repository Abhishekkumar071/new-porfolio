// Shared pieces for the ledger-style lists (ratings, work, experience).

export function EntriesHead({ labels }) {
  return (
    <div className="entries__head cols" aria-hidden="true">
      <span className="c-date">{labels[0]}</span>
      <span className="c-title">{labels[1]}</span>
      <span className="c-result">{labels[2]}</span>
    </div>
  )
}

export function StaticEntry({ date, title, sub, body, result, href }) {
  return (
    <div className="entry">
      <div className="entry__row cols">
        <span className="entry__date c-date">
          {href ? (
            <a className="link link--quiet" href={href} target="_blank" rel="noreferrer">
              {date}
            </a>
          ) : (
            date
          )}
        </span>
        <div className="c-title">
          <h3 className="entry__title">{title}</h3>
          {sub ? <span className="entry__sub">{sub}</span> : null}
          {body ? <p className="entry__body">{body}</p> : null}
        </div>
        <span className="entry__result c-result">{result}</span>
      </div>
    </div>
  )
}
