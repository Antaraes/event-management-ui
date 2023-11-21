/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1E95C8",
        sidebar: "#002C32",
        bluemark: "#1C78E4",
        sidemenu: "#FFFFFF",
        activeside: "#3CD5E9",
        purchase: "#FFB422",
        navbrand: "#1E95C8",
      },
    },
  },
  plugins: [],
};
