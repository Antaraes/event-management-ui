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
        verify: "#007bff",
        success: "28a745",
        warning: "ffc107",
        danger: "dc3545",
        info: "17a2b8",
      },
    },
  },
  plugins: [],
};
