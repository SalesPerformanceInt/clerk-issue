import tailwind from "accelerate-cms-ui/tailwind.config.cjs";

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
