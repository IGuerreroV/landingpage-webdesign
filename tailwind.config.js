/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald', 'sans-serif'],
        BodoniModa: ['Bodoni Moda', 'serif'],
        Quattrocento: ['Quattrocento', 'serif'],
        QuattrocentoSans: ['Quattrocento Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
