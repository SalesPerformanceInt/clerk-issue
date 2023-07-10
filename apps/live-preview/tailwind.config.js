const shared = require("quickcheck-shared/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      ...shared.theme.extend,
    },
  },
  plugins: [...shared.plugins],
};
