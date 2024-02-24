/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    '.src/css/tailwind.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SomeType Mono', 'monospace']
      },
    },
  },
  plugins: [],
}

