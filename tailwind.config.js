/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#437EF7",
        black: "#272D37",
        subtleGray: "#5F6D7E",
      },
    },
  },
  plugins: [],
};
