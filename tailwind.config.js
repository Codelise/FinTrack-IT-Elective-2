/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        cream: "#FFEAD8",
        coral: "#E8988A",
        berry: "#9B177E",
        deepPurple: "#2A1458",
        darkBg: "#21121e",
        darkBorder: "#46253f",
        darkCard: "#321b2d",
        lightText: "#c695bb",
      },
      backgroundColor: {
        "light-primary": "#FFEAD8",
        "light-card": "#FFFFFF",
        "dark-primary": "#2A1458",
        "dark-card": "#1A0D3A",
      },
      textColor: {
        "light-primary": "#2A1458",
        "light-secondary": "#9B177E",
        "dark-primary": "#FFEAD8",
        "dark-secondary": "#E8988A",
      },
      borderColor: {
        "light-border": "#E8988A",
        "dark-border": "#9B177E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "finance-gradient": "linear-gradient(135deg, #9B177E 0%, #2A1458 100%)",
        "cream-gradient": "linear-gradient(135deg, #FFEAD8 0%, #E8988A 100%)",
        "berry-gradient": "linear-gradient(135deg, #E8988A 0%, #9B177E 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
