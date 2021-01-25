const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'hsl(223, 87%, 63%)',
      },
      secondary: {
        DEFAULT: 'hsl(223, 100%, 88%)',
      },
      neutral: {
        DEFAULT: 'hsl(209, 33%, 12%)',
        gray: 'hsl(0, 0%, 59%)',
      },
      error: 'hsl(354, 100%, 66%)',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
