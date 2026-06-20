import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message, service } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'jerico.ursua1@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${service ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Service</strong></td>
              <td style="padding: 8px 0;">${service}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Subject</strong></td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 0.85rem;">Message:</p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-radius: 8px;">${message}</p>
          <p style="color: #aaa; font-size: 0.8rem; margin-top: 24px;">Sent via jericoursua.com contact form. Reply directly to respond to ${name}.</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
