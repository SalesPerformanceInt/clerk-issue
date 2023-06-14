/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
      colors: {
        plum: {
          75: "#564874",
          100: "#21154A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
