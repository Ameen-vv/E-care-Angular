/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:'#0AB3B8',
        secColor:'#66A1FD',
        textBlue:'#00468b'
      }
    },
  },
  plugins: [],
}