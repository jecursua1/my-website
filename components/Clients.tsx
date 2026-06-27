'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import FadeIn from '@/components/FadeIn'
import { clients, testimonials } from '@/lib/data'

export default function Clients() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const paused = useRef(false)

  const goTo = useCallback((index: number) => {
    setVisible(false)
    setTimeout(() => {
      setActive(index)
      setVisible(true)
    }, 400)
  }, [])

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) next()
    }, 10000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[active]

  return (
    <section id="clients" className="py-24" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">Who I&apos;ve Worked With</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: 'var(--text-primary)',
              }}
            >
              Trusted by Great Clients
            </h2>
            <p className="max-w-[520px] mx-auto text-[1.05rem]" style={{ color: 'var(--text-secondary)' }}>
              I&apos;ve had the privilege of working with businesses across multiple industries and countries
            </p>
          </div>
        </FadeIn>

        {/* Scrolling logo ticker */}
        <FadeIn>
          <div
            className="relative overflow-hidden mb-16"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            }}
          >
            <div className="animate-marquee flex gap-20 w-max items-center py-3">
              {[...clients, ...clients].map((client, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo object-contain cursor-default"
                    style={{ height: '52px', width: 'auto', maxWidth: '260px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Testimonial carousel */}
        <FadeIn>
          <div className="max-w-[780px] mx-auto">
            <div
              className="p-8 md:p-10 rounded-[22px] relative flex flex-col justify-center"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                height: '420px',
              }}
              onMouseEnter={() => { paused.current = true }}
              onMouseLeave={() => { paused.current = false }}
            >
              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>

              <div
                className="px-8 flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
              >
                <div className="text-amber-400 text-lg tracking-[3px] mb-5">{'★★★★★'}</div>
                <p className="text-[0.95rem] italic leading-[1.8] mb-7 max-w-[580px]" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 justify-center">
                  {t.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                    >
                      {t.initials}
                    </div>
                  )}
                  <div className="text-left">
                    <strong className="block text-[0.95rem] font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</strong>
                    <small className="block text-xs" style={{ color: 'var(--text-secondary)' }}>{t.role}</small>
                    <small className="block text-xs text-[#9b5af5]">{t.company}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
