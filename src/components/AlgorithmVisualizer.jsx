import { useState, useRef } from 'react'

const ARRAY_SIZE = 100
const PRESETS = [19, 42, 73, 91]

export default function AlgorithmVisualizer() {
  const [target, setTarget] = useState(73)
  const [running, setRunning] = useState(false)
  const [linearSteps, setLinearSteps] = useState(0)
  const [binarySteps, setBinarySteps] = useState(0)
  const [binaryLog, setBinaryLog] = useState([])
  const [completed, setCompleted] = useState(false)
  const timerRef = useRef(null)

  const runRace = (searchVal = target) => {
    if (running) return
    const num = Math.min(Math.max(1, parseInt(searchVal, 10) || 1), ARRAY_SIZE)
    setTarget(num)
    setRunning(true)
    setCompleted(false)
    setLinearSteps(0)
    setBinarySteps(0)
    setBinaryLog([])

    // Calculate binary search steps
    let low = 1
    let high = ARRAY_SIZE
    const bSteps = []
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      bSteps.push({ mid, low, high })
      if (mid === num) break
      if (mid < num) low = mid + 1
      else high = mid - 1
    }

    // Animate race
    let currentLinear = 0
    let currentBinaryIndex = 0

    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      let doneLinear = false
      let doneBinary = false

      // Linear step
      if (currentLinear < num) {
        currentLinear += Math.max(1, Math.floor(num / 15))
        if (currentLinear >= num) {
          currentLinear = num
          doneLinear = true
        }
        setLinearSteps(currentLinear)
      } else {
        doneLinear = true
      }

      // Binary step
      if (currentBinaryIndex < bSteps.length) {
        currentBinaryIndex += 1
        setBinarySteps(currentBinaryIndex)
        setBinaryLog(bSteps.slice(0, currentBinaryIndex))
      } else {
        doneBinary = true
      }

      if (doneLinear && doneBinary) {
        clearInterval(timerRef.current)
        setRunning(false)
        setCompleted(true)
      }
    }, 90)
  }

  const speedup = binarySteps > 0 ? (linearSteps / binarySteps).toFixed(1) : 0

  return (
    <div className="algo-box">
      <div className="algo-box__header">
        <div>
          <span className="algo-box__tag">Interactive Algorithm Race</span>
          <h3 className="algo-box__title">Linear Search vs Binary Search</h3>
          <p className="algo-box__desc">
            See how algorithmic choices impact speed. Searching for a number in a sorted list of 1 to 100:
          </p>
        </div>

        <div className="algo-box__controls">
          <div className="algo-box__target-select">
            <label htmlFor="target-input">Target:</label>
            <input
              id="target-input"
              type="number"
              min="1"
              max="100"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              disabled={running}
              className="algo-input"
            />
          </div>

          <div className="algo-presets">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                className="btn-preset"
                onClick={() => {
                  setTarget(p)
                  runRace(p)
                }}
                disabled={running}
              >
                Find {p}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="btn btn--solid btn--run"
            onClick={() => runRace(target)}
            disabled={running}
          >
            {running ? 'Running Search…' : 'Run Search Race ⚡'}
          </button>
        </div>
      </div>

      <div className="algo-grid">
        {/* Linear Search Card */}
        <div className="algo-card">
          <div className="algo-card__head">
            <span className="algo-name">Linear Search</span>
            <span className="algo-complexity">O(N) Complexity</span>
          </div>
          <p className="algo-explain">Checks every single item one by one from index 1.</p>

          <div className="algo-meter">
            <div className="algo-meter__bar" style={{ width: `${(linearSteps / ARRAY_SIZE) * 100}%` }} />
          </div>

          <div className="algo-stat">
            <span className="algo-stat__label">Comparisons Made:</span>
            <span className="algo-stat__num algo-stat__num--linear">{linearSteps}</span>
          </div>
          <p className="algo-footnote">Checks: 1, 2, 3... up to {linearSteps}</p>
        </div>

        {/* Binary Search Card */}
        <div className="algo-card algo-card--highlight">
          <div className="algo-card__head">
            <span className="algo-name">Binary Search</span>
            <span className="algo-complexity algo-complexity--good">O(log N) Complexity</span>
          </div>
          <p className="algo-explain">Divides the search range in half on every single check.</p>

          <div className="algo-meter">
            <div
              className="algo-meter__bar algo-meter__bar--good"
              style={{ width: `${(binarySteps / 7) * 100}%` }}
            />
          </div>

          <div className="algo-stat">
            <span className="algo-stat__label">Comparisons Made:</span>
            <span className="algo-stat__num algo-stat__num--good">{binarySteps}</span>
          </div>

          <div className="algo-steps-log">
            {binaryLog.map((step, idx) => (
              <span key={idx} className="algo-step-chip">
                Step {idx + 1}: check {step.mid}
              </span>
            ))}
          </div>
        </div>
      </div>

      {completed && (
        <div className="algo-summary">
          <span className="algo-summary__badge">Result: Binary Search was {speedup}x Faster</span>
          <p>
            Binary Search found <strong>{target}</strong> in just <strong>{binarySteps} steps</strong>, while Linear
            Search required <strong>{linearSteps} steps</strong>.
            <br />
            <em>
              "This is why I compete in DSA hackathons: picking the right algorithm turns a sluggish system into an
              instant one."
            </em>
          </p>
        </div>
      )}
    </div>
  )
}
