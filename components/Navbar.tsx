'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from '@/components/ThemeProvider'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggle } = useTheme()
  const activeSectionRef = useRef('home')

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
        if (scrollY >= top && scrollY < top + height && id !== activeSectionRef.current) {
          activeSectionRef.current = id
          setActiveSection(id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
      style={{
        background: theme === 'dark' ? 'rgba(8,8,16,0.92)' : 'rgba(244,244,252,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 group"
          style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <Image
            src="/jec-logo.png"
            alt="Jerico Ursua Logo"
            width={160}
            height={160}
            className="flex-shrink-0 transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(167,139,250,0.6)] w-[100px] md:w-[130px] h-auto"
            priority
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer"
              style={{
                color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/about-me"
            className="text-sm font-medium transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
          >
            My Story
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-none"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-none"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              boxShadow: '0 4px 16px rgba(124,58,237,0.35)',
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile right side: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer border-none"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-1.5 p-1 z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
              style={{ background: 'var(--text-primary)' }}
            />
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
              style={{ background: 'var(--text-primary)' }}
            />
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
              style={{ background: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col items-center gap-7 py-8"
          style={{
            background: theme === 'dark' ? 'rgba(8,8,16,0.97)' : 'rgba(244,244,252,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); closeMenu() }}
              className="text-xl font-medium transition-colors bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/about-me"
            onClick={closeMenu}
            className="text-xl font-medium transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            My Story
          </Link>
          <button
            onClick={() => { scrollTo('contact'); closeMenu() }}
            className="text-white font-semibold px-6 py-3 rounded-lg border-none cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  )
}
