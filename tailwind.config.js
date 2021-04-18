module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "8rem",
      },
    },
    colors: {
      lightRed: "#E4735E",
      red: "#CA523E",
      gray: "#141414",
      black: "#222221",
      white: "#FFFFFF",
      lightGray: "#353535",
    },

    extend: {
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
