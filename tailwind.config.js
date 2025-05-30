/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0BFFB7',
        dark: '#131B2E',
        darker: '#0B1120',
        'dark-blue': '#131B2E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(11, 255, 183, 0.5)',
      },
    },
  },
  plugins: [],
}
