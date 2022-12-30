/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: { max: '640px' },
      },
      colors: {
        primary: '#8C4AF7',
        secondary: '#834CDD',
        button: '#2E277D',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
