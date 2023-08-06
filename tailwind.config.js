/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'main-800': '#282E71',
      },
      fontFamily: {
        publicSans: ['Public Sans', 'sans-serif'],
      },
      width: {
        quarterToFull: 'clamp(25%,50%,100%)',
      },
    },
  },
  plugins: [],
};
