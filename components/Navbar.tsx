'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    const path = id === 'home' ? '/' : `/${id}`
    window.history.pushState(null, '', path)
  }
}

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
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id)
          const path = id === 'home' ? '/' : `/${id}`
          window.history.replaceState(null, '', path)
        }
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
              className={`text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-[#7070a0] hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/about-me"
            className="text-sm font-medium text-[#7070a0] hover:text-white transition-colors duration-300"
          >
            My Story
          </Link>
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
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); closeMenu() }}
              className="text-xl font-medium text-[#e2e2f0] hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/about-me"
            onClick={closeMenu}
            className="text-xl font-medium text-[#e2e2f0] hover:text-white transition-colors"
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
