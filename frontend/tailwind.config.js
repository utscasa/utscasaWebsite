/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        'off-white': '#efefe9', 
        'highlight': '#D69303', 
        'bgcol': '#863E15', 
        'placeholder': '#D9D9D9',
      }, 
      fontFamily: {
        'body': ['Montserrat'],
    }, 
    backgroundImage: {
      'des1': "url('/public/assets/Design1.jpg')",
    },
  }, 
},
  plugins: [],
}

