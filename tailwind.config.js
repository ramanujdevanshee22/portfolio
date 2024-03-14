/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        typewriter: ["Cutive Mono", "monospace"],
        handwriting: ["Satisfy", "cursive"],
        display: ["Inter Tight", "sans-serif"],
        solid: ["Rubik Mono One", "monospace"],
        poppins: ["Poppins", "sans-serif"],
        
      },
      colors:{
        "laurel": {
          50: "#F1F7F8",
          100: "#E7F1F3",
          200: "#CFE2E8",
          300: "#B0D0D9",
          400: "#8EBCC9",
          500: "#78AFBF",
          600: "#5D9FB1",
          700: "#4A8A9B",
          800: "#3D7180",
          900: "#284953",
          950: "#172B30"
        }
      }
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
