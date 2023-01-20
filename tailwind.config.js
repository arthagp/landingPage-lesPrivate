/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        '80px': '80px',
      },
      backgroundColor: {
        'color1': '#BC1A6E',
        'color2': '#CC2D4A',
        'color3': '#D93B30',
        'vipColor': '#A18CD1',
        'faqColor': '##D1BFCB'

      },
      borderWidth: {
        DEFAULT: '1px',
      },
      spacing: {
        '128': '32rem',

      }

    },
  },
  plugins: [],
}
