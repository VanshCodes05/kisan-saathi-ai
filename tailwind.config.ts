import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        'deep-green': '#1a5c1a',
        'gold': '#e8b84b',
        'light-green': '#f0faf0',
        'sage': '#6b8e6b',
        'brown': '#8b6f47',
      },
    },
  },
  plugins: [],
}

export default config
