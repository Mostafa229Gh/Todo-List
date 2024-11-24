/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        'Charcoal-Blue':'#121A21',
        'Pale-Mint':'#F1F8F5',
        'Gunmetal':'#2C3E50'
      }
    },
    fontFamily: {
      'Audiowide':['Audiowide'],
      'Anta':['Anta'],
      'Roboto':['Roboto'],
      'DoppioOne':['Doppio One'],
      'LexendDeca':['Lexend Deca']
    }
  },
  plugins: [],
};
