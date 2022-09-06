/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: '#2c076e',
        main: '#0d0c2b',
        button: '#3671e9'
      },
      fontFamily: {
        inter: ['Inter'],
        rubik: ['Rubik']
      }
    },
    
  },
  plugins: [],
}
