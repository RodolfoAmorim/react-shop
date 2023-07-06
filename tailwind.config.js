/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#191919',
          800: '#212123',
          500: '#363638',
          400: '#7A7D87',
          300: '#8DA0A8',
          50: '#F7F7F7',
        },
        main: {
          500: '#FDAD72'
        },
        side: {
          500: '#FF626D'
        }
      }
    },
  },
  plugins: [],
}
