/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./portfolio.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A84FF', // iOS blue
          dark: '#0071E3',
        },
        secondary: {
          DEFAULT: '#FFCC00', // iOS yellow
        },
        dark: {
          DEFAULT: '#1C1C1E', // iOS dark background
          light: '#2C2C2E',
        },
        light: {
          DEFAULT: '#F2F2F7', // iOS light background
          dark: '#E5E5EA',
        },
      },
      fontFamily: {
        sans: ['SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
