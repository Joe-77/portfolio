/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "rgb(36,36,36)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
