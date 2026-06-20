import FadeIn from '@/components/FadeIn'
import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#080810]">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">My Journey</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              }}
            >
              Work Experience
            </h2>
            <p className="text-[#7070a0] max-w-[520px] mx-auto text-[1.05rem]">
              A track record of delivering results across diverse industries and countries
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative max-w-[820px] mx-auto">
          {/* Vertical line â€” hidden on mobile */}
          <div
            className="absolute left-3.5 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          />
          {/* Mobile vertical line */}
          <div
            className="absolute left-3.5 top-0 bottom-0 w-0.5 md:hidden"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isOdd = i % 2 === 0
              return (
                <FadeIn key={`${exp.company}-${exp.period}`} direction={isOdd ? 'left' : 'right'} delay={0.05}>
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6 items-start">
                    <div
                      className="w-7 h-7 rounded-full flex-shrink-0 mt-1"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                        boxShadow: '0 0 0 4px rgba(124,58,237,0.2)',
                      }}
                    />
                    <TlBody exp={exp} />
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden md:grid grid-cols-[1fr_28px_1fr] gap-x-6 items-start">
                    {isOdd ? (
                      <>
                        <div className="text-right">
                          <TlBody exp={exp} align="right" />
                        </div>
                        <TlDot />
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <TlDot />
                        <div>
                          <TlBody exp={exp} align="left" />
                        </div>
                      </>
                    )}
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TlDot() {
  return (
    <div
      className="w-7 h-7 rounded-full justify-self-center mt-1 flex-shrink-0"
      style={{
        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
        boxShadow: '0 0 0 4px rgba(124,58,237,0.2)',
      }}
    />
  )
}

function TlBody({
  exp,
  align = 'left',
}: {
  exp: (typeof experiences)[number]
  align?: 'left' | 'right'
}) {
  const isRight = align === 'right'
  return (
    <div
      className="p-6 rounded-[14px]"
      style={{
        background: '#12121f',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className={`flex items-center gap-2.5 mb-2.5 flex-wrap ${isRight ? 'justify-end' : ''}`}>
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
        className="text-[1.05rem] font-bold text-[#e2e2f0] mb-1"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {exp.title}
      </h3>
      <p className="text-xs text-[#9b5af5] mb-2.5">
        {exp.company} · {exp.location}
      </p>
      <p className="text-[0.87rem] text-[#7070a0] mb-3.5">{exp.description}</p>
      <div className={`flex flex-wrap gap-1.5 ${isRight ? 'justify-end' : ''}`}>
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.75rem] px-2.5 py-0.5 rounded-md text-[#e2e2f0]"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
