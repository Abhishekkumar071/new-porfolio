import { useEffect, useRef } from 'react'

const TRAIL_DURATION = 700

export default function MouseTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const canShowTrail = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    ).matches

    if (!canvas || !context || !canShowTrail) return undefined

    let frame = 0
    let points = []
    let width = 0
    let height = 0
    let pixelRatio = 1

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const draw = (now) => {
      context.clearRect(0, 0, width, height)
      points = points.filter((point) => now - point.time < TRAIL_DURATION)

      if (points.length > 0) {
        const color = getComputedStyle(document.documentElement)
          .getPropertyValue('--margin')
          .trim()

        context.lineCap = 'round'
        context.lineJoin = 'round'
        context.lineWidth = 2

        for (let i = 1; i < points.length; i += 1) {
          const previous = points[i - 1]
          const current = points[i]
          const age = (now - current.time) / TRAIL_DURATION
          const alpha = Math.max(0, 1 - age) * 0.75

          context.beginPath()
          context.moveTo(previous.x, previous.y)
          context.lineTo(current.x, current.y)
          context.strokeStyle = color
          context.globalAlpha = alpha
          context.stroke()
        }

        context.globalAlpha = 1
        frame = window.requestAnimationFrame(draw)
      } else {
        frame = 0
      }
    }

    const onPointerMove = (event) => {
      if (event.pointerType === 'touch') return
      points.push({ x: event.clientX, y: event.clientY, time: performance.now() })

      if (!frame) frame = window.requestAnimationFrame(draw)
    }

    const clearTrail = () => {
      points = []
      if (frame) {
        window.cancelAnimationFrame(frame)
        frame = 0
      }
      context.clearRect(0, 0, width, height)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('blur', clearTrail)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('blur', clearTrail)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="mouse-trail" aria-hidden="true" />
}
