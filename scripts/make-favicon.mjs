import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SIZE = 512

const bgSvg = Buffer.from(`
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="url(#grad)"/>
</svg>
`)

const maskSvg = Buffer.from(`
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="white"/>
</svg>
`)

const profilePath = path.join(root, 'public', 'profile.png')
const outPath = path.join(root, 'app', 'icon.png')

// Scale up profile (1.18x) anchored to top so face fills circle
const scaledSize = Math.round(SIZE * 1.18)
const cropLeft = Math.round((scaledSize - SIZE) / 2)

const profile = await sharp(profilePath)
  .resize(scaledSize, scaledSize, { fit: 'cover', position: 'top' })
  .extract({ left: cropLeft, top: 0, width: SIZE, height: SIZE })
  .toBuffer()

// Step 1: composite profile over gradient background
const withBg = await sharp(bgSvg)
  .composite([{ input: profile, blend: 'over' }])
  .png()
  .toBuffer()

// Step 2: apply circle mask
await sharp(withBg)
  .composite([{ input: maskSvg, blend: 'dest-in' }])
  .png()
  .toFile(outPath)

console.log(`Favicon saved to ${outPath}`)
