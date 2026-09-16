/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6EFE3',
        paper: '#FBF7EF',
        espresso: '#2E2116',
        bark: '#4A3626',
        clay: '#A8552E',
        clayDark: '#8A4324',
        sand: '#E4D6BE',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.14em',
        wide3: '0.22em',
      },
      maxWidth: {
        content: '1280px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
