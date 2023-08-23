/* eslint-disable linebreak-style */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      body: ["DM Sans", "sans-serif"],
    },
    boxShadow: {
      "4xl": "2px 2px 0 0 #2563EC",
      glossy: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    },
    extend: {
      colors: {
        nspNavy: "#2563EB",
        nspTeal: "#06AFA6",
        nspOrange: "#EF9f69",
        oceanBlue: "#2563EC",
        oceanGreen: "#28958f",
      },
      margin: {
        100: "25rem",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/images/home/bg-tablet-pattern.svg')",
      },
    },
  },
  plugins: [],
  /* Custom CSS */
  
};
