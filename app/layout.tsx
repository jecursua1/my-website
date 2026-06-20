import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://jericoursua.com'),
  title: 'Jerico Ursua | Chief of Staff & SEO Specialist',
  description:
    'Chief of Staff, HR Specialist & SEO Specialist with 6+ years in HR management, SEO strategy, web development, and AI-powered automation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jerico Ursua | Chief of Staff & SEO Specialist',
    description:
      'Chief of Staff, HR Specialist & SEO Specialist with 6+ years in HR management, SEO strategy, web development, and AI-powered automation.',
    type: 'website',
    url: 'https://jericoursua.com',
  },
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
      </head>
      <body>{children}</body>
    </html>
  )
}
