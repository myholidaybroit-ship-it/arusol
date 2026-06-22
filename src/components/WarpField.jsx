import { useEffect, useRef } from 'react'

/**
 * Warp-speed line field — streaks emanate from a center vanishing point and
 * drift toward the viewer, leaving light trails. Subtle gold/white tone.
 *
 * Uses a single guarded RAF loop + delta-time so the pace stays constant
 * regardless of refresh rate or tab switches (no runaway acceleration).
 */
export default function WarpField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w, h, cx, cy, dpr
    let stars = []
    let rafId = null
    let last = 0

    const SPEED = 0.26 // depth units per SECOND (lower = slower)
    const TRAIL = 0.02 // streak length in depth units (fps-independent)
    const FOCAL = 0.9
    const STAR_COUNT = () => Math.min(900, Math.floor((w * h) / 1900))

    const rand = (min, max) => min + Math.random() * (max - min)
    const spawn = (atFar = false) => ({
      x: rand(-1, 1),
      y: rand(-1, 1),
      z: atFar ? 1 : rand(0.05, 1),
    })

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      cx = w / 2
      cy = h / 2
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars = Array.from({ length: STAR_COUNT() }, () => spawn())
    }

    const project = (x, y, z) => {
      const k = FOCAL / z
      return { px: x * k * w * 0.5 + cx, py: y * k * h * 0.5 + cy }
    }

    const drawScene = (step) => {
      // fade previous frame → soft motion trails
      ctx.fillStyle = 'rgba(10, 10, 11, 0.30)'
      ctx.fillRect(0, 0, w, h)

      for (const s of stars) {
        s.z -= step
        if (s.z <= 0.02) {
          Object.assign(s, spawn(true))
          continue
        }

        const cur = project(s.x, s.y, s.z)
        if (cur.px < -60 || cur.px > w + 60 || cur.py < -60 || cur.py > h + 60) continue
        const prev = project(s.x, s.y, s.z + TRAIL)

        const depth = 1 - s.z // 0 (far) → 1 (near)
        const alpha = Math.min(1, depth * depth * 1.15) * 0.85
        const g = Math.round(211 + 34 * depth)
        const b = Math.round(94 + 151 * depth)

        ctx.beginPath()
        ctx.strokeStyle = `rgba(245, ${g}, ${b}, ${alpha})`
        ctx.lineWidth = 0.4 + depth * 1.9
        ctx.lineCap = 'round'
        ctx.moveTo(prev.px, prev.py)
        ctx.lineTo(cur.px, cur.py)
        ctx.stroke()
      }
    }

    const tick = (now) => {
      if (!last) last = now
      // clamp dt so returning from a background tab doesn't cause a jump
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      drawScene(SPEED * dt)
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      if (rafId === null) {
        last = 0
        rafId = requestAnimationFrame(tick)
      }
    }
    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    resize()

    if (reduce) {
      ctx.fillStyle = '#0a0a0b'
      ctx.fillRect(0, 0, w, h)
      for (const s of stars) {
        const { px, py } = project(s.x, s.y, s.z)
        ctx.fillStyle = 'rgba(244, 230, 180, 0.22)'
        ctx.fillRect(px, py, 1.4, 1.4)
      }
      return () => {}
    }

    const onResize = () => resize()
    const onVisibility = () => (document.hidden ? stop() : start())

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="warp" aria-hidden="true" />
}
