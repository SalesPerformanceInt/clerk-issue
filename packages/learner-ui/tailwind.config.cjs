/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
