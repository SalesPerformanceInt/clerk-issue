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
        "3xs": "0.5rem",
        "2xs": "0.625rem",
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
      minWidth: {
        "carousel-card": "288px",
      },
      screens: {
        desktop: "928px",
      },
      spacing: {
        "1.25": "0.3125rem",
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary, #22154c)",
          75: "var(--primary-75, #564974)",
          50: "var(--primary-50, #8c81a2)",
          25: "var(--primary-25, #c4becf)",
        },
        secondary: {
          DEFAULT: "var(--secondary, #b07882)",
        },
        accent: {
          DEFAULT: "var(--accent, #ad8000)",
          50: "var(--accent-50, #e8b066)",
        },
        highlight: {
          DEFAULT: "var(--highlight, 350 24% 75%)",
        },
        background: {
          DEFAULT: "var(--background, #ffffff)",
          secondary: "var(--background-secondary, #ede8e8)",
        },
        text: {
          DEFAULT: "var(--text, #111111)",
        },
        contrast: {
          DEFAULT: "var(--contrast, #ffffff)",
        },
        success: {
          DEFAULT: "var(--success, #767b0e)",
          50: "var(--success-50, #93b262)",
        },
        warning: {
          DEFAULT: "var(--warning, #820d30)",
          50: "var(--warning-50, #e56682)",
        },
        chart: {
          1: "var(--chart-1, #787d0f)",
          2: "var(--chart-2, #b570b0)",
          3: "var(--chart-3, #004d6b)",
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
