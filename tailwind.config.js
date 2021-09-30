   
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        light_brown: "#FCDEC0",
        medium_brown: "#C68B59",
        dark_brown: "#865439",
        sky_blue: "#8FC1D4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

