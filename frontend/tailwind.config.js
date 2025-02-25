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
        'highligth-lighter':"#FFAE00",
        'bgbox': '#E8CA8A',
      }, 
      fontFamily: {
        'body': ['Montserrat'],
    }, 
    backgroundImage: {
      'des1': "url('/public/assets/Design1.jpg')", 
      'des2': "url('/public/assets/Design2.jpg')",
      'landing': "url('/public/assets/webresources/paint&sip.jpg')"
    },
  }, 
},
  plugins: [],
}

