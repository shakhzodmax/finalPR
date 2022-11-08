/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'mainPng': '337px',
      },
      margin:{
        'navbar': '56px',
      },
      minWidth:{
        'a': '480px',
        'b': '320px'
      },
      padding: {
        'mainPt': '150px',
        'navTop': '56px'
      },
      width: {
        'mainWidth': '625.21px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
