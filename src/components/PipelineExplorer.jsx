import { useState } from 'react'

export default function PipelineExplorer({ steps }) {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <div className="flow">
      <p className="flow__intro">
        Pick a step to see what the agents do. A red outline means the workflow pauses for a person.
      </p>
      <ol className="flow__track" aria-label="TalentPilot hiring workflow">
        {steps.map((s, i) => (
          <li key={s.short}>
            <button
              type="button"
              className={s.gate ? 'flow__node flow__node--gate' : 'flow__node'}
              aria-pressed={i === active}
              aria-controls="flow-panel"
              onClick={() => setActive(i)}
            >
              <span className="flow__num">{i + 1}</span>
              <span className="flow__name">{s.short}</span>
              {s.gate ? <span className="flow__gate">HR approves</span> : null}
            </button>
          </li>
        ))}
      </ol>
      <div id="flow-panel" className="flow__panel" aria-live="polite">
        <h4 className="flow__title">{step.title}</h4>
        <p>{step.text}</p>
        {step.gate ? (
          <p className="flow__stop">
            <strong>The workflow pauses here.</strong> {step.gate}
          </p>
        ) : null}
      </div>
      <p className="flow__foot">
        Every pause is saved in PostgreSQL, so a run can wait days and pick up again after a restart.
      </p>
    </div>
  )
}
