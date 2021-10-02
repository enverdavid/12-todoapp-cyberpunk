   
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        cyberpunk_pink: "#FF66C4",
        cyberpunk_green: "#63FFEC",
        cyberpunk_light_blue: "#242E3C",
        cyberpunk_dark_blue: "#101822",
        sky_blue: "#8FC1D4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

