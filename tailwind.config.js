/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
          "3xl": "1594px",
        },
      },
      fontFamily: {
        manrope: "Manrope",
      },
      colors: {
        primary: "#141414",
        gray: "#999999",
        navlinks: "#BFBFBF",
        lightcolor: "#1A1A1A",
      },
      borderColor: {
        light: "#1F1F1F",
      },
    },
  },
  plugins: [],
};
