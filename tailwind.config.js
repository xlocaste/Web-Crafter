/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#180161',
        secondary: '#7E60BF',
        accent: '#EB3678',
        list: '#FB773C',
      },
    },
  },
  plugins: [],
}