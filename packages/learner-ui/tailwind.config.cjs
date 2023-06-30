/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
      colors: {
        primary: {
          medium: "var(--color-primary-medium)",
          dark: "var(--color-primary-dark)",
        },
      },
      fontFamily: {
        body: ["var(--font-face, sans-serif)", "sans-serif"],
        sans: ["var(--font-face, sans-serif)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
