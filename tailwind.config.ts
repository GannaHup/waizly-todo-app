/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      // https://colornamer.robertcooper.me/ => for naming colors
      colors: {
        "baby-talk-grey": "#BABABA",
        mercury: "#EBEBEB",
        "pot-black": "#161616",
        "smouldering-red": "#CB3A31",
        "ultramarine-shadow": "#0A0547",
        thunder: "#4D4D4D",
        lighthouse: "#999999",
        "pure-cyan": "#3DC2A7",
      },
    },
  },
};
