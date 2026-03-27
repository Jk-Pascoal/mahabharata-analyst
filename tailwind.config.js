/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        epic: {
          gold: '#d4af37',
          bronze: '#cd7f32',
          deepBlue: '#0f172a',
          darkRed: '#7f1d1d',
          parchment: '#f5f5dc',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
