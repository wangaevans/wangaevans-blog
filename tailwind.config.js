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
        padding:".5rem",
        screens:{
          md:"968px",
        }
      },
      colors:{
        primary:{
          950:"hsl(206, 26%, 7%)",
          900:"hsl(206, 26%, 17%)",
          800:"hsl(206, 26%, 27%)",
          700:"hsl(206, 26%, 37%)",
          600:"hsl(206, 26%, 47%)",
          500:"hsl(206, 26%, 57%)",
          400:"hsl(206, 26%, 67%)",
          300:"hsl(206, 26%, 77%)",
          200:"hsl(206, 26%, 87%)",
          100:"hsl(206, 26%, 97%)",
          50:"hsl(206, 26%, 100%)",
        },
        secondary:{
          950:"hsl(141, 68%, 9%)",
          900:"hsl(141, 68%, 19%)",
          800:"hsl(141, 68%, 29%)",
          700:"hsl(141, 68%, 39%)",
          600:"hsl(141, 68%, 49%)",
          500:"hsl(141, 68%, 59%)",
          400:"hsl(141, 68%, 69%)",
          300:"hsl(141, 68%, 79%)",
          200:"hsl(141, 68%, 89%)",
          100:"hsl(141, 68%, 99%)",
          50:"hsl(141, 68%, 100%)",
        }
      }
    }
  },
  plugins: []
}
