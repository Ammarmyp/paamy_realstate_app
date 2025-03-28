/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "lexend-bold": ["Lexend-Bold", "sans-serif"],
        "lexend-extrabold": ["Lexend-ExtraBold", "sans-serif"],
        "lexend-medium": ["Lexend-Medium", "sans-serif"],
        "lexend-regular": ["Lexend-Regular", "sans-serif"],
        "lexend-semi-bold": ["Lexend-SemiBold", "sans-serif"],
        "lexend-light": ["Lexend-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#FF80000A",
          200: "#FF80001A",
          300: "#FF8000",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555,",
      },
    },
  },
  plugins: [],
};
