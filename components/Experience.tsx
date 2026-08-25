'use client'

import { Fragment } from 'react'
import FadeIn from '@/components/FadeIn'
import { experiences, type GroupedExperience, type SingleExperience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">My Journey</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: 'var(--text-primary)',
              }}
            >
              Work Experience
            </h2>
            <p className="max-w-[520px] mx-auto text-[1.05rem]" style={{ color: 'var(--text-secondary)' }}>
              A track record of delivering results across diverse industries and countries
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative max-w-[820px] mx-auto">
          {/* Desktop center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{ background: 'var(--border)' }}
          />
          {/* Mobile left line */}
          <div
            className="absolute left-3.5 top-0 bottom-0 w-0.5 md:hidden"
            style={{ background: 'var(--border)' }}
          />

          <div className="flex flex-col gap-12 md:grid md:grid-cols-[1fr_28px_1fr] md:gap-x-6 md:gap-y-12">
            {experiences.map((exp, i) => {
              const isOdd = i % 2 === 0
              const key = exp.grouped ? exp.company : `${exp.company}-${exp.period}`
              const card = exp.grouped
                ? <GroupedBody exp={exp} align={isOdd ? 'right' : 'left'} />
                : <SingleBody exp={exp} align={isOdd ? 'right' : 'left'} />

              return (
                <Fragment key={key}>
                  {isOdd ? (
                    <>
                      <FadeIn direction="left" delay={0.05}>
                        <div className="flex gap-6 items-start md:block">
                          <InlineDot />
                          <div className="flex-1 min-w-0">{card}</div>
                        </div>
                      </FadeIn>
                      <CenterDot />
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <CenterDot />
                      <FadeIn direction="right" delay={0.05}>
                        <div className="flex gap-6 items-start md:block">
                          <InlineDot />
                          <div className="flex-1 min-w-0">{card}</div>
                        </div>
                      </FadeIn>
                    </>
                  )}
                </Fragment>
              )
            })}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-14">
            <p className="text-[0.97rem] mb-5" style={{ color: 'var(--text-secondary)' }}>
              Interested in adding this track record to your team?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
              }}
            >
              Let&apos;s Work Together &#8594;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/** Dot shown inline on mobile (hidden on desktop) */
function InlineDot() {
  return (
    <div
      className="md:hidden w-7 h-7 rounded-full flex-shrink-0 mt-1"
      style={{
        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
        boxShadow: '0 0 0 4px rgba(124,58,237,0.2)',
      }}
    />
  )
}

/** Dot in the center grid column on desktop (hidden on mobile) */
function CenterDot() {
  return (
    <div className="hidden md:flex justify-center items-start pt-1">
      <div
        className="w-7 h-7 rounded-full flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          boxShadow: '0 0 0 4px rgba(124,58,237,0.2)',
        }}
      />
    </div>
  )
}

function TagList({ tags, align }: { tags: string[]; align: 'left' | 'right' }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'md:justify-end' : ''}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[0.75rem] px-2.5 py-0.5 rounded-md"
          style={{
            color: 'var(--text-primary)',
            background: 'var(--bg-base)',
            border: '1px solid var(--border)',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function SingleBody({ exp, align = 'left' }: { exp: SingleExperience; align?: 'left' | 'right' }) {
  const isRight = align === 'right'
  return (
    <div
      className="w-full rounded-[14px] overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:-translate-y-1 cursor-default"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        willChange: 'transform',
      }}
      onMouseEnter={e => (e.currentTarget.style.border = '1px solid rgba(124,58,237,0.4)')}
      onMouseLeave={e => (e.currentTarget.style.border = '1px solid var(--border)')}
    >
      {/* Company header */}
      <div
        className={`px-6 py-3 flex items-center gap-2 flex-wrap ${isRight ? 'md:justify-end' : ''}`}
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06))',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span className="text-[0.85rem] font-bold" style={{ color: '#9b5af5' }}>{exp.company}</span>
        <span className="text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>&#183; {exp.location}</span>
      </div>

      {/* Role content */}
      <div className="px-6 py-5">
        <div className={`flex items-center gap-2.5 mb-2.5 flex-wrap ${isRight ? 'md:justify-end' : ''}`}>
          <span className="text-xs font-semibold text-[#9b5af5]">{exp.period}</span>
          <span
            className="text-[0.72rem] px-2.5 py-0.5 rounded-full"
            style={{
              background: 'rgba(6,182,212,0.12)',
              border: '1px solid rgba(6,182,212,0.25)',
              color: '#22d3ee',
            }}
          >
            {exp.type}
          </span>
        </div>
        <h3
          className="text-[1.05rem] font-bold mb-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-primary)' }}
        >
          {exp.title}
        </h3>
        <p className="text-[0.87rem] mb-3.5" style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
        <TagList tags={exp.tags} align={align} />
      </div>
    </div>
  )
}

function GroupedBody({ exp, align = 'left' }: { exp: GroupedExperience; align?: 'left' | 'right' }) {
  const isRight = align === 'right'
  return (
    <div
      className="w-full rounded-[14px] overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:-translate-y-1 cursor-default"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        willChange: 'transform',
      }}
      onMouseEnter={e => (e.currentTarget.style.border = '1px solid rgba(124,58,237,0.4)')}
      onMouseLeave={e => (e.currentTarget.style.border = '1px solid var(--border)')}
    >
      {/* Company header */}
      <div
        className={`px-6 py-3 flex items-center gap-2 flex-wrap ${isRight ? 'md:justify-end' : ''}`}
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06))',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span className="text-[0.85rem] font-bold" style={{ color: '#9b5af5' }}>{exp.company}</span>
        <span className="text-[0.75rem]" style={{ color: 'var(--text-secondary)' }}>&#183; {exp.location}</span>
      </div>

      {/* Roles */}
      <div className="flex flex-col">
        {exp.roles.map((role, i) => (
          <div
            key={role.title}
            className="px-6 py-5"
            style={{ borderTop: i > 0 ? '1px solid var(--border-subtle)' : undefined }}
          >
            {(role.period.includes('Present') || i > 0) && (
              <div className={`flex mb-2 ${isRight ? 'md:justify-end' : ''}`}>
                <span
                  className="text-[0.68rem] px-2 py-0.5 rounded-full font-medium"
                  style={
                    role.period.includes('Present')
                      ? { background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }
                      : { background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#a78bfa' }
                  }
                >
                  {role.period.includes('Present') ? 'Current Role' : 'Previous Role'}
                </span>
              </div>
            )}
            <div className={`flex items-center gap-2.5 mb-1.5 flex-wrap ${isRight ? 'md:justify-end' : ''}`}>
              <span className="text-xs font-semibold text-[#9b5af5]">{role.period}</span>
              <span
                className="text-[0.72rem] px-2.5 py-0.5 rounded-full"
                style={{
                  background: 'rgba(6,182,212,0.12)',
                  border: '1px solid rgba(6,182,212,0.25)',
                  color: '#22d3ee',
                }}
              >
                {role.type}
              </span>
            </div>
            <h3
              className="text-[1.05rem] font-bold mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-primary)' }}
            >
              {role.title}
            </h3>
            <p className="text-[0.87rem] mb-3" style={{ color: 'var(--text-secondary)' }}>{role.description}</p>
            <TagList tags={role.tags} align={align} />
          </div>
        ))}
      </div>
    </div>
  )
}
