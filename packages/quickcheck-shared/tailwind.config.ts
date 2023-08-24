import type { Config } from "tailwindcss";

const config = {
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
        xxs: "0.5rem",
        xxl: "1.375rem",
      },
      fontFamily: {
        sans: ["var(--font-face, Open Sans)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-face, Open Sans)", "ui-sans-serif", "system-ui"],
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
      maxWidth: {
        desktop: "928px",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary, 254 56% 19%))",
          75: "hsl(var(--primary-75, 259 23% 37%))",
          50: "hsl(var(--primary-50, 261 15% 57%))",
          25: "hsl(var(--primary-25, 261 15% 78%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 349 26% 58%))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight, 350 24% 75%))",
        },
        background: {
          DEFAULT: "hsl(var(--background, 0 0% 100%))",
          secondary: "hsl(var(--background-secondary, 0 12% 92%))",
        },
        text: {
          DEFAULT: "hsl(var(--text, 0 0% 7%))",
        },
        contrast: {
          DEFAULT: "hsl(var(--contrast, 0 0% 100%))",
        },
        success: {
          DEFAULT: "hsl(var(--success, 63 79% 27%))",
          50: "hsl(var(--success-50, 83 34% 54%))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning, 342 82% 28%))",
          50: "hsl(var(--warning-50, 347 71% 65%))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export const { theme } = config;

export default config;
