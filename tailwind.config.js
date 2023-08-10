/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // New breakpoint at 320px
        'lg': '1025px', // Adjust this breakpoint as needed
        'md':'768px',
      },
    },
  },
  plugins: [],

};
