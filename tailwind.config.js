module.exports = {
  purge: [],
  darkMode: false, 
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
       'arrow-left': "url('/images/arrow-left.png')",
       'arrow-right': "url('/images/arrow-right.png')",
      }
    }
  }
}
