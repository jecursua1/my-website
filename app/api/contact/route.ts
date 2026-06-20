import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const serviceLabels: Record<string, string> = {
  cos: 'Chief of Staff & Operations',
  seo: 'SEO Strategy',
  hr: 'HR & People Operations',
  web: 'Web & System Development',
  automation: 'Automation & Workflow',
  ai: 'AI Integration & Prompting',
  other: 'Other',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message, service } = body
    const serviceLabel = service ? (serviceLabels[service] ?? service) : null

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Jerico Ursua Portfolio <onboarding@resend.dev>',
      to: 'jerico.ursua1@gmail.com',
      replyTo: email,
      subject: `New Inquiry from ${name}: ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#7c3aed,#06b6d4);border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.5px;">JU.</p>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:0.1em;text-transform:uppercase;">New Portfolio Inquiry</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <p style="margin:0 0 24px;font-size:18px;font-weight:700;color:#1a1a2e;">
                You have a new message from <span style="color:#7c3aed;">${name}</span>
              </p>

              <!-- Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ebebf5;border-radius:10px;overflow:hidden;margin-bottom:28px;">
                <tr style="background:#f8f8fc;">
                  <td style="padding:12px 20px;font-size:12px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:0.08em;width:130px;">Name</td>
                  <td style="padding:12px 20px;font-size:14px;color:#1a1a2e;">${name}</td>
                </tr>
                <tr style="border-top:1px solid #ebebf5;">
                  <td style="padding:12px 20px;font-size:12px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:0.08em;">Email</td>
                  <td style="padding:12px 20px;font-size:14px;"><a href="mailto:${email}" style="color:#06b6d4;text-decoration:none;">${email}</a></td>
                </tr>
                ${serviceLabel ? `
                <tr style="border-top:1px solid #ebebf5;">
                  <td style="padding:12px 20px;font-size:12px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:0.08em;">Service</td>
                  <td style="padding:12px 20px;font-size:14px;color:#1a1a2e;">${serviceLabel}</td>
                </tr>` : ''}
                <tr style="border-top:1px solid #ebebf5;">
                  <td style="padding:12px 20px;font-size:12px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:0.08em;">Subject</td>
                  <td style="padding:12px 20px;font-size:14px;color:#1a1a2e;">${subject}</td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
              <div style="background:#f8f8fc;border-left:3px solid #7c3aed;border-radius:0 8px 8px 0;padding:18px 20px;font-size:15px;color:#333;line-height:1.7;white-space:pre-wrap;">${message}</div>

              <!-- CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;text-decoration:none;font-size:14px;font-weight:600;padding:13px 32px;border-radius:8px;">
                  Reply to ${name} &rarr;
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f8fc;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;border-top:1px solid #ebebf5;">
              <p style="margin:0;font-size:12px;color:#999;">
                Sent via <a href="https://jericoursua.com" style="color:#7c3aed;text-decoration:none;">jericoursua.com</a> &mdash; Replying will go directly to ${name}.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
