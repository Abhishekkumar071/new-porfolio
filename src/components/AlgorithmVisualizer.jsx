import { useState, useRef, useEffect, useCallback } from 'react'

const ARRAY_SIZE = 100
const PRESETS = [19, 42, 73, 91]

export default function AlgorithmVisualizer() {
  const [target, setTarget] = useState(73)
  const [running, setRunning] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const [linearSteps, setLinearSteps] = useState(0)
  const [binarySteps, setBinarySteps] = useState(0)
  const [binaryLog, setBinaryLog] = useState([])
  const [completed, setCompleted] = useState(false)
  const timerRef = useRef(null)
  const autoPlayTimerRef = useRef(null)
  const presetIndexRef = useRef(0)

  const runRace = useCallback((searchVal = target) => {
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

    let currentLinear = 0
    let currentBinaryIndex = 0

    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      let doneLinear = false
      let doneBinary = false

      if (currentLinear < num) {
        currentLinear += Math.max(1, Math.floor(num / 14))
        if (currentLinear >= num) {
          currentLinear = num
          doneLinear = true
        }
        setLinearSteps(currentLinear)
      } else {
        doneLinear = true
      }

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
    }, 80)
  }, [running, target])

  // Automatic triggering if autoPlay is active
  useEffect(() => {
    if (!autoPlay) {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current)
      return
    }

    const triggerNext = () => {
      const nextTarget = PRESETS[presetIndexRef.current % PRESETS.length]
      presetIndexRef.current += 1
      runRace(nextTarget)
    }

    // Initial trigger
    const initialDelay = setTimeout(triggerNext, 1200)

    // Recurring auto-demo every 6 seconds
    const interval = setInterval(triggerNext, 6500)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoPlay, runRace])

  const speedup = binarySteps > 0 ? (linearSteps / binarySteps).toFixed(1) : 0

  return (
    <div className="algo-box">
      <div className="algo-box__header">
        <div>
          <div className="algo-box__top-bar">
            <span className="algo-box__tag">⚡ Interactive Algorithm Race</span>
            <button
              type="button"
              className={`auto-toggle ${autoPlay ? 'auto-toggle--active' : ''}`}
              onClick={() => setAutoPlay(!autoPlay)}
            >
              <span className="auto-toggle__dot" />
              <span>{autoPlay ? 'Auto-Running Demo' : 'Auto-Play Paused'}</span>
            </button>
          </div>
          <h3 className="algo-box__title">Linear Search vs Binary Search</h3>
          <p className="algo-box__desc">
            See how algorithmic choices impact performance. Searching for a number in a sorted array of 1 to 100:
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
              onChange={(e) => {
                setAutoPlay(false)
                setTarget(e.target.value)
              }}
              disabled={running}
              className="algo-input"
            />
          </div>

          <div className="algo-presets">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                className={`btn-preset ${target === p ? 'btn-preset--active' : ''}`}
                onClick={() => {
                  setAutoPlay(false)
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
            onClick={() => {
              setAutoPlay(false)
              runRace(target)
            }}
            disabled={running}
          >
            {running ? 'Racing…' : 'Run Search Race ⚡'}
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
          <p className="algo-explain">Scans every single number one by one from the start.</p>

          <div className="algo-meter">
            <div className="algo-meter__bar" style={{ width: `${(linearSteps / ARRAY_SIZE) * 100}%` }} />
          </div>

          <div className="algo-stat">
            <span className="algo-stat__label">Comparisons Made:</span>
            <span className="algo-stat__num algo-stat__num--linear">{linearSteps}</span>
          </div>
          <p className="algo-footnote">Checked: 1, 2, 3... up to {linearSteps}</p>
        </div>

        {/* Binary Search Card */}
        <div className="algo-card algo-card--highlight">
          <div className="algo-card__head">
            <span className="algo-name">Binary Search</span>
            <span className="algo-complexity algo-complexity--good">O(log N) Complexity</span>
          </div>
          <p className="algo-explain">Divides the remaining list in half on every single check.</p>

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
                Step {idx + 1}: mid={step.mid}
              </span>
            ))}
          </div>
        </div>
      </div>

      {completed && (
        <div className="algo-summary">
          <span className="algo-summary__badge">Result: Binary Search was {speedup}x Faster</span>
          <p>
            Binary Search found <strong>{target}</strong> in only <strong>{binarySteps} steps</strong>, while Linear
            Search checked <strong>{linearSteps} items</strong>.
            <br />
            <em>
              "This is why I compete in DSA hackathons: picking the right algorithm turns minutes of waiting into
              instant results."
            </em>
          </p>
        </div>
      )}
    </div>
  )
}
