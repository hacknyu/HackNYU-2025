/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0B5CD5',
        },
        orange: {
          DEFAULT: '#F95620',
        },
        dark_blue: {
          DEFAULT: '#25499F',
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', 
      },
    },
  },
  plugins: [],
}

