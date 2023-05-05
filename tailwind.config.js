/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'c-dark': '#090E16',
        'c-hf': '#14142a',
        'c-bg-b': '#181831',
        'c-text': '#7B4AE2',
        'c-border': '#422c7c',
        
      }
    },
  },

  darkMode: "class", /* for Chrome, Safari, and Opera */
  plugins: [],
}
