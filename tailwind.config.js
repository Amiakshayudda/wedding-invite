// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        brown: "#8b123b",
        dimgray: "#626060",
        whitesmoke: "#ededed",
        cornflowerblue: "#538bde",
        gray: "#8c8b8b",
        // pink: "#8b123b",
        pink: "#881337",
        lightpink: "#fdf2f8",
        blue: "#1d4ed8",
        yellow: "#f59e0b",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        mulish: "Mulish",
      },
      borderRadius: {
        "21xl": "40px",
        "11xl": "30px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      base: "16px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

