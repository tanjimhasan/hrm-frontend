/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  plugins: [require('daisyui')],
}
