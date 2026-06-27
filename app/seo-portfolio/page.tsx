import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Client Portfolio | Jerico Ursua',
  description: 'Real clients we helped grow at Sublime SEO, covering on-page optimization, off-page, technical SEO, keyword research, and data benchmarking.',
}

const clients = [
  { slug: 'anodyneshoes-com',       name: 'Anodyne Shoes',        url: 'https://www.anodyneshoes.com/' },
  { slug: 'armaghpos-com',          name: 'Armagh POS Solutions',  url: 'https://armaghpos.com/' },
  { slug: 'scienciaconsulting-com', name: 'Sciencia Consulting',  url: 'https://scienciaconsulting.com/' },
  { slug: 'eduardobessermd-com',    name: 'Eduardo Besser MD',    url: 'https://www.eduardobessermd.com/' },
  { slug: '414eyes-com',            name: '414 Eyes',             url: 'https://414eyes.com/' },
  { slug: 'hireremoteraven-com',    name: 'Remote Raven',          url: 'https://hireremoteraven.com/' },
  { slug: 'nenawellness-com',       name: 'Nena Wellness & Recovery', url: 'https://www.nenawellness.com/' },
  { slug: 'centerpointerecovery-com', name: 'Centerpoint Recovery', url: 'https://centerpointerecovery.com/' },
  { slug: 'milcasastore-com',       name: 'Milcasa Store',         url: 'https://milcasastore.com/' },
  { slug: 'whattheputt-com-au',     name: 'What The Putt',        url: 'https://www.whattheputt.com.au/' },
  { slug: 'laketravisdentistry-com',name: 'Lake Travis Dentistry',url: 'https://laketravisdentistry.com/' },
  { slug: '2cabinetgirls-com',      name: '2 Cabinet Girls',      url: 'https://www.2cabinetgirls.com/' },
  { slug: 'yourequity-ca',          name: 'Your Equity',          url: 'https://yourequity.ca/' },
  { slug: 'sublimeseo-ca',          name: 'Sublime SEO',          url: 'https://sublimeseo.ca/' },
  { slug: 'southwelllaw-com',       name: 'Southwell Law',        url: 'https://southwelllaw.com/' },
  { slug: 'fayedigital-com',        name: 'Faye Digital',         url: 'https://fayedigital.com/' },
  { slug: 'safeseal-net',           name: 'Safe Seal',            url: 'https://safeseal.net/' },
  { slug: 'superfresh-co',          name: 'Super Fresh',          url: 'https://www.superfresh.co/' },
  { slug: 'sweatblock-com',         name: 'Sweat Block',          url: 'https://sweatblock.com/' },
  { slug: 'temporarytattoos-com',   name: 'Temporary Tattoos',    url: 'https://www.temporarytattoos.com/' },
  { slug: 'flaxlabs-com',           name: 'Flax Labs',            url: 'https://www.flaxlabs.com/' },
  { slug: 'dogoodagency-co',        name: 'Do Good Agency',       url: 'https://www.dogoodagency.co/' },
  { slug: 'luxereduxbridal-com',    name: 'Luxe Redux Bridal',    url: 'https://luxereduxbridal.com/' },
]

const services = [
  'On-Page Optimization',
  'Off-Page Optimization',
  'Technical SEO',
  'Keyword Research',
  'Data Benchmarking',
  'Site Audit',
]

export default function SeoPortfolioPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>

      {/* Header */}
      <div
        className="relative overflow-hidden px-6 pt-12 pb-16"
        style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.16) 0%, rgba(0,0,0,0) 100%)' }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-[1160px] mx-auto relative">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors mb-10"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Portfolio
          </Link>

          <h1
            className="font-black mb-4 leading-tight max-w-[700px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--text-primary)' }}
          >
            SEO Client Work
          </h1>
          <p className="text-[1.05rem] mb-8 leading-relaxed max-w-[580px]" style={{ color: 'var(--text-secondary)' }}>
            Real clients we helped grow at Sublime SEO. From on-page optimization and technical audits to keyword strategy and link building, these are websites we actively managed and improved.
          </p>

          {/* Services tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {services.map(s => (
              <span
                key={s}
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', color: '#22d3ee' }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-12">
            {[
              { value: '20+', label: 'Websites Managed' },
              { value: '6', label: 'SEO Services' },
              { value: '5+', label: 'Industries Served' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="font-black mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 3vw, 2.6rem)', background: 'linear-gradient(135deg, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {value}
                </div>
                <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1160px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {clients.map((client) => (
            <a
              key={client.slug}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-600/40"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Screenshot */}
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={`/seo-portfolio/${client.slug}.webp`}
                  alt={client.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.5)' }}
                >
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    Visit Site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="px-4 py-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{client.name}</p>
                <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-secondary)' }}>{new URL(client.url).hostname.replace('www.', '')}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-20">
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Want results like these for your website?</p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', boxShadow: '0 4px 24px rgba(124,58,237,0.4)' }}
        >
          Let&apos;s Work Together &#8594;
        </Link>
      </div>
    </main>
  )
}
