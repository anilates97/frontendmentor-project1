/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fraunces: ["Fraunces", "sans-serif"],
    },
    colors: {
      primary: {
        darkCyan: "hsl(158, 36%, 37%)",
        dark: "hsl(210, 50%, 30%)",
      },
      neutral: {
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishblue: "hsl(228, 12%, 48%)",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
