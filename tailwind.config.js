/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "dark-grayish-blue": "hsl(240, 6%, 50%)",
        "light-grayish-blue": "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
