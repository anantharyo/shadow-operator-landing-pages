/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Luxury dark theme palette
        'luxury': {
          bg: '#0a0a0a',
          surface: '#141414',
          'surface-raised': '#1f1f1f',
          text: '#fafafa',
          'text-muted': '#a1a1a1',
          accent: '#ff6b35',
          'accent-hover': '#ff8555',
          border: 'rgba(255, 255, 255, 0.08)'
        }
      },
      fontFamily: {
        'display': ['Clash Display', 'system-ui', 'sans-serif'],
        'heading': ['Satoshi', 'system-ui', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'display': 'clamp(3rem, 8vw, 6rem)',
        'heading': 'clamp(1.5rem, 3vw, 2.5rem)',
        'subheading': 'clamp(1.25rem, 2vw, 2rem)'
      }
    }
  },
  plugins: []
}