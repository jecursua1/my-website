'use client'

import { useState, FormEvent } from 'react'
import FadeIn from '@/components/FadeIn'
import { personalInfo } from '@/lib/data'

const serviceOptions = [
  { value: '', label: 'Select a serviceâ€¦' },
  { value: 'va', label: 'Virtual & Executive Assistance' },
  { value: 'hr', label: 'HR & Recruitment' },
  { value: 'seo', label: 'SEO Strategy' },
  { value: 'automation', label: 'Automation & Workflow' },
  { value: 'social', label: 'Social Media Management' },
  { value: 'design', label: 'Graphic Design & Video' },
  { value: 'other', label: 'Other' },
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
    background: '#0e0e1a',
    border: '1.5px solid rgba(255,255,255,0.07)',
    borderRadius: '10px',
    padding: '13px 16px',
    color: '#e2e2f0',
    fontSize: '0.92rem',
    fontFamily: 'inherit',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s',
  }

  return (
    <section id="contact" className="py-24 bg-[#0e0e1a]">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">Get In Touch</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="text-[#7070a0] max-w-[520px] mx-auto text-[1.05rem]">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* Contact info */}
          <FadeIn direction="left">
            <div
              className="flex flex-col gap-5 p-7 rounded-[22px] mb-5"
              style={{ background: '#12121f', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {[
                { icon: 'ðŸ“§', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: 'ðŸ“±', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: 'ðŸ“', label: 'Location', value: personalInfo.locationShort },
                { icon: 'â°', label: 'Availability', value: personalInfo.availability },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <small className="block text-[0.75rem] text-[#7070a0] uppercase tracking-widest mb-0.5">
                      {item.label}
                    </small>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[0.9rem] font-medium text-[#e2e2f0] hover:text-[#9b5af5] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[0.9rem] font-medium text-[#e2e2f0]">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[0.82rem] font-semibold uppercase tracking-widest text-[#7070a0] mb-3">
                Find me on
              </p>
              <div className="flex gap-2.5">
                {[
                  { label: 'in', href: personalInfo.linkedin, title: 'LinkedIn' },
                  { label: 'GH', href: '#', title: 'GitHub' },
                  { label: 'UW', href: '#', title: 'Upwork' },
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    target={s.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.title}
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xs font-bold text-[#7070a0] transition-all duration-300 hover:text-[#9b5af5] hover:-translate-y-0.5"
                    style={{ border: '1.5px solid rgba(255,255,255,0.07)' }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-9 rounded-[22px]"
              style={{ background: '#12121f', border: '1px solid rgba(255,255,255,0.07)' }}
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-semibold text-[#7070a0] uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-semibold text-[#7070a0] uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold text-[#7070a0] uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold text-[#7070a0] uppercase tracking-widest">
                  Service Needed
                </label>
                <select
                  name="service"
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.82rem] font-semibold text-[#7070a0] uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your projectâ€¦"
                  required
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={(e) => (e.target.style.borderColor = '#9b5af5')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
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
                {status === 'sending' ? 'Sendingâ€¦' : 'Send Message â†’'}
              </button>

              {status === 'ok' && (
                <p className="text-center text-sm text-green-400">
                  âœ“ Message sent! I&apos;ll get back to you within 24 hours.
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
