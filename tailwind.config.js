/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '320px', // New breakpoint at 320px
      },
    },
  },
  plugins: [],

};
