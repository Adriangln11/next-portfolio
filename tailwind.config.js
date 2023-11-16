/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerxs: '768px',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      colors: {
        bodyColor: '#E7ECEF',
        textGreen: '#007EA7',
        textLight: '#003459',
        textDark: '#00171F',
        hoverColor: '#007EA7',
      },
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        navbarShadow: ' 0 5px 8px -10px rgba(2,12,27,0.7)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
