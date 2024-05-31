/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    
    extend: {
      fontFamily: {
        'roboto-condensed': "Roboto Condensed, sans-serif",
      },
      colors: {
        'my-bgColor1': '#DC143C',
        'my-bgColor2': '#dedede',
      },
    },
  },
  plugins: [],
}