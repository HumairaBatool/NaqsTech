/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // New breakpoint at 320px
        'xs2':'376px',// for Home page GET IN TOUCH
        'xss': '480px',
        'lg': '1025px', // Adjust this breakpoint as needed
        'md':'768px',
      },
    },
  },
  plugins: [],

};
