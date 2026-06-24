import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://jerico-ursua.vercel.app'),
  title: 'Jerico Ursua | HR Executive, Chief of Staff & SEO Specialist',
  description:
    'Chief of Staff, HR Executive & SEO Specialist with 6+ years helping agencies hire better, rank higher, and automate smarter. Remote-first, results-driven.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jerico Ursua | HR Executive, Chief of Staff & SEO Specialist',
    description:
      'Chief of Staff, HR Executive & SEO Specialist with 6+ years helping agencies hire better, rank higher, and automate smarter. Remote-first, results-driven.',
    type: 'website',
    url: 'https://jerico-ursua.vercel.app',
    siteName: 'Jerico Ursua',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jerico Ursua',
  url: 'https://jerico-ursua.vercel.app',
  description:
    'Chief of Staff, HR Executive & SEO Specialist with 6+ years helping agencies hire better, rank higher, and automate smarter.',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jerico Ursua',
  url: 'https://jerico-ursua.vercel.app',
  jobTitle: 'Chief of Staff & SEO Specialist',
  sameAs: [
    'https://www.linkedin.com/in/jec-ursua/',
    'https://www.upwork.com/freelancers/~01004a0946b64b5972',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
