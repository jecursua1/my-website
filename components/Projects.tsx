'use client'

import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import { projects } from '@/lib/data'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'hr', label: 'HR & Recruitment' },
  { key: 'seo', label: 'SEO' },
  { key: 'automation', label: 'Automation' },
]

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
                  active === f.key
                    ? 'text-white'
                    : 'text-[#7070a0] hover:text-white'
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
              >
                {/* Project image / color block */}
                <div
                  className={`relative overflow-hidden flex items-center justify-center ${
                    proj.wide ? 'h-[260px]' : 'h-[220px]'
                  } bg-gradient-to-br ${proj.colorClass}`}
                >
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.6)' }}
                  >
                    <span
                      className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300"
                      style={{ border: '1.5px solid rgba(255,255,255,0.5)' }}
                    >
                      View Project â†’
                    </span>
                  </div>
                  {/* Icon in center */}
                  <span className="text-5xl opacity-20">
                    {proj.category === 'hr' ? 'ðŸ‘¥' : proj.category === 'seo' ? 'ðŸ”' : 'ðŸ¤–'}
                  </span>
                </div>

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
