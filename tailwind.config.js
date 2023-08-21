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
        'xs6': '700px',
        'xs7': '885px',
        'xs5': '600px',
        'md':  '768px',
        'xs8': '1002px',
        'lg': '1024px', // Adjust this breakpoint as needed
        'xl': '1440px',
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],

};
