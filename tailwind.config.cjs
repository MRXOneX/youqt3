/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0 0 1px rgb(0 0 0 / 10%)',
        'nav_mob': ' 0 0 4px 0 rgba(59, 71, 111, 0.15)'
      },
      screens: {
        'tablet': '640px',
        'desktop': '1100px'
      },
    },
  },
  plugins: [],
};
