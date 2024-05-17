/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        honeydew: "#e9f8e5",
        darkolivegreen: "#73895d",
        darkslategray: "#4a4a4a",
        gray: {
          "100": "#fcfeff",
          "200": "#020d19",
          "300": "rgba(0, 0, 0, 0.5)",
          "400": "rgba(0, 0, 0, 0.2)",
        },
        silver: "#b0bac3",
        "black-dark": "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        aladin: "Aladin",
      },
      borderRadius: {
        "81xl": "100px",
        "11xl": "30px",
        xl: "20px",
        "6xl": "25px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
