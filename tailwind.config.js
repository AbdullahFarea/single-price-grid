module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    fontFamily: {
      Karla: ['Karla, sans-serif']
    },
    colors: {
      "cyan": "hsl(179, 62%, 43%)",
      "bright-yellow": "hsl(71, 73%, 54%)",
      "light-gray": "hsl(204, 43%, 93%)",
      "grayish-blue": "hsl(218, 22%, 67%)",
      black: "#000",
      white: "#fff",
      transparent: "rgba(0,0,0,0)"
    },
    container: {
      center: true,
      padding: ".75rem",
      screens: {
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
