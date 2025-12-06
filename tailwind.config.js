/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "raleway-light": ["Light", "sans-serif"],
        "raleway-medium": ["Medium", "sans-serif"],
        "raleway-regular": ["Regular", "sans-serif"],
        "raleway-semibold": ["SemiBold", "sans-serif"],
        "raleway-black": ["Black", "sans-serif"],
      }
    },
  },
  plugins: [],
}

