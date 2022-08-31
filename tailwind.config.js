/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ECF0F3',
        secondary: '#EDAE49',
        accent: '#A5A5A5'
      },
      fontFamily: {
        'sfpro': ['SFPro']
      }
    },
  },
  plugins: [],
}
