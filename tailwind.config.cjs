/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blacktm' : '#0f0f0f',
        'whitetm' : '#ede4e9',
        'greentm' : '#7fc29b',
        'redtm' : '#f93943',
        'bluetm' : '#445e93',
        'lightgray' : '#8d8d8d'
      }
    },
    borderWidth: {
      DEFAULT: '0px'
    }
  },
  plugins: [],
}
