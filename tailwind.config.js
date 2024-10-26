/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0E2954',
        secondary: '#1F6E8C',
        accent: '#2E8A99',
        list: '#84A7A1',
      },
    },
  },
  plugins: [],
}