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
          gold: '#d4af37', // Metallic gold
          bronze: '#cd7f32', // Bronze/Copper
          deepBlue: '#0f172a', // Slate 900
          darkRed: '#7f1d1d', // Red 900
          parchment: '#f5f5dc', // Beige
        },
        fontFamily: {
          serif: ['Cinzel', 'serif'],
          sans: ['Lato', 'sans-serif'],
        }
      },
    },
  },
  plugins: [],
}
