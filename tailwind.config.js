/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#15202b", // background color 
        secondary: "#aaa6c3",  // Small words
        tertiary: "#010101",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/chesterphoto.jpeg')",
      },
      backgroundImageOpacity: {
        '10': '0.1',
        '20': '0.2',
      },
      
    },
  },
  plugins: [],
};