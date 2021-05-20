const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./slices/**/*.vue'],
  theme: {
    colors: {
      navy: '#1a2456',
      orange: '#ff501c',
      black: '#080b1b',
      peach: '#ff8b68',
      lightPeach: '#EFC2B3',
      offWhite: '#f0efed',
    },
    fontFamily: {
      sans: ['prompt', 'sans-serif'],
    },
  },
}
