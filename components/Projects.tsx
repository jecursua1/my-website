'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import { projects } from '@/lib/data'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'hr', label: 'HR & Recruitment' },
  { key: 'seo', label: 'SEO' },
  { key: 'automation', label: 'Automation' },
]

function ProjectImage({ images, title, height }: { images: string[]; title: string; height: string }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className={`relative overflow-hidden ${height}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0 }}
          priority={i === 0}
        />
      ))}
      {/* Dot indicators for multi-image */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i === idx ? '#fff' : 'rgba(255,255,255,0.35)',
                transform: i === idx ? 'scale(1.3)' : 'scale(1)',
              }}
              aria-label={`View screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = projects.filter((p) => active === 'all' || p.category === active)

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
                {/* Screenshot */}
                <ProjectImage
                  images={proj.images}
                  title={proj.title}
                  height={proj.wide ? 'h-[260px]' : 'h-[200px]'}
                />

                {/* Info */}
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
                  <p className="text-[0.85rem] text-[#7070a0]">{proj.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
