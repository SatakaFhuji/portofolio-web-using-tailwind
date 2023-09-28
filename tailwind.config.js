/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#64748b',
        red: '#ef4444',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

