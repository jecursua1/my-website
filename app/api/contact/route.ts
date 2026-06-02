import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log submission (visible in Vercel Function logs)
    console.log('Contact form submission:', { name, email, subject })

    // TODO: To enable email notifications, add resend package and set RESEND_API_KEY in Vercel env vars
    // npm install resend
    // Then update this route to call resend.emails.send(...)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
