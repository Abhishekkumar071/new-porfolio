import { useEffect, useState, useRef } from 'react'

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const end = parseInt(value, 10)
          if (isNaN(end)) return

          const startTime = performance.now()

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(easeOut * end)
            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={elRef} className="num-count">
      {prefix}
      {hasAnimated ? count.toLocaleString('en-IN') : 0}
      {suffix}
    </span>
  )
}
