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
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center"
                >
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

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div
                className="p-7 rounded-[22px] transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col"
                style={{
                  background: '#12121f',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="text-amber-400 text-base tracking-[2px] mb-3.5">{'★★★★★'}</div>
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
