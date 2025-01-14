/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ALPHA: '#592adf',  // Custom color ALPHA
        BETA: '#ffbb01',   // Custom color BETA
        GAMA: '#f2277e',   // Custom color GAMA
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
