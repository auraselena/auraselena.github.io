/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index2.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#f97316',
        secondary: '#0f172a',
        dark: '#c2410c'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

