/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          //purple
          light: "#6b21a8",
          lighter: "#a855f7",
          DEFAULT: "#8B5D99",
          dark: "#701a75",
          darker: "#4a044e",
        },
        secondary: {
          //blue
          light: "#005792",
          lighter: "#60a5fa",
          DEFAULT: "#2B3595",
          darker: "#00142C;",
          dark: "#141D74",
        },
        tertiary: {
          DEFAULT: "",
          light: "",
          dark: "",
        },
        neutral: {
          //grey
          light: "#F0F0F0",
          lighter: "#fff",
          DEFAULT: "#8C8C8C",
          darker: "#000000",
          dark: "#353839",
        },
        disabled: {
          //grey
          light: "#C0C4C8",
          lighter: "#fff",
          DEFAULT: "#A0A7AC",
          dark: "#6B6F73",
          darker: "#353839",
        },
        success: "#27AE60", //green
        warning: "#F39C12", //yellow
        danger: "#E74C3C", //red
      },
    },
    screens: {
      xs: "275px",
      sm: "375px",
      md: "475px",
      lg: "1000px",
      xl: "1250px",
      "2xl": "1500px",
    },
  },
  plugins: [],
};
