/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      spacing: {
        85: "21.25rem",
      },
      colors: {
        "Charcoal-Blue": "#121A21",
        "Pale-Mint": "#F1F8F5",
        Gunmetal: "#2C3E50",
        "Light-Sky": "#C3D7E9",
        "Cool-Gray": "#8E9BA2",
        "Soft-Azure": "#577AC190",
        "Sky-Blue": "#90B9E0",
        "Mint-Green": "#9BEA96",
        "Dusty-Rose": "#E7C3C3",
        "Golden-Sand": "#E9D889",
        Apricot: "#FACA96",
        "Steel-Blue": "#425262",
        Cherry: "#D53030",
        "Persian-Rose": "#F924A7",
        "Soft-Beige": "#EDE6A7",
        "Cool-Aqua": "#A6D6D6",
        "Deep-Steel": "#3A4B61",
        "Slate-Gray": "#353B48",
        "Ocean-Blue": "#2E475A",
        "Dark-Teal": "#24303C",
        "Emerald-Teal": "#166A5E",
        "Ivory-Cream": "#f1efe7",
        "LinkedIn-Blue":"#0a66c2",
      },
      transitionTimingFunction: {
        ebol: "cubic-bezier(0, 0, 0.01, 1)",
      },
      boxShadow: {
        form: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        donate: "0px 0px 8px rgba(0, 0, 0, 0.5)",
        donateDark: "0px 0px 8px rgba(255, 255, 255, 0.5)",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeOut: "fadeOut 650ms linear",
      },
    },
    fontFamily: {
      Audiowide: ["Audiowide"],
      Anta: ["Anta"],
      Roboto: ["Roboto"],
      DoppioOne: ["Doppio One"],
      LexendDeca: ["Lexend Deca"],
    },
  },
  plugins: [],
};
