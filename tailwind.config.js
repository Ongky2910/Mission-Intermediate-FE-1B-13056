/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.html.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
<<<<<<< HEAD
      fontFamily: {
=======
       fontFamily: {
>>>>>>> 5e9b1d9db68db76c93c94cd1a8b386cd473e8ba1
        londrina: ['Londrina Solid', 'sans-serif'],
      },
      colors: {
        gray: {
          DEFAULT: '#3A3541DE', 
          secondary: '#3A3541AD', 
          input: '#181A1C',
        },
        blue: {
          DEFAULT: '#0F1E93',   
          input: '#0F1E93',  
        },
        white: {
          DEFAULT: '#E7E3FC',   
          secondary: '#E7E3FCAD',  
        },
        yellow: {
          premium: '#B7A207',  
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(286.17deg, #192DB7 0%, #5370D4 100%)',
      },
    },
  },
<<<<<<< HEAD
};
=======
}
>>>>>>> 5e9b1d9db68db76c93c94cd1a8b386cd473e8ba1
