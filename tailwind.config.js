/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#272D37",
        subtleGray: "#5F6D7E",
        dashboardCol: "#437ef7",
        primaryColor: "#437ef7",
        secondaryColor: "#141414",
        accentColor: "#5F6D7E",
        accentColor1: "#5f6d7e",
        hoverColor: "#eaebf0",
        starColor: "#f9b900",
        tertiaryColor1: "#ffffff",
        tertiaryColor2: "#3a424b",
        tertiaryColor3: "#FAFBFC",
        tertiaryColor4: "#41ae48",
        tertiaryColor5: "#e8effd",
      },
    },
  },
  plugins: [],
}