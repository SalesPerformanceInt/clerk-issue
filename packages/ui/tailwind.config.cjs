/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          // White-based colors
          200: "#E6E9F0",
          500: "#BCC4D6",
        },
        dark: {
          // DarkBlue-based colors
          200: "#A0A5C5",
          400: "#3C4162",
          500: "#2F334D",
          600: "#25283C",
          700: "#1D1F30",
        },
        primary: {
          // Teal-based colors
          300: "#61DBC5",
          500: "#2FD0B2",
        },
        accent: {
          strong: {
            // Pink-based colors
            400: "#FF758C",
          },
          warn: {
            // Yellow-based colors
            400: "#F4CA64",
          },
          subtle: {
            // Cloudy/Blue-based colors
            400: "#82AAFF",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
