/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0B5CD5',
        },
        orange: {
          DEFAULT: '#F95620',
        },
      },
      fontFamily: {
        inter: ['Inter'],
        wix: ['Wix Madefor Display'],
      },
    },
  },
  plugins: [],
};
