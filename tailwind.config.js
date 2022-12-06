/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: "2rem",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
