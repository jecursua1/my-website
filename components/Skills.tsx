'use client'

import { useEffect, useRef, useState } from 'react'
import FadeIn from '@/components/FadeIn'
import { technicalSkills, professionalSkills } from '@/lib/data'

function SkillBar({ name, level, accent }: { name: string; level: number; accent?: boolean }) {
  const barRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [count, setCount] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level)

          if (intervalRef.current) clearInterval(intervalRef.current)
          setCount(0)
          const duration = 2000
          const steps = 60
          const increment = level / steps
          let current = 0
          intervalRef.current = setInterval(() => {
            current += increment
            if (current >= level) {
              setCount(level)
              clearInterval(intervalRef.current!)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        } else {
          setWidth(0)
          setCount(0)
          if (intervalRef.current) clearInterval(intervalRef.current)
        }
      },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => {
      observer.disconnect()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [level])

  return (
    <div ref={barRef} className="flex flex-col gap-0">
      <div className="flex justify-between text-[0.87rem] font-medium mb-2">
        <span style={{ color: 'var(--text-primary)' }}>{name}</span>
        <span className="text-[#9b5af5] tabular-nums">{count}%</span>
      </div>
      <div
        className="h-[7px] rounded-full overflow-hidden"
        style={{ background: 'var(--bg-elevated)' }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
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
    <section id="skills" className="py-24" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">Expertise</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: 'var(--text-primary)',
              }}
            >
              Skills &amp; Proficiency
            </h2>
            <p className="max-w-[520px] mx-auto text-[1.05rem]" style={{ color: 'var(--text-secondary)' }}>
              Built through 6+ years of real-world experience across HR, SEO, operations, and technology
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          <FadeIn direction="left">
            <h4
              className="text-[1rem] font-bold mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-primary)' }}
            >
              Core Competencies
            </h4>
            <div className="flex flex-col gap-4">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <h4
              className="text-[1rem] font-bold mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-primary)' }}
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

      </div>
    </section>
  )
}
