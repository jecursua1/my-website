import FadeIn from '@/components/FadeIn'
import { services } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">What I Do</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: 'var(--text-primary)',
              }}
            >
              Services I Offer
            </h2>
            <p className="max-w-[520px] mx-auto text-[1.05rem]" style={{ color: 'var(--text-secondary)' }}>
              End-to-end solutions tailored to help your business operate efficiently and grow
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.08}>
              <div
                className="relative flex flex-col gap-3 p-8 rounded-[22px] h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: svc.featured
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))'
                    : 'var(--bg-surface)',
                  border: svc.featured
                    ? '1px solid rgba(124,58,237,0.4)'
                    : '1px solid var(--border)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {svc.featured && (
                  <span
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-white text-[0.72rem] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                  >
                    Most Popular
                  </span>
                )}
                <span className="text-[2rem]">{svc.icon}</span>
                <h3
                  className="text-[1.1rem] font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-primary)' }}
                >
                  {svc.title}
                </h3>
                <p className="text-[0.88rem] flex-1" style={{ color: 'var(--text-secondary)' }}>{svc.description}</p>
                <ul className="flex flex-col gap-1.5 mt-1">
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      className="text-[0.82rem] pl-3.5 relative"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="absolute left-0 text-[#9b5af5] text-[0.75rem]">&#9658;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-14">
            <p className="text-[0.97rem] mb-5" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring in a results-driven operations and growth expert?
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
