/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        new4: 'repeat(auto-fill, minmax(150px,1fr))',
        new5: 'repeat(auto-fill, minmax(200px,1fr))',
      },
    },
  },
  plugins: [],
};
