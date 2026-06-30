'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseVx: number
  baseVy: number
}

const PARTICLE_COUNT = 140
const LINE_DIST = 140
const TRI_DIST = 110
const MOUSE_RADIUS = 120
const MOUSE_FORCE = 2.5

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let animId: number
    let particles: Particle[] = []

    function resize() {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    function spawn(): Particle {
      const vx = (Math.random() - 0.5) * 1.2
      const vy = (Math.random() - 0.5) * 1.2
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        radius: Math.random() * 1.6 + 0.8,
        baseVx: vx,
        baseVy: vy,
      }
    }

    function init() {
      particles = Array.from({ length: PARTICLE_COUNT }, spawn)
    }

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, width, height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Update particle positions with mouse repulsion
      for (const p of particles) {
        const mdx = p.x - mx
        const mdy = p.y - my
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)

        if (mdist < MOUSE_RADIUS && mdist > 0) {
          const force = ((MOUSE_RADIUS - mdist) / MOUSE_RADIUS) * MOUSE_FORCE
          p.vx += (mdx / mdist) * force * 0.25
          p.vy += (mdy / mdist) * force * 0.25
        }

        // Gradually return to base speed
        p.vx += (p.baseVx - p.vx) * 0.03
        p.vy += (p.baseVy - p.vy) * 0.03

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) { p.vx *= -1; p.baseVx *= -1; p.x = Math.max(0, Math.min(width, p.x)) }
        if (p.y < 0 || p.y > height) { p.vy *= -1; p.baseVy *= -1; p.y = Math.max(0, Math.min(height, p.y)) }
      }

      // Build neighbor pairs first for triangle detection
      const pairs: [number, number, number][] = []
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINE_DIST) pairs.push([i, j, d])
        }
      }

      // Draw triangles: find triplets where all 3 pairs are within TRI_DIST
      const triPairs = pairs.filter(([, , d]) => d < TRI_DIST)
      const neighborMap = new Map<number, Set<number>>()
      for (const [i, j] of triPairs) {
        if (!neighborMap.has(i)) neighborMap.set(i, new Set())
        if (!neighborMap.has(j)) neighborMap.set(j, new Set())
        neighborMap.get(i)!.add(j)
        neighborMap.get(j)!.add(i)
      }

      const drawnTris = new Set<string>()
      for (const [i, neighbors] of neighborMap) {
        const nArr = [...neighbors]
        for (let a = 0; a < nArr.length; a++) {
          const j = nArr[a]
          for (let b = a + 1; b < nArr.length; b++) {
            const k = nArr[b]
            if (!neighborMap.get(j)?.has(k)) continue
            const key = [i, j, k].sort().join(',')
            if (drawnTris.has(key)) continue
            drawnTris.add(key)

            const d1 = Math.sqrt((particles[i].x - particles[j].x) ** 2 + (particles[i].y - particles[j].y) ** 2)
            const d2 = Math.sqrt((particles[i].x - particles[k].x) ** 2 + (particles[i].y - particles[k].y) ** 2)
            const d3 = Math.sqrt((particles[j].x - particles[k].x) ** 2 + (particles[j].y - particles[k].y) ** 2)
            const maxD = Math.max(d1, d2, d3)
            const alpha = (1 - maxD / TRI_DIST) * 0.12

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.lineTo(particles[k].x, particles[k].y)
            ctx.closePath()
            ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`
            ctx.fill()
          }
        }
      }

      // Draw connection lines
      for (const [i, j, d] of pairs) {
        const alpha = (1 - d / LINE_DIST) * 0.45
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`
        ctx.lineWidth = 0.8
        ctx.stroke()
      }

      // Draw particles
      for (const p of particles) {
        const mdx = p.x - mx
        const mdy = p.y - my
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        const nearMouse = mdist < MOUSE_RADIUS
        const glowAlpha = nearMouse ? 0.9 : 0.6

        ctx.beginPath()
        ctx.arc(p.x, p.y, nearMouse ? p.radius * 1.5 : p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124, 58, 237, ${glowAlpha})`
        ctx.fill()

        if (nearMouse) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(192, 132, 252, 0.15)'
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    // Track mouse globally — canvas is pointer-events-none so we listen on window
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    resize()
    init()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
