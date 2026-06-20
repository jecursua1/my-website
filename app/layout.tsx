import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://jericoursua.com'),
  title: 'HR, Chief of Staff & SEO Specialist | Jerico Ursua',
  description:
    'The remote ops leader agencies trust — Chief of Staff, HR Specialist & SEO Strategist with 6+ years scaling teams, driving organic growth, and building AI-powered workflows.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HR, Chief of Staff & SEO Specialist | Jerico Ursua',
    description:
      'The remote ops leader agencies trust — Chief of Staff, HR Specialist & SEO Strategist with 6+ years scaling teams, driving organic growth, and building AI-powered workflows.',
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
