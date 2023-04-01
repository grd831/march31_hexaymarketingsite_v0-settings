const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: '"ABC Monument Grotesk", sans-serif',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },

      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}