/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./docs/**/index.html",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        "light-gray": "var(--light-gray)",
        "grayish-blue": "var(--grayish-blue)",
        "dark-blue": "var(--dark-blue)",
      },
      fontFamily: {
        outfit: "var(--outfit)",
      },
      boxShadow: {
        "shadow-1": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
