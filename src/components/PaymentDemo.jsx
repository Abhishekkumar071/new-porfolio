import { useRef, useState } from 'react'

const START_BALANCE = 10000
const AMOUNT = 2500

const inr = (n) => '₹' + n.toLocaleString('en-IN')
const newKey = () => 'pay_' + Math.random().toString(16).slice(2, 8)

const FIRST_NOTE =
  'The server posted the payment, but your connection dropped before the reply arrived. Did it go through? Retry the request to find out.'

export default function PaymentDemo() {
  const [checkKey, setCheckKey] = useState(true)
  const [rows, setRows] = useState([])
  const [request, setRequest] = useState(null)
  const [response, setResponse] = useState(null)
  const [note, setNote] = useState('Press “Send ' + inr(AMOUNT) + '” to post a payment.')

  // The “server”: remembers which keys it has already processed.
  const server = useRef({ seen: new Map(), count: 0, rowId: 0 })

  const post = (key, isRetry) => {
    const s = server.current
    const id = ++s.rowId

    if (checkKey && s.seen.has(key)) {
      const ref = s.seen.get(key)
      setRows((r) => [...r, { id, kind: 'replay', ref, key }])
      setResponse({ ok: true, status: '200 OK', text: `Key already seen. Returned ${ref}. Nothing charged.` })
      setNote('The server recognised the key and sent back the original result. Your balance did not change.')
      return
    }

    s.count += 1
    const ref = 'TXN-' + String(s.count).padStart(4, '0')
    if (checkKey) s.seen.set(key, ref)
    setRows((r) => [...r, { id, kind: 'debit', ref, key }])
    setResponse({ ok: !isRetry, status: '201 Created', text: `Created ${ref}. Charged ${inr(AMOUNT)}.` })
    setNote(
      isRetry
        ? 'The server is not checking keys, so the retry was treated as a brand-new payment. The customer paid twice.'
        : FIRST_NOTE,
    )
  }

  const send = () => {
    const key = newKey()
    setRequest({ key })
    post(key, false)
  }

  const retry = () => {
    if (request) post(request.key, true)
  }

  const reset = () => {
    server.current = { seen: new Map(), count: 0, rowId: 0 }
    setRows([])
    setRequest(null)
    setResponse(null)
    setNote('Press “Send ' + inr(AMOUNT) + '” to post a payment.')
  }

  // Everything below is derived from state, so it stays in sync.
  let balance = START_BALANCE
  const ledger = rows.map((r) => {
    if (r.kind === 'debit') balance -= AMOUNT
    return { ...r, balance }
  })
  const debitKeys = rows.filter((r) => r.kind === 'debit').map((r) => r.key)
  const chargedTwice = debitKeys.length !== new Set(debitKeys).size
  const blocked = rows.some((r) => r.kind === 'replay')
  const retryPending = request !== null && rows.length > 0 && !chargedTwice && !blocked

  return (
    <section className="pay" aria-labelledby="pay-title">
      <div className="pay__bar">
        <h2 id="pay-title" className="pay__title">
          Post a payment, then retry it
        </h2>
        <label className="switch">
          <input
            type="checkbox"
            role="switch"
            checked={checkKey}
            onChange={(e) => setCheckKey(e.target.checked)}
          />
          <span className="switch__track" aria-hidden="true" />
          <span>Server checks the idempotency key</span>
        </label>
      </div>

      <div className="pay__body">
        <div className="pay__req">
          <p className="pay__label">What the client sends</p>
          <pre className="code">
            <span>POST /transfers</span>
            {'\n'}
            <span>Idempotency-Key: {request ? request.key : '(created when you send)'}</span>
            {'\n'}
            <span>{`{ "to": "9034", "amount": ${AMOUNT} }`}</span>
          </pre>
          <p className="pay__label">What the server answers</p>
          <pre className="code">
            {response ? (
              <span className={response.ok ? 'code__ok' : 'code__bad'}>
                {response.status}
                {'\n'}
                {response.text}
              </span>
            ) : (
              <span className="code__idle">Waiting for a request.</span>
            )}
          </pre>
        </div>

        <div className="pay__ledger">
          <div className="pay__head">
            <div>
              <p className="pay__label">Savings 4821</p>
              <p className="pay__balance">{inr(balance)}</p>
            </div>
            {chargedTwice ? (
              <span className="stamp stamp--bad">Charged twice</span>
            ) : blocked ? (
              <span className="stamp stamp--good">Duplicate blocked</span>
            ) : null}
          </div>

          {ledger.length === 0 ? (
            <p className="pay__empty">No entries yet. Send a payment to post the first one.</p>
          ) : (
            <table className="ledger">
              <thead>
                <tr>
                  <th scope="col">Ref</th>
                  <th scope="col">Entry</th>
                  <th scope="col" className="num">Debit</th>
                  <th scope="col" className="num">Balance</th>
                </tr>
              </thead>
              <tbody>
                {ledger.map((r) => (
                  <tr key={r.id} className={r.kind === 'replay' ? 'ledger__replay' : ''}>
                    <td>{r.ref}</td>
                    <td>{r.kind === 'debit' ? 'Payment to 9034' : 'Retry matched the key'}</td>
                    <td className="num">{r.kind === 'debit' ? inr(AMOUNT) : '0'}</td>
                    <td className="num">{inr(r.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="pay__foot">
        <div className="pay__actions">
          <button type="button" className="btn btn--solid" onClick={send}>
            Send {inr(AMOUNT)}
          </button>
          <button
            type="button"
            className={retryPending ? 'btn btn--mark' : 'btn'}
            onClick={retry}
            disabled={!request}
          >
            Retry the last request
          </button>
          <button type="button" className="btn btn--quiet" onClick={reset}>
            Start over
          </button>
        </div>
        <p className="pay__note" aria-live="polite">
          {note}
        </p>
        <p className="pay__aside">
          This is a small simulation running in your browser. In my Spring Boot payment project, a database
          constraint on the request key does the same job.
        </p>
      </div>
    </section>
  )
}
