/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'synthwave',
      {
        gametheme: {
          primary: '#ff00a0',
          secondary: '#00c5ff',
          accent: '#ff6e00',
          neutral: '#2d0f19',
          'base-100': '#172429',
          info: '#0096db',
          success: '#517900',
          warning: '#ff5100',
          error: '#ff8899',
        },
      },
    ],
  },
};
