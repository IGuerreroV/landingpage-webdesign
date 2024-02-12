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
        Raleway: ['Raleway', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        FiraSans: ['Fira Sans', 'sans-serif'],
        PlayfairDisplay: ['Playfair Display', 'serif'],
        GFSDidot: ['GFS Didot', 'serif'],
        BodoniModa: ['Bodoni Moda', 'serif']
      }
    }
  },
  plugins: []
}
