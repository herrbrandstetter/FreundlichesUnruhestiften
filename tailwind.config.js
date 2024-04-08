/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
          "sage": "#7e8b77",
          "darksage": "#586153",
          "darkgray": "#30323d",
          "pink": "#df7090"
      },
      spacing: {
          "128": "32rem",
          "192": "48rem"
      },
      dropShadow: {
          "heading": "1px 1px 2px black",
          "text": "1px 1px 1px black"
      },
      boxShadow: {
          "main": "1px 1px 2px black"
      },
      container: {
          "center": true,
          "padding": "1.25rem"
      }
  },
  },
  plugins: [],
}

