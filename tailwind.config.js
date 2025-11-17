/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'champagne': '#D4C2A8',
        'light-grey': '#CFCFCF',
      },
      fontFamily: {
        'heading': ['Montserrat', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
      },
    },
  },
  plugins: [],
}

