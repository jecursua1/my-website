import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { label: 'in', href: personalInfo.linkedin, title: 'LinkedIn' },
  { label: 'GH', href: '#', title: 'GitHub' },
  { label: 'UW', href: '#', title: 'Upwork' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#12121f', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-[1160px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-black text-2xl text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              JU<span className="text-[#7c3aed]">.</span>
            </a>
            <p className="text-[0.88rem] text-[#7070a0] mt-3 leading-[1.7]">
              Building efficient teams and digital systems
              <br />
              that make a difference.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2.5 md:items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.88rem] text-[#7070a0] hover:text-[#e2e2f0] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-2.5 md:justify-end">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target={s.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.title}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-[#7070a0] transition-all duration-300 hover:text-[#9b5af5] hover:-translate-y-0.5"
                style={{ border: '1.5px solid rgba(255,255,255,0.07)' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1160px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.8rem] text-[#7070a0]"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p>Â© 2026 Jec Ursua. All rights reserved.</p>
        <p>Available for freelance work</p>
      </div>
    </footer>
  )
}
