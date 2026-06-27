import FadeIn from '@/components/FadeIn'

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-base)' }} className="py-24">
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* Video side */}
        <FadeIn direction="left">
          <div
            className="relative rounded-[22px] overflow-hidden"
            style={{
              paddingTop: '56.25%',
              background: 'var(--bg-surface)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              border: '1px solid var(--border)',
            }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.loom.com/embed/4a093d72015b47f6a420562b941dda32"
              title="Jec Ursua - Video Introduction"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <p className="text-center text-xs mt-3" style={{ color: 'var(--text-secondary)' }}>&#9654; Watch my intro</p>
        </FadeIn>

        {/* Copy */}
        <FadeIn direction="right">
          <div className="section-tag">About Me</div>
          <h2
            className="font-black leading-snug mb-5"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
              color: 'var(--text-primary)',
            }}
          >
            Operations, People &amp; Growth
            <br />
            All in One Role
          </h2>
          <p className="mb-4 text-[0.97rem]" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m a remote operations specialist with 6+ years of cross-functional experience
            across digital marketing agencies, SaaS platforms, and HR operations. I sit at the
            intersection of people leadership, technical execution, and organic search strategy,
            making me the kind of hire that scales with a business, not just fills a seat.
          </p>
          <p className="mb-6 text-[0.97rem]" style={{ color: 'var(--text-secondary)' }}>
            I build the systems that keep teams running, from full-cycle recruitment and payroll
            to SEO campaigns, Next.js web operations, and AI-powered workflow automation. Promoted
            twice in under two years by consistently taking ownership, solving the right problems,
            and delivering results that stick.
          </p>

          {/* Trait tags */}
          <div className="flex flex-wrap gap-2.5 mb-7">
            {[
              'Problem Solver',
              'Strategic Thinker',
              'Detail-Oriented',
              'Results-Driven',
              'Collaborative',
              'Adaptable',
              'Fast Learner',
            ].map((trait) => (
              <span
                key={trait}
                className="text-[0.83rem] font-medium px-3.5 py-1.5 rounded-lg"
                style={{
                  color: 'var(--text-primary)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                }}
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
              }}
            >
              Get In Touch &#8594;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
