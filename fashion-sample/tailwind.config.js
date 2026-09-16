/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#EFEBE2',
        paper: '#F7F4EC',
        ink: '#141311',
        taupe: '#8C8272',
        camel: '#A9744F',
        camelDark: '#8A5C3C',
        line: '#141311',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Jost"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.14em',
        wide3: '0.28em',
      },
      maxWidth: {
        content: '1440px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
