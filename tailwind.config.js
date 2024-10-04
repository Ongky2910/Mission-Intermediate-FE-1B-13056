/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.html.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
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
        },
        white: {
          DEFAULT: '#E7E3FC',   
          secondary: '#E7E3FCAD',  
        },
        yellow: {
          premium: '#B7A207',  
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
