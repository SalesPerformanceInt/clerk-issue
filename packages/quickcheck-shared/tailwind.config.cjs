/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxl: "1.375rem",
      },
      fontFamily: {
        sans: ["var(--font-face)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-face)", "ui-sans-serif", "system-ui"],
      },
      borderWidth: {
        16: "16px",
      },
      boxShadow: {
        card: "0px 0.5px 0.6000000238418579px 0px rgba(151, 140, 140, 0.22), 0px 1.899999976158142px 2.4000000953674316px 0px rgba(151, 140, 140, 0.29), 0px 4.300000190734863px 5.5px 0px rgba(151, 140, 140, 0.36), -1px 10px 12px 0px rgba(151, 140, 140, 0.43)",
      },
      transitionProperty: {
        DEFAULT:
          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, border-width",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          75: "hsl(var(--primary-75))",
          50: "hsl(var(--primary-50))",
          25: "hsl(var(--primary-25))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        text: {
          DEFAULT: "hsl(var(--text))",
        },
        contrast: {
          DEFAULT: "hsl(var(--contrast))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          50: "hsl(var(--success-50))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          50: "hsl(var(--warning-50))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
