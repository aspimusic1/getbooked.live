/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#C8FF3E',
          teal: '#3EFFBE',
          purple: '#7B5CF0',
          amber: '#FFB83E',
          pink: '#FF5C8A',
          cyan: '#3EC8FF',
          red: '#FF5C5C',
        },
        surface: {
          bg: '#080C14',
          s1: '#0E1420',
          s2: '#141B28',
          s3: '#1C2535',
        },
        text: {
          primary: '#F0F2F7',
          muted: '#8892A4',
          dim: '#5A6478',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
