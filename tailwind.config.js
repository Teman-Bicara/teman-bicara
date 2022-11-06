/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: 'Inter, Helvetica, Arial, sans-serif',
    },
    extend: {
      colors: {
        primary: '#2D3748',
      },
    },
  },
  plugins: [],
};
