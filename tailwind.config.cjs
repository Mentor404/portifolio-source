/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-dark' : '#121212',
        'theme-main' : '#03A65A',
        'theme-sub' : '#1C6958',
        'theme-light' : '#89CDB9',
        'theme-alt' : '#007047',
        'theme-withe' : '#ebfff8',
        'theme-text' : '#bed8ef'
      },
      backgroundImage : {
        'header-background' : "url('./src/assets/img/github-cover.png')"
      }
    },
  },
  plugins: [],
}
