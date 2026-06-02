import FadeIn from '@/components/FadeIn'
import { clients, testimonials } from '@/lib/data'

export default function Clients() {
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

        {/* Client logos */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-5 mb-16">
            {clients.map((client) => (
              <div
                key={client}
                className="min-w-[130px] text-center text-[0.95rem] font-semibold text-[#7070a0] px-9 py-5 rounded-[14px] transition-all duration-300 hover:text-[#e2e2f0] cursor-default"
                style={{
                  background: '#12121f',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div
                className="p-7 rounded-[22px] transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col"
                style={{
                  background: '#12121f',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="text-amber-400 text-base tracking-[2px] mb-3.5">â˜…â˜…â˜…â˜…â˜…</div>
                <p className="text-[0.9rem] text-[#7070a0] italic leading-[1.7] flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <strong className="block text-[0.9rem] font-semibold text-[#e2e2f0]">{t.name}</strong>
                    <small className="text-xs text-[#7070a0]">{t.role}</small>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
