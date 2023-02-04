/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        pj: ["var(--font-pj)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: {
          DEFAULT: "#53C351",
          dark: "#1C3A27",
          light: "#E2EEEC",
          rich: "#254330",
          soft: "#F4F9F8",
          hover: "#359433",
        },
        title: "#2E2E2E",
        body: "#808080",
        field: "#CCCCCC",
        disabled: "#E6E6E6",
        "image-placeholder": "#EBEBEB",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
