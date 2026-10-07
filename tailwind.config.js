/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        silicon: {
          darkest: '#030712',
          darker: '#070d1e',
          dark: '#0c152d',
          card: '#0f1a36',
          border: '#1e2e54',
          accent: '#00f0ff',
          neonGreen: '#00ff88',
          neonAmber: '#ffb703',
          neonPurple: '#a855f7',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.35)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.35)',
        'glow-amber': '0 0 20px rgba(255, 183, 3, 0.35)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.35)',
        'chip': 'inset 0 0 15px rgba(0, 240, 255, 0.08), 0 4px 20px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'trace-flow': 'traceFlow 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        traceFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
