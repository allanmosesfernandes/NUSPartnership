/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
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
    extend: {
      colors: {
        nspNavy: "#2563EB",
        nspTeal: "06AFA6",
        nspOrange: "#EF9f69",
        oceanBlue: "#2563EC",
      },
    },
  },
  plugins: [],
};

