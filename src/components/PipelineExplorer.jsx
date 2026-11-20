import { useState, useEffect, useRef } from 'react'

export default function PipelineExplorer({ steps }) {
  const [active, setActive] = useState(0)
  const [autoTour, setAutoTour] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!autoTour) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 2400)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoTour, steps.length])

  const step = steps[active]

  return (
    <div className="flow">
      <div className="flow__header-bar">
        <p className="flow__intro">
          Pick a step or run the auto-tour to see how agents coordinate. A red outline means the workflow pauses for HR.
        </p>
        <button
          type="button"
          className={`flow__auto-btn ${autoTour ? 'flow__auto-btn--active' : ''}`}
          onClick={() => setAutoTour(!autoTour)}
        >
          <span className="flow__auto-dot" />
          <span>{autoTour ? 'Auto-Touring Steps…' : 'Start Auto-Tour ▶'}</span>
        </button>
      </div>

      <ol className="flow__track" aria-label="TalentPilot hiring workflow">
        {steps.map((s, i) => (
          <li key={s.short}>
            <button
              type="button"
              className={s.gate ? 'flow__node flow__node--gate' : 'flow__node'}
              aria-pressed={i === active}
              aria-controls="flow-panel"
              onClick={() => {
                setAutoTour(false)
                setActive(i)
              }}
            >
              <span className="flow__num">{i + 1}</span>
              <span className="flow__name">{s.short}</span>
              {s.gate ? <span className="flow__gate">HR Gate</span> : null}
            </button>
          </li>
        ))}
      </ol>

      <div id="flow-panel" className="flow__panel" aria-live="polite">
        <div className="flow__panel-top">
          <span className="flow__step-badge">Step {active + 1} of {steps.length}</span>
          {step.gate ? <span className="flow__gate-badge">⚠️ Human Checkpoint</span> : null}
        </div>
        <h4 className="flow__title">{step.title}</h4>
        <p>{step.text}</p>
        {step.gate ? (
          <p className="flow__stop">
            <strong>The workflow pauses here.</strong> {step.gate}
          </p>
        ) : null}
      </div>

      <p className="flow__foot">
        Every pause is saved in PostgreSQL, so a hiring run can wait days for a candidate and survive server restarts.
      </p>
    </div>
  )
}
