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
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
