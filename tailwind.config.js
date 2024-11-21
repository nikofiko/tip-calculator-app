/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'background-cyan': 'hsl(185, 41%, 84%)',
        'dark-cyan': 'hsl(183, 100%, 15%)',
        'input-cyan': 'hsl(189, 41%, 97%)',
        'gray-cyan': 'hsl(185, 41%, 84%)',
        'gray-big-cyan': 'hsl(186, 14%, 63%)',
        'dark-cyan2': 'hsl(183, 100%, 20%)',
        'dark-cyan3': 'hsl(183, 100%, 17%)'
      },
      fontFamily: {
        'sans': 'Space Mono',
      }
    },
  },
  plugins: [],
}

