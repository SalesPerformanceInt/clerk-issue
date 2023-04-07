/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          200: "var(--light-200)",
          500: "var(--light-500)",
        },
        dark: {
          200: "var(--dark-200)",
          400: "var(--dark-400)",
          500: "var(--dark-500)",
          600: "var(--dark-600)",
          700: "var(--dark-700)",
        },
        primary: {
          300: "var(--primary-300)",
          500: "var(--primary-500)",
        },
        accent: {
          strong: {
            400: "var(--accent-strong-400)",
          },
          warn: {
            400: "var(--accent-warn-400)",
          },
          subtle: {
            400: "var(--accent-subtle-400)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
