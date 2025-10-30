import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          black: '#0B0B0B',
          white: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
}

export default config


