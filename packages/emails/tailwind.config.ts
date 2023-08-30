import type { Config } from "tailwindcss";

const config = {
  // darkMode: "class",
  content: ["./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.5rem",
        xxl: "1.375rem",
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
        body: ["Open Sans", "ui-sans-serif", "system-ui"],
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
      spacing: {
        table: "calc(100% + 16px)",
      },
      borderRadius: {
        smd: "4px",
      },
      colors: {
        primary: {
          DEFAULT: "#22154C",
          75: "#564974",
          50: "#8C81A2",
          25: "#C4BECF",
        },
        secondary: {
          DEFAULT: "#B07882",
        },
        highlight: {
          DEFAULT: "#CFB0B5",
        },
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#EDE8E8",
        },
        text: {
          DEFAULT: "#111111",
        },
        contrast: {
          DEFAULT: "#FFFFFF",
        },
        success: {
          DEFAULT: "#767B0E",
          50: "#93B262",
        },
        warning: {
          DEFAULT: "#820D30",
          50: "#E56682",
        },
      },
    },
  },
} satisfies Config;

export const { theme } = config;

export default config;
