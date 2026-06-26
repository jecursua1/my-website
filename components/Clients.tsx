'use client'

import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import { clients, testimonials } from '@/lib/data'

export default function Clients() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((active + 1) % testimonials.length)

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
            {/* Card */}
            <div
              className="p-8 md:p-10 rounded-[22px] relative"
              style={{
                background: '#12121f',
                border: '1px solid rgba(255,255,255,0.07)',
                minHeight: '260px',
              }}
            >
              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-[#7070a0] hover:text-[#e2e2f0] transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-[#7070a0] hover:text-[#e2e2f0] transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>

              {/* Content */}
              <div className="px-8 flex flex-col items-center text-center">
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

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    background: i === active ? '#9b5af5' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
