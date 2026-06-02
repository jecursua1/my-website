# Jec Ursua — Portfolio

Personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (via GitHub)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Add New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy

## Customization

- **Content / copy:** Edit `lib/data.ts`
- **Profile photo:** Replace the `JU` placeholder in `components/Hero.tsx` with a `<Image>` tag pointing to your photo in `/public`
- **YouTube intro video:** Replace the `src` in `components/About.tsx` with your real YouTube embed URL
- **CV download link:** Update the `href="#"` in `components/About.tsx` to your CV file URL

## Optional: Enable Contact Form Emails

Add these environment variables in Vercel:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=jerico.ursua1@gmail.com
```

Then install resend: `npm install resend` and update `app/api/contact/route.ts`.
