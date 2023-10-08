/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#010101',
      polar: '#f4f9fd',
      silver: '#afafaf',
      gray: '#4f4f50',
      blue: '#115bfb',
      turquoise: '#3bedb7',
      yellow: '#fce702',
      purple: '#8154f0',
      'blue-lagoon': '#027788',
      mud: '#bb8652',
      green: '#449E48',
    },
    extend: {
      keyframes: {
        slideRightToLeft: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideLeftToRight: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
    animation: {
      slideRightToLeft:
        'slideRightToLeft .4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
      slideLeftToRight:
        'slideLeftToRight .4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
    },
  },
  plugins: [],
};
