const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.{js,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono],
    },
    extend: {
      gridTemplateRows: {
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
