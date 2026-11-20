import { useState } from 'react'
import { PROFILE, WEB3FORMS_KEY } from '../data.js'
import { ExternalIcon } from './Icons.jsx'

export default function Contact() {
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', `Portfolio message from ${data.get('name')}`)
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        form.reset()
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact">
      <form className="form" onSubmit={submit}>
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Your email</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="c-msg">Message</label>
          <textarea id="c-msg" name="message" rows={5} required />
        </div>
        <input type="checkbox" name="botcheck" className="form__trap" tabIndex={-1} autoComplete="off" />
        <div className="form__row">
          <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className="form__status" role="status">
            {status === 'sent' ? 'Message sent. I will reply to the email you gave.' : null}
            {status === 'error'
              ? `The message did not send. Check your connection and try again, or email ${PROFILE.email}.`
              : null}
          </p>
        </div>
      </form>

      <ul className="contact__links">
        <li>
          <a className="link" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </li>
        {PROFILE.phone ? (
          <li>
            <a className="link" href={`tel:${PROFILE.phone}`}>
              {PROFILE.phone}
            </a>
          </li>
        ) : null}
        {[
          ['GitHub', PROFILE.links.github],
          ['LinkedIn', PROFILE.links.linkedin],
          ['LeetCode', PROFILE.links.leetcode],
          ['Codeforces', PROFILE.links.codeforces],
          ['Codolio Portfolio', PROFILE.links.codolio],
          ['GeeksforGeeks', PROFILE.links.gfg],
        ].map(([label, href]) => (
          <li key={label}>
            <a className="link" href={href} target="_blank" rel="noreferrer">
              {label} <ExternalIcon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
