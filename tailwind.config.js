/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171916',
        muted: '#747870',
        line: '#e5e7e2',
        paper: '#f7f8f5',
        accent: '#c7f36b',
        'accent-green': '#708c48',
        'accent-green-dark': '#829e5c',
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Manrope', 'DM Sans', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
};
