/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
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
      },
      transitionTimingFunction: {
        ebol: "cubic-bezier(0, 0, 0.01, 1)",
      },
      boxShadow: {
        form: "2px 2px 2px rgba(0, 0, 0, 0.25)",
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
