/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-montserrat)'],
        'mono': ['var(--font-lato)'],
        "serif": ['var(--font-open_sans)']
      },
      colors: {
        background: "#F5F5F5",
      },
      screens: {
        "x_sm": "100px",
        "sm": "500px",
        "md": "700px",
        "lg": "970px",
        "xl": "1200px"
      }
    },
  },
  plugins: [],
};
