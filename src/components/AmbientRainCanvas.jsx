import { useEffect, useRef } from 'react'

export default function AmbientRainCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId = 0
    let width = 0
    let height = 0
    let dpr = 1

    // Mouse tracking for interactive magic rain & bird reaction
    const mouse = {
      x: -2000,
      y: -2000,
      prevX: -2000,
      prevY: -2000,
      active: false,
      speed: 0,
      energy: 0,
    }

    // Peaceful ambient rain
    const BASE_DROP_COUNT = 28
    const baseDrops = []

    // Interactive drops spawned by mouse movement
    const interactiveParticles = []
    const splashes = []

    // 6-7 Realistic Birds (Parrot / Swift silhouettes with body, beak, wings, and long tail)
    const BIRD_COUNT = 6
    const birds = []

    const resetBaseDrop = (d, randomizeY = false) => {
      d.x = Math.random() * width
      d.y = randomizeY ? Math.random() * height : -20 - Math.random() * 40
      d.len = 12 + Math.random() * 16
      d.speed = 2.2 + Math.random() * 2.6
      d.width = 1.0 + Math.random() * 0.7
      d.wind = 0.4 + Math.random() * 0.5
      d.alpha = 0.16 + Math.random() * 0.22
      d.hue = [195, 215, 38, 160][Math.floor(Math.random() * 4)]
    }

    const resetBird = (b, randomizeX = false) => {
      b.x = randomizeX ? Math.random() * width : -70 - Math.random() * 120
      b.y = 35 + Math.random() * (height * 0.45) // sky zone
      b.size = 12 + Math.random() * 7 // realistic size
      b.speedX = 1.1 + Math.random() * 1.1
      b.speedY = (Math.random() - 0.5) * 0.2
      b.wingAngle = Math.random() * Math.PI * 2
      b.wingSpeed = 0.07 + Math.random() * 0.04
      b.depth = 0.65 + Math.random() * 0.35
      // Bird variety: 0 = Emerald/Parrot hue, 1 = Tropical Teal, 2 = Royal Indigo
      b.palette = Math.floor(Math.random() * 3)
      b.gliding = false
      b.glideTimer = Math.random() * 120
    }

    const addInteractiveSparkles = (x, y, count = 3) => {
      for (let i = 0; i < count; i += 1) {
        if (interactiveParticles.length > 70) interactiveParticles.shift()
        const angle = Math.random() * Math.PI * 2
        const speed = 1.2 + Math.random() * 3.2
        interactiveParticles.push({
          x: x + (Math.random() - 0.5) * 16,
          y: y + (Math.random() - 0.5) * 16,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + 1.1,
          len: 8 + Math.random() * 14,
          life: 1,
          decay: 0.025 + Math.random() * 0.03,
          size: 1.2 + Math.random() * 1.4,
          hue: [195, 220, 38, 160][Math.floor(Math.random() * 4)],
        })
      }
    }

    const createSplash = (x, y, hue, isDark) => {
      if (splashes.length > 20) splashes.shift()
      splashes.push({
        x,
        y,
        radius: 2,
        maxRadius: 7 + Math.random() * 7,
        alpha: 0.55,
        hue,
        isDark,
      })
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (baseDrops.length === 0) {
        for (let i = 0; i < BASE_DROP_COUNT; i += 1) {
          const d = {}
          resetBaseDrop(d, true)
          baseDrops.push(d)
        }
      }

      if (birds.length === 0) {
        for (let i = 0; i < BIRD_COUNT; i += 1) {
          const b = {}
          resetBird(b, true)
          birds.push(b)
        }
      }
    }

    resize()
    window.addEventListener('resize', resize)

    let lastMoveTime = 0
    const onPointerMove = (e) => {
      const now = performance.now()
      const dx = e.clientX - mouse.prevX
      const dy = e.clientY - mouse.prevY
      const dist = Math.sqrt(dx * dx + dy * dy)

      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
      mouse.speed = Math.min(dist, 40)
      mouse.energy = Math.min(mouse.energy + mouse.speed * 0.08, 1.2)

      if (now - lastMoveTime > 25 && dist > 5) {
        lastMoveTime = now
        addInteractiveSparkles(mouse.x, mouse.y, Math.min(Math.floor(dist / 7) + 1, 4))
      }

      mouse.prevX = mouse.x
      mouse.prevY = mouse.y
    }

    const onPointerLeave = () => {
      mouse.active = false
      mouse.energy = 0
      mouse.x = -2000
      mouse.y = -2000
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)

    const isDarkTheme = () => document.documentElement.dataset.theme === 'dark'

    // Draw realistic parrot/bird silhouette with head, beak, flapping wings, and long tail
    const drawRealisticBird = (b, flap, dark) => {
      ctx.save()
      ctx.translate(b.x, b.y)

      const s = b.size * b.depth
      const wingY = flap * (s * 0.65)

      // Color scheme for realistic bird / parrot
      let primaryColor
      let accentColor
      if (dark) {
        // Night sky: Moonlit silver silhouette with subtle luminous emerald / cyan sheen
        primaryColor = `rgba(226, 232, 240, ${0.72 * b.depth})`
        accentColor = b.palette === 0 ? 'rgba(52, 211, 153, 0.6)' : 'rgba(34, 211, 238, 0.6)'
      } else {
        // Daylight: Crisp rich forest teal / parrot green-ink & deep navy
        primaryColor = b.palette === 0 ? 'rgba(15, 118, 110, 0.82)' : 'rgba(23, 32, 51, 0.82)'
        accentColor = b.palette === 0 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(3, 105, 161, 0.7)'
      }

      ctx.fillStyle = primaryColor
      ctx.strokeStyle = primaryColor
      ctx.lineWidth = 1.4 * b.depth
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // 1. Tapered Parrot / Swift Tail (Graceful trailing feathers)
      ctx.beginPath()
      ctx.moveTo(0, s * 0.15)
      ctx.lineTo(-s * 0.95, s * 0.1) // long graceful tail feather
      ctx.lineTo(-s * 0.6, s * 0.3)
      ctx.closePath()
      ctx.fill()

      // 2. Bird Body & Head with curved beak
      ctx.beginPath()
      // Sleek body ellipse
      ctx.ellipse(0, 0, s * 0.45, s * 0.22, 0, 0, Math.PI * 2)
      ctx.fill()

      // Head & Beak (facing flight direction to the right)
      ctx.beginPath()
      ctx.arc(s * 0.38, -s * 0.05, s * 0.18, 0, Math.PI * 2)
      ctx.fill()

      // Little curved parrot beak tip
      ctx.beginPath()
      ctx.moveTo(s * 0.48, -s * 0.08)
      ctx.lineTo(s * 0.72, 0)
      ctx.lineTo(s * 0.48, s * 0.08)
      ctx.fillStyle = accentColor
      ctx.fill()

      // 3. Curved Flapping Wings (Upper wing & Lower wing with feather tips)
      ctx.fillStyle = primaryColor
      // Upper Wing
      ctx.beginPath()
      ctx.moveTo(-s * 0.1, -s * 0.1)
      ctx.quadraticCurveTo(s * 0.05, wingY * 0.4 - s * 0.3, s * 0.15, wingY - s * 0.5)
      ctx.quadraticCurveTo(-s * 0.2, wingY * 0.7, -s * 0.35, wingY * 0.3)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Lower Wing (depth perspective)
      ctx.beginPath()
      ctx.moveTo(-s * 0.1, s * 0.1)
      ctx.quadraticCurveTo(s * 0.05, -wingY * 0.4 + s * 0.3, s * 0.15, -wingY + s * 0.5)
      ctx.quadraticCurveTo(-s * 0.2, -wingY * 0.7, -s * 0.35, -wingY * 0.3)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      ctx.restore()
    }

    // Draw Subtle Sun (Suraj) in Light Mode, or Soft Crescent Moon (Chandrama) in Dark Mode
    const drawCelestialBody = (dark) => {
      ctx.save()

      // Position high in the sky (top-right area)
      const celestialX = width > 700 ? width - 110 : width - 70
      const celestialY = 70

      if (dark) {
        // Chandrama (Moon): Soft glowing crescent moon with ethereal lunar halo
        const moonRadius = 18

        // Soft outer ambient halo
        const haloGrad = ctx.createRadialGradient(
          celestialX,
          celestialY,
          moonRadius * 0.8,
          celestialX,
          celestialY,
          moonRadius * 2.8,
        )
        haloGrad.addColorStop(0, 'rgba(254, 240, 138, 0.18)')
        haloGrad.addColorStop(1, 'rgba(254, 240, 138, 0)')

        ctx.beginPath()
        ctx.arc(celestialX, celestialY, moonRadius * 2.8, 0, Math.PI * 2)
        ctx.fillStyle = haloGrad
        ctx.fill()

        // Crescent shape
        ctx.beginPath()
        ctx.arc(celestialX, celestialY, moonRadius, Math.PI * 0.25, Math.PI * 1.75, false)
        ctx.bezierCurveTo(
          celestialX - moonRadius * 0.2,
          celestialY - moonRadius * 0.4,
          celestialX - moonRadius * 0.2,
          celestialY + moonRadius * 0.4,
          celestialX + moonRadius * Math.cos(Math.PI * 0.25),
          celestialY + moonRadius * Math.sin(Math.PI * 0.25),
        )
        ctx.fillStyle = 'rgba(254, 249, 195, 0.82)'
        ctx.shadowColor = 'rgba(253, 224, 71, 0.45)'
        ctx.shadowBlur = 12
        ctx.fill()
      } else {
        // Suraj (Sun): Soft, gentle golden sun with a warm subtle aura ("ek dam zyada nahi")
        const sunRadius = 20

        // Gentle warm sun halo
        const sunHalo = ctx.createRadialGradient(
          celestialX,
          celestialY,
          sunRadius * 0.5,
          celestialX,
          celestialY,
          sunRadius * 3.2,
        )
        sunHalo.addColorStop(0, 'rgba(251, 191, 36, 0.22)')
        sunHalo.addColorStop(0.5, 'rgba(245, 158, 11, 0.08)')
        sunHalo.addColorStop(1, 'rgba(245, 158, 11, 0)')

        ctx.beginPath()
        ctx.arc(celestialX, celestialY, sunRadius * 3.2, 0, Math.PI * 2)
        ctx.fillStyle = sunHalo
        ctx.fill()

        // Soft sun core disc
        ctx.beginPath()
        ctx.arc(celestialX, celestialY, sunRadius, 0, Math.PI * 2)
        const sunCoreGrad = ctx.createRadialGradient(
          celestialX - 4,
          celestialY - 4,
          2,
          celestialX,
          celestialY,
          sunRadius,
        )
        sunCoreGrad.addColorStop(0, 'rgba(254, 240, 138, 0.85)')
        sunCoreGrad.addColorStop(1, 'rgba(245, 158, 11, 0.65)')
        ctx.fillStyle = sunCoreGrad
        ctx.shadowColor = 'rgba(245, 158, 11, 0.3)'
        ctx.shadowBlur = 10
        ctx.fill()
      }

      ctx.restore()
    }

    // 60fps render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)
      const dark = isDarkTheme()

      mouse.energy *= 0.94

      // 1. Draw Subtle Sun (Light theme) or Soft Moon (Dark theme)
      drawCelestialBody(dark)

      // 2. Render Gentle Ambient Rain (subtle, peaceful, never blocks text)
      for (let i = 0; i < baseDrops.length; i += 1) {
        const d = baseDrops[i]

        if (mouse.active) {
          const dx = d.x - mouse.x
          const dy = d.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const push = ((130 - dist) / 130) * (4 + mouse.energy * 6)
            d.x += (dx / (dist || 1)) * push
            d.y += (dy / (dist || 1)) * push * 0.4
          }
        }

        d.y += d.speed
        d.x += d.wind

        const color = dark
          ? `hsla(${d.hue}, 80%, 70%, ${d.alpha * 0.6})`
          : `rgba(30, 58, 138, ${d.alpha * 0.45})`

        const tailColor = dark
          ? `hsla(${d.hue}, 80%, 70%, 0)`
          : `rgba(30, 58, 138, 0)`

        const grad = ctx.createLinearGradient(d.x - d.wind * 4, d.y - d.len, d.x, d.y)
        grad.addColorStop(0, tailColor)
        grad.addColorStop(1, color)

        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth = d.width
        ctx.lineCap = 'round'
        ctx.moveTo(d.x - d.wind * 4, d.y - d.len)
        ctx.lineTo(d.x, d.y)
        ctx.stroke()

        if (d.y > height) {
          resetBaseDrop(d)
        }
      }

      // 3. Render Interactive Sparks on Mouse Movement
      for (let i = interactiveParticles.length - 1; i >= 0; i -= 1) {
        const p = interactiveParticles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= p.decay

        if (p.life <= 0) {
          interactiveParticles.splice(i, 1)
          continue
        }

        const alpha = p.life * (dark ? 0.85 : 0.75)
        const dropColor = dark
          ? `hsla(${p.hue}, 95%, 72%, ${alpha})`
          : `rgba(2, 132, 199, ${alpha})`

        const tailColor = dark
          ? `hsla(${p.hue}, 95%, 72%, 0)`
          : `rgba(2, 132, 199, 0)`

        const grad = ctx.createLinearGradient(p.x - p.vx * 3, p.y - p.vy * 3, p.x, p.y)
        grad.addColorStop(0, tailColor)
        grad.addColorStop(1, dropColor)

        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth = p.size
        ctx.lineCap = 'round'
        ctx.moveTo(p.x - p.vx * 3, p.y - p.vy * 3)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()

        if (p.life < 0.15 && Math.random() < 0.2) {
          createSplash(p.x, p.y, p.hue, dark)
        }
      }

      // 4. Splashes
      for (let s = splashes.length - 1; s >= 0; s -= 1) {
        const sp = splashes[s]
        sp.radius += 0.55
        sp.alpha -= 0.04

        if (sp.alpha <= 0 || sp.radius >= sp.maxRadius) {
          splashes.splice(s, 1)
          continue
        }

        ctx.save()
        ctx.beginPath()
        ctx.ellipse(sp.x, sp.y, sp.radius * 1.3, sp.radius * 0.5, 0, 0, Math.PI * 2)
        ctx.strokeStyle = sp.isDark
          ? `hsla(${sp.hue}, 85%, 75%, ${sp.alpha * 0.5})`
          : `rgba(2, 132, 199, ${sp.alpha * 0.4})`
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      }

      // 5. Render 6 Realistic Birds (Parrot / Swift Flocks with Flapping Wings & Long Tail)
      for (let b = 0; b < birds.length; b += 1) {
        const bird = birds[b]

        // Alternate between wing flapping and gentle gliding
        bird.glideTimer += 1
        if (bird.glideTimer > 90) {
          bird.gliding = !bird.gliding
          bird.glideTimer = 0
        }

        if (!bird.gliding) {
          bird.wingAngle += bird.wingSpeed
        }
        const flap = bird.gliding ? 0.08 : Math.sin(bird.wingAngle)

        // Mouse reaction: gentle swoop if cursor gets near
        if (mouse.active) {
          const dx = bird.x - mouse.x
          const dy = bird.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            bird.x += (dx / dist) * 2.8
            bird.y += (dy / dist) * 2.0
            bird.gliding = false
            bird.wingAngle += 0.15
          }
        }

        bird.x += bird.speedX
        bird.y += bird.speedY + Math.sin(bird.x * 0.015) * 0.35

        drawRealisticBird(bird, flap, dark)

        if (bird.x > width + 90) {
          resetBird(bird, false)
        }
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-rain-canvas" aria-hidden="true" />
}
