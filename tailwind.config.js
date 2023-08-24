/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // New breakpoint at 320px
        'xs1': '354px',
        'xs2': '376px',// for Home page GET IN TOUCH
        'xs3': '425px',
        'xss': '480px',
        'xs4': '540px',
        'xs5': '600px',
        'xs6': '700px',
        'md': '768px',
        'md1':'848px',
        'xs7': '885px',
        'xs7-1':'965px',
        'xs8': '1002px',     
        'lg': '1025px', // Adjust this breakpoint as needed
        'lg1':'1222px',//for About-US Page
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'fafa': '#FAFAFA',
      },
    },
  },
  plugins: [],

};
