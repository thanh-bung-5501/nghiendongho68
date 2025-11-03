/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 10px rgba(255, 65, 108, 0.6)' },
          '100%': { boxShadow: '0 0 24px rgba(255, 65, 108, 1)' },
        },
      },
      animation: {
        pulse: 'pulse 1.4s infinite',
      },
    },
  },
  plugins: [],
};
