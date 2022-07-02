/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        main: "#3C6382",
        mainDark: "#044378",
        projects: "#8AA2B5",
        projectsDark: "#285f8a",
        project2: "#3C6382",
        skills: "#C7C7C7 ",
        skillsDark: "#c9adad",
        about: "#EBA08F",
        aboutDark: "#ed795f",
        contact: "#B58B8A",
        contactDark: "#ba6a68",
        backup: "#ddd6fe",
      },
    },
  },
  plugins: [],
};
