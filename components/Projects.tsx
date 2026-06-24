'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { projects } from '@/lib/data'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'hr', label: 'HR & Recruitment' },
  { key: 'seo', label: 'SEO' },
  { key: 'automation', label: 'Automation' },
  { key: 'operations', label: 'Operations' },
]

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  title,
  startIdx,
  onClose,
}: {
  images: string[]
  title: string
  startIdx: number
  onClose: () => void
}) {
  const [idx, setIdx] = useState(startIdx)

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:bg-white/10 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image container — stop propagation so clicking image doesn't close */}
      <div
        className="relative w-full max-w-5xl mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: '16/9' }}>
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              unoptimized
          sizes="(max-width: 1280px) 95vw, 1024px"
              className="object-cover object-top transition-opacity duration-500"
              style={{ opacity: i === idx ? 1 : 0 }}
              priority
            />
          ))}
        </div>

        {/* Title */}
        <p className="text-center text-white/70 text-sm mt-3">{title}{images.length > 1 ? ` · ${idx + 1} / ${images.length}` : ''}</p>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:bg-white/10"
              onClick={prev}
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:bg-white/10"
              onClick={next}
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ background: i === idx ? '#fff' : 'rgba(255,255,255,0.3)', transform: i === idx ? 'scale(1.3)' : 'scale(1)' }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ── ProjectImage (card thumbnail with cycling) ────────────────────────────────

function ProjectImage({
  images,
  title,
  height,
  onImageClick,
}: {
  images: string[]
  title: string
  height: string
  onImageClick: (idx: number) => void
}) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div
      className={`relative overflow-hidden ${height} cursor-zoom-in group`}
      onClick={() => onImageClick(idx)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0 }}
          priority={i === 0}
        />
      ))}

      {/* Zoom hint overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.45)' }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ border: '1.5px solid rgba(255,255,255,0.5)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          View larger
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i) }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === idx ? '#fff' : 'rgba(255,255,255,0.35)', transform: i === idx ? 'scale(1.3)' : 'scale(1)' }}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Projects() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState<{ images: string[]; title: string; idx: number } | null>(null)

  const filtered = active === 'all'
    ? projects.filter((p) => p.featured)
    : projects.filter((p) => p.category === active).sort((a, b) => (a.wide ? 1 : 0) - (b.wide ? 1 : 0))

  return (
    <section id="projects" className="py-24 bg-[#0e0e1a]">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">My Work</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              }}
            >
              Featured Projects
            </h2>
            <p className="text-[#7070a0] max-w-[520px] mx-auto text-[1.05rem]">
              A selection of work I&apos;m proud to have delivered
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn>
          <div className="flex justify-center gap-2.5 mb-10 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === f.key ? 'text-white' : 'text-[#7070a0] hover:text-white'
                }`}
                style={{
                  background: active === f.key ? '#7c3aed' : 'transparent',
                  border: active === f.key
                    ? '1.5px solid #7c3aed'
                    : '1.5px solid rgba(255,255,255,0.07)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((proj, i) => (
            <FadeIn
              key={proj.id}
              delay={i * 0.07}
              className={proj.wide ? 'md:col-span-2' : ''}
            >
              <div
                className="rounded-[22px] overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full"
                style={{
                  background: '#12121f',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={e => (e.currentTarget.style.border = '1px solid rgba(124,58,237,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)')}
              >
                <ProjectImage
                  images={'cycling' in proj && proj.cycling ? proj.images : [proj.images[0]]}
                  title={proj.title}
                  height={proj.wide ? 'h-[260px]' : 'h-[200px]'}
                  onImageClick={(idx) => setLightbox({ images: proj.images, title: proj.title, idx: 'cycling' in proj && proj.cycling ? idx : 0 })}
                />

                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.72rem] font-medium px-2.5 py-0.5 rounded-md text-[#9b5af5]"
                        style={{
                          background: 'rgba(124,58,237,0.15)',
                          border: '1px solid rgba(124,58,237,0.3)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-[1rem] font-bold text-[#e2e2f0] mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#7070a0] mb-3">{proj.description}</p>
                  {'link' in proj && proj.link && (
                    <Link
                      href={proj.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                      style={{ color: '#9b5af5' }}
                    >
                      View All 20+ Sites &#8594;
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          title={lightbox.title}
          startIdx={lightbox.idx}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
