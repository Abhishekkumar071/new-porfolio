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
  const [note, setNote] = useState('Press “Send ' + inr(AMOUNT) + '” or click “Auto-Demo” to watch.')
  const [autoSimulating, setAutoSimulating] = useState(false)

  const server = useRef({ seen: new Map(), count: 0, rowId: 0 })

  const post = (key, isRetry) => {
    const s = server.current
    const id = ++s.rowId

    if (checkKey && s.seen.has(key)) {
      const ref = s.seen.get(key)
      setRows((r) => [...r, { id, kind: 'replay', ref, key }])
      setResponse({ ok: true, status: '200 OK', text: `Key already seen. Returned ${ref}. Nothing charged.` })
      setNote('The server recognized the unique key and safely sent back the original receipt. Balance stayed safe!')
      return
    }

    s.count += 1
    const ref = 'TXN-' + String(s.count).padStart(4, '0')
    if (checkKey) s.seen.set(key, ref)
    setRows((r) => [...r, { id, kind: 'debit', ref, key }])
    setResponse({ ok: !isRetry, status: '201 Created', text: `Created ${ref}. Charged ${inr(AMOUNT)}.` })
    setNote(
      isRetry
        ? 'Without key checking, the retry was treated as a brand-new payment. The customer got charged twice!'
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
    setAutoSimulating(false)
    setNote('Press “Send ' + inr(AMOUNT) + '” or click “Auto-Demo” to watch.')
  }

  // Automatic simulation that runs the scenario automatically
  const runAutoDemo = () => {
    reset()
    setAutoSimulating(true)
    setCheckKey(true)

    const key = newKey()
    setRequest({ key })

    setTimeout(() => {
      post(key, false)
      setTimeout(() => {
        post(key, true)
        setAutoSimulating(false)
      }, 1400)
    }, 400)
  }

  // Pure derived state
  const ledger = rows.map((r, i) => {
    const debitsUpToHere = rows.slice(0, i + 1).filter((x) => x.kind === 'debit').length
    return { ...r, balance: START_BALANCE - debitsUpToHere * AMOUNT }
  })
  const totalDebits = rows.filter((r) => r.kind === 'debit').length
  const balance = START_BALANCE - totalDebits * AMOUNT
  const debitKeys = rows.filter((r) => r.kind === 'debit').map((r) => r.key)
  const chargedTwice = debitKeys.length !== new Set(debitKeys).size
  const blocked = rows.some((r) => r.kind === 'replay')
  const retryPending = request !== null && rows.length > 0 && !chargedTwice && !blocked

  return (
    <section className="pay" aria-labelledby="pay-title">
      <div className="pay__bar">
        <div>
          <span className="pay__tag">Interactive Backend Simulation</span>
          <h2 id="pay-title" className="pay__title">
            Post a payment, then retry it
          </h2>
        </div>
        <div className="pay__bar-controls">
          <button
            type="button"
            className={`btn-auto-sim ${autoSimulating ? 'btn-auto-sim--active' : ''}`}
            onClick={runAutoDemo}
            disabled={autoSimulating}
          >
            <span className="auto-toggle__dot" />
            <span>{autoSimulating ? 'Simulating Retry…' : 'Watch Auto-Demo ▶'}</span>
          </button>

          <label className="switch">
            <input
              type="checkbox"
              role="switch"
              checked={checkKey}
              onChange={(e) => setCheckKey(e.target.checked)}
            />
            <span className="switch__track" aria-hidden="true" />
            <span>Check idempotency key</span>
          </label>
        </div>
      </div>

      <div className="pay__body">
        <div className="pay__req">
          <p className="pay__label">What the client sends</p>
          <pre className="code">
            <span>POST /transfers</span>
            {'\n'}
            <span>Idempotency-Key: {request ? request.key : '(created on send)'}</span>
            {'\n'}
            <span>{`{ "to": "Savings_9034", "amount": ${AMOUNT} }`}</span>
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
              <p className="pay__label">Account 4821</p>
              <p className="pay__balance">{inr(balance)}</p>
            </div>
            {chargedTwice ? (
              <span className="stamp stamp--bad">Charged twice</span>
            ) : blocked ? (
              <span className="stamp stamp--good">Duplicate blocked</span>
            ) : null}
          </div>

          {ledger.length === 0 ? (
            <p className="pay__empty">No transactions yet. Click "Send" or "Watch Auto-Demo".</p>
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
                    <td>{r.kind === 'debit' ? 'Payment to 9034' : 'Duplicate retry neutralized'}</td>
                    <td className="num">{r.kind === 'debit' ? inr(AMOUNT) : '₹0'}</td>
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
          <button type="button" className="btn btn--solid" onClick={send} disabled={autoSimulating}>
            Send {inr(AMOUNT)}
          </button>
          <button
            type="button"
            className={retryPending ? 'btn btn--mark' : 'btn'}
            onClick={retry}
            disabled={!request || autoSimulating}
          >
            Retry Last Request
          </button>
          <button type="button" className="btn btn--quiet" onClick={reset}>
            Reset
          </button>
        </div>
        <p className="pay__note" aria-live="polite">
          {note}
        </p>
        <p className="pay__aside">
          This runs directly in your browser. In my Spring Boot backend project, a unique constraint on PostgreSQL
          does this exact job at scale.
        </p>
      </div>
    </section>
  )
}
