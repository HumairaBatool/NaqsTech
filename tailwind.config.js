/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // New breakpoint at 320px
        'xs1': '354px',
        'xs2':'376px',// for Home page GET IN TOUCH
        'xs3':'426px',
        'xs4':'540px',
        'xss': '480px',
        'xs6':'700px',
        'xs7':'885px',
        'xs8':'1002px',
        'xs5':'600px',
        'lg': '1025px', // Adjust this breakpoint as needed
        'md':'768px',
      },
    },
  },
  plugins: [],

};
