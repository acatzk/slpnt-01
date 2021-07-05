const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'default-gray': '#343d48',
        'default-pink': '#ea3a60',
        'default-blue': '#2563ff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
