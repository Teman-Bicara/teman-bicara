/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: 'Inter, Helvetica, Arial, sans-serif',
    },
    extend: {
      colors: {
        first: '#8C4AF7',
        second: '#6C53FF',
      },
    },
  },
  plugins: [],
};
