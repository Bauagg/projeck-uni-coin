import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unicoin-yellow': '#ffc107',
        'unicoin-orange': '#ff8f00',
        'unicoin-dark': '#0a0a0a',
        'unicoin-gray': '#1a1a1a',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'float-1': 'float 4s ease-in-out infinite',
        'float-2': 'float 5s ease-in-out infinite 1s',
        'float-3': 'float 6s ease-in-out infinite 2s',
        'float-4': 'float 4.5s ease-in-out infinite 0.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
     plugin(({ addComponents }) => {
      addComponents({
        '.custom-scroll::-webkit-scrollbar': {
          width: '8px',
        },
        '.custom-scroll::-webkit-scrollbar-track': {
          background: '#0a0a0a',
        },
        '.custom-scroll::-webkit-scrollbar-thumb': {
          background: '#ffc107',
          borderRadius: '4px',
        },
      })
    }),
  ],
}