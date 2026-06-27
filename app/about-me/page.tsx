import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Jec Ursua | The Story Behind the Work',
  description: 'From an HRDM graduate who never planned a career in HR, to Chief of Staff serving global digital marketing agencies — this is the story of Jec Ursua.',
}

const stats = [
  { value: '6+', label: 'Years of Experience' },
  { value: '20+', label: 'Clients Served' },
  { value: '6+', label: 'Companies' },
  { value: '3', label: 'Industries Mastered' },
]

export default function AboutMePage() {
  return (
    <main style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif' }}>

      {/* Nav back */}
      <div className="max-w-[900px] mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.85rem] hover:text-[#9b5af5] transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          &#8592; Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-[900px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            className="relative w-[260px] h-[260px] rounded-full overflow-hidden flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              boxShadow: '0 0 60px rgba(124,58,237,0.35)',
            }}
          >
            <Image
              src="/profile.png"
              alt="Jec Ursua"
              fill
              sizes="260px"
              className="object-cover object-top scale-[1.18] origin-top"
              priority
            />
          </div>
          <div>
            <div className="section-tag inline-flex mb-4">My Story</div>
            <h1
              className="font-black mb-4 leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--text-primary)',
              }}
            >
              The Story Behind<br />
              <span className="hero-grad-text">the Work</span>
            </h1>
            <p className="text-[1.05rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              From an accidental HR career to Chief of Staff at global agencies. This is the real journey of how Jec Ursua got here.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[900px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-black text-[2.2rem] leading-none mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </p>
              <p className="text-[0.8rem] uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <article className="max-w-[720px] mx-auto px-6 py-20">

        <StoryBlock label="The Beginning">
          <p>
            My name is Jerico Ursua, but everyone calls me <strong style={{ color: 'var(--text-primary)' }}>Jec</strong>. I studied Business Administration
            majoring in Human Resource Development Management at Pangasinan State University, San Carlos Campus.
          </p>
          <p>
            Honestly? HR was never the career I imagined for myself. I didn&apos;t choose it out of passion. I chose it
            without really knowing where it would take me. What I didn&apos;t expect was how much it would shape everything that followed.
          </p>
        </StoryBlock>

        <StoryBlock label="First Steps & First Doubts">
          <p>
            After graduating, I landed my first job as an <strong style={{ color: 'var(--text-primary)' }}>HR Assistant at a retail company</strong>,
            helping manage over 100 employees. On paper, it was a solid start. But deep down, something felt off.
            That environment wasn&apos;t where I was meant to be. After a couple of months, I resigned.
          </p>
          <p>
            Then the pandemic hit.
          </p>
          <p>
            Jobless during one of the hardest periods in modern history, I turned to the stock market and became a{' '}
            <strong style={{ color: 'var(--text-primary)' }}>day trader</strong>{' '}to keep income flowing. It wasn&apos;t easy,
            but it taught me discipline, risk management, and how to think strategically under pressure.
          </p>
        </StoryBlock>

        <StoryBlock label="The Wake-Up Call">
          <p>
            I eventually landed another role as an <strong style={{ color: 'var(--text-primary)' }}>HR Admin at a construction company</strong>.
            I stayed for a year, performed well, but the same feeling crept back in.
            On-site work, a salary that barely moved the needle no matter how hard I worked. It just wasn&apos;t the life I envisioned.
          </p>
          <p>
            I had a dream. Not just a vague wish. A real, burning desire to become financially free. To buy anything I want without
            worrying about the price tag. To treat the people I love without checking my balance first.
            To live on my own terms, not on what my salary permitted.
          </p>
          <blockquote
            className="my-8 pl-5 italic text-[1.1rem] leading-relaxed"
            style={{ borderLeft: '3px solid #7c3aed', color: 'var(--text-primary)' }}
          >
            &ldquo;Life is like this, and I like this.&rdquo;
            <span className="block text-[0.82rem] not-italic mt-2" style={{ color: 'var(--text-secondary)' }}>— Harvey Specter</span>
          </blockquote>
          <p>
            That quote hit differently when I first heard it. It wasn&apos;t just a line from a TV show.
            It became a blueprint for how I wanted to live.
          </p>
        </StoryBlock>

        <StoryBlock label="The Leap into Freelancing">
          <p>
            Still employed as an HR Admin, I started mapping my way out: work abroad, start a business,
            go all-in on trading, or explore this thing called <strong style={{ color: 'var(--text-primary)' }}>remote freelancing</strong>.
          </p>
          <p>
            I went deep. I studied how it worked, who was doing it, and what skills I already had that could translate.
            The more I learned, the more I knew this was the path. When I finally resigned and committed full-time to
            freelancing, there was no looking back.
          </p>
        </StoryBlock>

        <StoryBlock label="Where It Led">
          <p>
            The journey wasn&apos;t overnight, but it was worth every uncomfortable moment. Today, I work as
            <strong style={{ color: 'var(--text-primary)' }}> Chief of Staff</strong> for powerful digital marketing agencies, including
            teams that serve clients like <strong style={{ color: 'var(--text-primary)' }}>Neil Patel</strong>. I handle operations,
            recruitment, SEO, web development, AI automation, and everything in between.
          </p>
          <p>
            The life I once dreamed about? I&apos;m living it. Brand new car. My own businesses up and running.
            The freedom to show up fully for the people I care about.
            I&apos;m not telling you this to brag. I&apos;m telling you because not long ago, I was jobless during a pandemic,
            grinding as a day trader just to stay afloat.
          </p>
        </StoryBlock>

        <StoryBlock label="Beyond the Work">
          <p>
            What people don&apos;t always know about me is that my <strong style={{ color: 'var(--text-primary)' }}>real dream has always been music</strong>.
            I&apos;m a musician at heart. One day I want to perform on a big stage, with crowds singing along with my band.
            The kind of moment that gives you chills just imagining it.
          </p>
          <p>
            I haven&apos;t given up on that. I never will. Timing is everything,
            and opportunities find the people who never stop showing up.
          </p>
        </StoryBlock>

        {/* Closing philosophy */}
        <div
          className="mt-16 p-8 rounded-[18px] text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.06))',
            border: '1px solid rgba(124,58,237,0.25)',
          }}
        >
          <p className="text-[1.15rem] leading-relaxed italic mb-4" style={{ color: 'var(--text-primary)' }}>
            &ldquo;If you have the ability to do it, do it. Don&apos;t settle for less. Aim higher.&rdquo;
          </p>
          <span className="text-[0.85rem]" style={{ color: 'var(--text-secondary)' }}>— Jec Ursua</span>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-[1rem]" style={{ color: 'var(--text-secondary)' }}>
            Want to work with someone who has lived this journey?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
              }}
            >
              Let&apos;s Work Together &#8594;
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] text-[0.95rem] font-semibold transition-all duration-300 hover:text-[#9b5af5]"
              style={{ border: '1.5px solid var(--border)', color: 'var(--text-primary)' }}
            >
              View My Portfolio
            </Link>
          </div>
        </div>

      </article>
    </main>
  )
}

function StoryBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }} />
        <h2
          className="text-[0.75rem] font-bold uppercase tracking-widest"
          style={{ color: '#9b5af5' }}
        >
          {label}
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-[1rem] leading-[1.85] pl-5" style={{ color: 'var(--text-secondary)', borderLeft: '1px solid var(--border-subtle)' }}>
        {children}
      </div>
    </div>
  )
}
