/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#12265a',
        secondaryColor: '#12265acc',
        hoverColor: "#b4dfe5"
      }
    },
  },
  plugins: [require("daisyui")],
}

