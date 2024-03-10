/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '650px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
};
