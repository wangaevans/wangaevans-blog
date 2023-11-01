/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '.5rem',
        screens: {
          md: '896px'
        }
      },
      colors: {
        primary: {
          950: 'hsl(206, 26%, 7%)',
          900: 'hsl(206, 26%, 17%)',
          800: 'hsl(206, 26%, 27%)',
          700: 'hsl(206, 26%, 37%)',
          600: 'hsl(206, 26%, 47%)',
          500: 'hsl(206, 26%, 57%)',
          400: 'hsl(206, 26%, 67%)',
          300: 'hsl(206, 26%, 77%)',
          200: 'hsl(206, 26%, 87%)',
          100: 'hsl(206, 26%, 97%)',
          50: 'hsl(206, 26%, 100%)'
        },
        'great-blue': {
          DEFAULT: '#2A669F',
          50: '#E4F7F8',
          100: '#CCEEF2',
          200: '#9CD7E5',
          300: '#6CB9D8',
          400: '#3B94CB',
          500: '#2A669F',
          600: '#234B83',
          700: '#1B3366',
          800: '#14204A',
          900: '#0C102E'
        }
      }
    }
  },
  plugins: []
}
