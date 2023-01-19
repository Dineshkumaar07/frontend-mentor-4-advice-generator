/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'lightCyan' : '#cee3e9',
      'neonGreen' : '#52ffa8',
      'grayishBlue' : '#4e5d73',
      'darkGrayishBlue' : '	#323a49',
      'darkBlue' : '#1f2632',
      'white': '#ffffff'
    },
    extend: {
      fontFamily:{
        monorope:['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
