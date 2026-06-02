import FadeIn from '@/components/FadeIn'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080810]">
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* Video side */}
        <FadeIn direction="left">
          <div
            className="relative rounded-[22px] overflow-hidden bg-[#12121f]"
            style={{
              paddingTop: '56.25%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Replace src with your YouTube embed: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Jec Ursua â€” Video Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-xs text-[#7070a0] mt-3">â–¶ Watch my intro</p>
        </FadeIn>

        {/* Copy */}
        <FadeIn direction="right">
          <div className="section-tag">About Me</div>
          <h2
            className="font-black leading-snug mb-5"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
            }}
          >
            Building Efficient Teams &amp;
            <br />
            Digital Systems That Work
          </h2>
          <p className="text-[#7070a0] mb-4 text-[0.97rem]">
            I&apos;m an experienced Virtual &amp; Executive Assistant with a background in HR,
            recruitment, SEO, and workflow automation. With 5+ years of hands-on experience across
            multiple industries and countries, I help businesses streamline operations, find the
            right talent, and establish a strong digital presence.
          </p>
          <p className="text-[#7070a0] mb-6 text-[0.97rem]">
            Whether it&apos;s managing executive schedules, running end-to-end recruitment,
            optimizing SEO strategies, or automating workflows with Zapier and GoHighLevel â€” I
            bring the same dedication and attention to detail to every engagement.
          </p>

          {/* Trait tags */}
          <div className="flex flex-wrap gap-2.5 mb-7">
            {['Problem Solver', 'Detail-Oriented', 'Results-Driven', 'Collaborative', 'Adaptable'].map(
              (trait) => (
                <span
                  key={trait}
                  className="text-[0.83rem] font-medium text-[#e2e2f0] px-3.5 py-1.5 rounded-lg"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {trait}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
              }}
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.95rem] font-semibold text-[#e2e2f0] transition-all duration-300 hover:text-[#9b5af5] hover:border-primary-2"
              style={{ border: '1.5px solid rgba(255,255,255,0.07)' }}
            >
              Get In Touch â†’
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
