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
          DEFAULT: "var(--primary)",
          75: "var(--primary-75)",
          50: "var(--primary-50)",
          25: "var(--primary-25)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          50: "var(--accent-50)",
        },
        highlight: {
          DEFAULT: "var(--highlight)",
        },
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
        },
        text: {
          DEFAULT: "var(--text)",
        },
        contrast: {
          DEFAULT: "var(--contrast)",
        },
        success: {
          DEFAULT: "var(--success)",
          50: "var(--success-50)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          50: "var(--warning-50)",
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
