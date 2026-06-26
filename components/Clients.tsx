'use client'

import { useState, useEffect, useCallback } from 'react'
import FadeIn from '@/components/FadeIn'
import { clients, testimonials } from '@/lib/data'

export default function Clients() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  const next = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setActive(i => (i + 1) % testimonials.length)
      setVisible(true)
    }, 400)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[active]

  return (
    <section id="clients" className="py-24 bg-[#080810]">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">Who I&apos;ve Worked With</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              }}
            >
              Trusted by Great Clients
            </h2>
            <p className="text-[#7070a0] max-w-[520px] mx-auto text-[1.05rem]">
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
              className="p-8 md:p-10 rounded-[22px]"
              style={{
                background: '#12121f',
                border: '1px solid rgba(255,255,255,0.07)',
                minHeight: '260px',
              }}
            >
              <div
                className="flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
              >
                <div className="text-amber-400 text-lg tracking-[3px] mb-5">{'★★★★★'}</div>
                <p className="text-[0.95rem] text-[#7070a0] italic leading-[1.8] mb-7 max-w-[580px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {t.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-11 h-11 rounded-full flex-shrink-0 object-cover"
                    />
                  ) : (
                    <div
                      className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                    >
                      {t.initials}
                    </div>
                  )}
                  <div className="text-left">
                    <strong className="block text-[0.95rem] font-semibold text-[#e2e2f0]">{t.name}</strong>
                    <small className="text-xs text-[#7070a0]">{t.role}</small>
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
