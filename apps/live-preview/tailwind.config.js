const tailwind = require("accelerate-learner-ui/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      ...tailwind.theme.extend,
    },
  },
  plugins: [...tailwind.plugins],
};
