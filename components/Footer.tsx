import Image from 'next/image'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jec-ursua/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01004a0946b64b5972?mp_source=share',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.706 2.706 0 0 1-2.704 2.702zm0-8.871c-2.88 0-5.15 1.893-5.923 4.66-.872-1.556-1.508-3.363-1.879-4.66H7.697v6.697c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5V5.287H0v6.697C0 14.43 2.058 16.5 4.986 16.5a4.99 4.99 0 0 0 4.989-4.987v-1.11c.366.716.8 1.437 1.313 2.102L9.43 18.7h2.604l1.168-4.932c1.148.778 2.469 1.234 3.892 1.234C20.219 15 22 13.243 22 10.834a4.374 4.374 0 0 0-3.439-4.547z"/>
      </svg>
    ),
  },
  {
    label: 'OnlineJobs.ph',
    href: 'https://www.onlinejobs.ph/jobseekers/info/2063018',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-10-2h4v2h-4V5zm10 14H4V9h16v10z"/>
        <path d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Newgate001/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jec_ursua/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-[1160px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-3 mb-4 w-fit group"
            >
              <Image
                src="/jec-logo.png"
                alt="Jerico Ursua Logo"
                width={120}
                height={120}
                className="flex-shrink-0"
              />
            </a>
            <p className="text-[0.9rem] text-[#7070a0] leading-[1.75] mb-5 max-w-[240px]">
              Chief of Staff, HR Executive &amp; SEO Specialist helping teams hire better, rank higher, and automate smarter.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[0.85rem] font-medium transition-colors duration-300"
              style={{ color: '#9b5af5' }}
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[0.75rem] font-bold uppercase tracking-widest text-[#7070a0] mb-5">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.9rem] text-[#9090b8] hover:text-[#e2e2f0] transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/about-me"
                className="text-[0.9rem] text-[#9090b8] hover:text-[#e2e2f0] transition-colors duration-300 w-fit"
              >
                My Story
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[0.75rem] font-bold uppercase tracking-widest text-[#7070a0] mb-5">
              Find Me On
            </p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[0.9rem] text-[#9090b8] hover:text-[#9b5af5] transition-colors duration-300 w-fit group"
                >
                  <span
                    className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[rgba(124,58,237,0.4)] group-hover:-translate-y-0.5"
                    style={{ border: '1.5px solid rgba(255,255,255,0.07)' }}
                  >
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1160px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.8rem] text-[#5050708]"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="text-[#50507a]">&copy; 2026 Jerico Ursua. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }}
          />
          <span className="text-[#50507a]">Available for freelance work</span>
        </div>
      </div>
    </footer>
  )
}
