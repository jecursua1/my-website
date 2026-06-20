'use client'

import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '@/lib/data'

function useCounter(target: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let current = 0
    const step = target / 80
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.floor(current))
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, started])
  return count
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(value, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-0.5">
      <span
        className="text-[1.7rem] font-black text-white leading-none"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {count}{suffix}
      </span>
      <span className="text-xs text-[#7070a0] uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[680px] grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6 py-20"
      style={{ paddingLeft: 'clamp(24px, 10vw, 120px)', paddingRight: 'clamp(24px, 10vw, 120px)' }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.18)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(6,182,212,0.12)', filter: 'blur(120px)' }}
      />

      {/* Hero Text */}
      <div className="relative z-10">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium text-[#7070a0]"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span
            className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot"
            style={{ display: 'block', animation: 'pulseDot 2s infinite' }}
          />
          Available for new projects
        </div>

        <h1
          className="font-black leading-[1.1] mb-5"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          }}
        >
          Hi, I&apos;m{' '}
          <span className="grad-text">{personalInfo.nickname} Ursua</span>
        </h1>

        <p
          className="text-[#7070a0] mb-4 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          Chief of Staff · SEO Specialist · AI &amp; Automation Expert
          <br />
          helping businesses grow and operate smoothly.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.95rem] font-semibold text-[#e2e2f0] transition-all duration-300 hover:text-[#9b5af5]"
            style={{ border: '1.5px solid rgba(255,255,255,0.07)' }}
          >
            Let&apos;s Talk →
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex items-center gap-7 mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {personalInfo.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-7">
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              {i < personalInfo.stats.length - 1 && (
                <div className="w-px h-9" style={{ background: 'rgba(255,255,255,0.07)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative hidden md:flex items-center justify-center min-h-[440px]">
        {/* Orbit rings */}
        <div
          className="absolute w-[340px] h-[340px] rounded-full animate-spin-slow pointer-events-none"
          style={{ border: '1.5px solid rgba(124,58,237,0.25)' }}
        />
        <div
          className="absolute w-[420px] h-[420px] rounded-full animate-spin-slower pointer-events-none"
          style={{ border: '1.5px solid rgba(124,58,237,0.15)' }}
        />

        {/* Avatar */}
        <div
          className="relative z-10 w-[280px] h-[280px] rounded-full flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
        >
          {/* Replace with <Image src="/photo.jpg" alt="Jec Ursua" fill className="object-cover" /> */}
          <span
            className="text-[3.5rem] font-black text-white"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            JU
          </span>
        </div>

        {/* Float card 1 */}
        <div
          className="absolute top-[10%] left-[-5%] z-20 flex items-center gap-3 px-4 py-3 rounded-[14px] animate-float"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
          }}
        >
          <span className="text-2xl">ðŸŽ¯</span>
          <div>
            <strong className="block text-sm font-semibold text-[#e2e2f0]">New Client Onboarded</strong>
            <small className="text-xs text-[#7070a0]">Great Marketing AI</small>
          </div>
        </div>

        {/* Float card 2 */}
        <div
          className="absolute bottom-[12%] right-[-5%] z-20 flex items-center gap-3 px-4 py-3 rounded-[14px] animate-float-delayed"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
          }}
        >
          <span className="text-2xl">ðŸ“ˆ</span>
          <div>
            <strong className="block text-sm font-semibold text-[#e2e2f0]">SEO Growth</strong>
            <small className="text-xs text-[#7070a0]">+240% organic traffic</small>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        aria-label="Scroll down"
      >
        <div className="w-5 h-5 border-r-2 border-b-2 border-muted animate-bounce-arrow" />
      </a>
    </section>
  )
}
