/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-dark': '#1a1a1a',
        'cyber-gray': '#2a2a2a',
        'cyber-green': '#00ff00',
        'cyber-blue': '#00ffff',
        'cyber-red': '#ff0000',
        'cyber-yellow': '#ffff00',
      },
      fontFamily: {
        'cyber': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
} 