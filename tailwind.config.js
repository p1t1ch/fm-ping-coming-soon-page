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
        placeholder: 'hsl(223, 59%, 83%)',
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
      fontSize: {
        'heading-mobile': ['1.375rem', 1.45],
        extrasmall: ['.625rem', 2],
      },
      opacity: {
        15: '.15',
      },
      maxWidth: {
        40: '40rem',
      },
      width: {
        logo: '5.625rem',
        image: 'calc(100% + 1.5rem)',
      },
      margin: {
        18: '4.5rem',
        30: '7.5rem',
      },
      boxShadow: {
        DEFAULT: '0px 5px 10px 2px rgba(76, 123, 243, 0.230414)',
      },
      gridTemplateColumns: {
        form: '1fr 12.5rem',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['focus-visible'],
      backgroundColor: ['focus-visible'],
      borderOpacity: ['focus-visible'],
      backgroundOpacity: ['focus-visible'],
    },
  },
}
