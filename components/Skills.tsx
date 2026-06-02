'use client'

import { useEffect, useRef, useState } from 'react'
import FadeIn from '@/components/FadeIn'
import { technicalSkills, professionalSkills, badgeGroups } from '@/lib/data'

function SkillBar({ name, level, accent }: { name: string; level: number; accent?: boolean }) {
  const barRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 100)
        }
      },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={barRef} className="flex flex-col gap-0">
      <div className="flex justify-between text-[0.87rem] font-medium mb-2">
        <span className="text-[#e2e2f0]">{name}</span>
        <span className="text-[#9b5af5]">{level}%</span>
      </div>
      <div
        className="h-[7px] rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            width: `${width}%`,
            background: accent
              ? 'linear-gradient(90deg, #06b6d4, #22d3ee)'
              : 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#080810]">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">Expertise</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              }}
            >
              Skills &amp; Proficiency
            </h2>
            <p className="text-[#7070a0] max-w-[520px] mx-auto text-[1.05rem]">
              A snapshot of my professional and technical capabilities
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          <FadeIn direction="left">
            <h4
              className="text-[1rem] font-bold text-[#e2e2f0] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Core Services
            </h4>
            <div className="flex flex-col gap-4">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h4
              className="text-[1rem] font-bold text-[#e2e2f0] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Professional Skills
            </h4>
            <div className="flex flex-col gap-4">
              {professionalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} accent />
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Badges */}
        <FadeIn>
          <div
            className="flex flex-col gap-6 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {badgeGroups.map((group) => (
              <div key={group.label} className="flex flex-wrap items-center gap-3">
                <h5 className="text-[0.78rem] font-bold uppercase tracking-widest text-[#7070a0] min-w-[110px]">
                  {group.label}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[0.82rem] px-3.5 py-1.5 rounded-lg"
                      style={{
                        background: group.highlight
                          ? 'rgba(6,182,212,0.1)'
                          : 'rgba(255,255,255,0.05)',
                        border: group.highlight
                          ? '1px solid rgba(6,182,212,0.3)'
                          : '1px solid rgba(255,255,255,0.07)',
                        color: group.highlight ? '#22d3ee' : '#e2e2f0',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
