import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 28s linear infinite reverse',
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 2s infinite',
        'bounce-arrow': 'bounceArrow 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceArrow: {
          '0%, 100%': { transform: 'rotate(45deg) translateY(0)' },
          '50%': { transform: 'rotate(45deg) translateY(6px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(124,58,237,0.3), 0 0 16px rgba(6,182,212,0.1)' },
          '50%': { boxShadow: '0 0 18px rgba(124,58,237,0.6), 0 0 32px rgba(6,182,212,0.25)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
