/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens:{
        sm: '480px',
        md: '768px',
        lg: '1028px',
      }
    },
  },
  plugins: [],
  padding: {
    big: '50px'
  }

}

