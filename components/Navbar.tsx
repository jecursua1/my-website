'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#clients', label: 'Clients' },
  { href: '#skills', label: 'Skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 100
      sections.forEach((section) => {
        const el = section as HTMLElement
        const top = el.offsetTop
        const height = el.offsetHeight
        const id = el.getAttribute('id') || ''
        if (scrollY >= top && scrollY < top + height) setActiveSection(id)
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
      style={{
        background: 'rgba(8,8,16,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          style={{ textDecoration: 'none' }}
        >
          {/* Monogram oval badge */}
          <svg
            width="62" height="50"
            viewBox="0 0 62 50"
            fill="none"
            className="flex-shrink-0 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.6)]"
          >
            {/* Dark navy oval background */}
            <ellipse cx="31" cy="25" rx="30" ry="24" fill="#0e0820"/>
            {/* Oval border */}
            <ellipse cx="31" cy="25" rx="30" ry="24" stroke="url(#navOvalGrad)" strokeWidth="1.6"/>
            {/* J — serif, bold, left side */}
            <text
              x="13" y="36"
              fontFamily="Georgia, 'Times New Roman', 'Palatino Linotype', serif"
              fontWeight="bold"
              fontSize="30"
              fill="url(#navLetterGrad)"
            >J</text>
            {/* U — serif, bold, right side, slightly overlapping J */}
            <text
              x="27" y="36"
              fontFamily="Georgia, 'Times New Roman', 'Palatino Linotype', serif"
              fontWeight="bold"
              fontSize="30"
              fill="url(#navLetterGrad)"
            >U</text>
            <defs>
              <linearGradient id="navOvalGrad" x1="0" y1="0" x2="62" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a78bfa"/>
                <stop offset="100%" stopColor="#38bdf8"/>
              </linearGradient>
              <linearGradient id="navLetterGrad" x1="0" y1="0" x2="62" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c4b5fd"/>
                <stop offset="100%" stopColor="#67e8f9"/>
              </linearGradient>
            </defs>
          </svg>
          {/* Name */}
          <div className="flex flex-col leading-none gap-[3px]">
            <span
              className="text-[0.58rem] font-bold uppercase tracking-[0.22em]"
              style={{ color: '#6060a0' }}
            >
              Jerico
            </span>
            <span
              className="text-[1rem] font-black uppercase tracking-[0.1em] text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ursua
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-white'
                  : 'text-[#7070a0] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/about-me"
            className="text-sm font-medium text-[#7070a0] hover:text-white transition-colors duration-300"
          >
            My Story
          </Link>
          <a
            href="#contact"
            className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              boxShadow: '0 4px 16px rgba(124,58,237,0.35)',
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col items-center gap-7 py-8"
          style={{
            background: 'rgba(8,8,16,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-xl font-medium text-[#e2e2f0] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/about-me"
            onClick={closeMenu}
            className="text-xl font-medium text-[#e2e2f0] hover:text-white transition-colors"
          >
            My Story
          </Link>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-white font-semibold px-6 py-3 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
