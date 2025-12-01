/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#05060A',
        accent: {
          pink: '#f472b6',
          purple: '#a855f7',
          blue: '#60a5fa',
        },
        custom: {
          darkest: '#0a0a0a',
          dark: '#121212',
          medium: '#1a1a1a',
          slate: '#2a2a2a',
          gray: '#3a3a3a',
          light: '#4a4a4a',
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(96,165,250,0.12), rgba(168,85,247,0.18))',
        'hero-gradient':
          'radial-gradient(circle at top, rgba(96,165,250,0.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(249,115,22,0.25), transparent 45%)',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(2, 6, 23, 0.35)',
      },
    },
  },
  plugins: [],
}

