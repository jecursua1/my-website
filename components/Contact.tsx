'use client'

import { useState, FormEvent } from 'react'
import FadeIn from '@/components/FadeIn'
import { personalInfo } from '@/lib/data'

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'cos', label: 'Chief of Staff & Operations' },
  { value: 'seo', label: 'SEO Strategy' },
  { value: 'hr', label: 'HR & People Operations' },
  { value: 'web', label: 'Web & System Development' },
  { value: 'automation', label: 'Automation & Workflow' },
  { value: 'ai', label: 'AI Integration & Prompting' },
  { value: 'other', label: 'Other' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jec-ursua/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.706 2.706 0 0 1-2.704 2.702zm0-8.871c-2.88 0-5.15 1.893-5.923 4.66-.872-1.556-1.508-3.363-1.879-4.66H7.697v6.697c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5V5.287H0v6.697C0 14.43 2.058 16.5 4.986 16.5a4.99 4.99 0 0 0 4.989-4.987v-1.11c.366.716.8 1.437 1.313 2.102L9.43 18.7h2.604l1.168-4.932c1.148.778 2.469 1.234 3.892 1.234C20.219 15 22 13.243 22 10.834a4.374 4.374 0 0 0-3.439-4.547z"/>
      </svg>
    ),
  },
  {
    label: 'OnlineJobs.ph',
    href: 'https://www.onlinejobs.ph/jobseekers/info/2063018',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-10-2h4v2h-4V5zm10 14H4V9h16v10z"/>
        <path d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Newgate001/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jec_ursua/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

const contactItems = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: personalInfo.locationShort,
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: personalInfo.availability,
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  const inputStyle = {
    background: 'var(--bg-elevated)',
    border: '1.5px solid var(--border)',
    borderRadius: '10px',
    padding: '13px 16px',
    color: 'var(--text-primary)',
    fontSize: '0.92rem',
    fontFamily: 'inherit',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s',
  }

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn once={false}>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">Get In Touch</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: 'var(--text-primary)',
              }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="max-w-[520px] mx-auto text-[1.05rem]" style={{ color: 'var(--text-secondary)' }}>
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* Contact info */}
          <FadeIn direction="left" once={false}>
            <div
              className="flex flex-col gap-5 p-7 rounded-[22px] mb-5"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            >
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 mt-0.5 text-[#9b5af5]"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <small className="block text-[0.75rem] uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {item.label}
                    </small>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[0.9rem] font-medium hover:text-[#9b5af5] transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[0.9rem] font-medium" style={{ color: 'var(--text-primary)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[0.78rem] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-secondary)' }}>
                Find me on
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center transition-all duration-300 hover:text-[#9b5af5] hover:-translate-y-0.5 hover:border-[rgba(124,58,237,0.4)]"
                    style={{ border: '1.5px solid var(--border)', color: 'var(--text-secondary)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" once={false}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-5 md:p-9 rounded-[22px]"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                  Service Needed
                </label>
                <select
                  name="service"
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-[10px] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'ok' && (
                <p className="text-center text-sm text-green-400">
                  Message sent! I&apos;ll get back to you within 24 hours.
                </p>
              )}
              {status === 'err' && (
                <p className="text-center text-sm text-red-400">
                  Something went wrong. Please email me directly at {personalInfo.email}
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
