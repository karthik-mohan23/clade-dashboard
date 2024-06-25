/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC4A2D",
        secondary: "#FEF4F2",
        "custom-gray": {
          100: "#FCFCFC",
          200: "#E7E7E7",
          300: "#D1D1D1",
          400: "#B0B0B0",
          500: "#888888",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#3D3D3D",
        },
        "custom-white": {
          900: "#FFFFFF",
        },
        border: {
          100: "#E7E7E7",
        },
      },
    },
  },
  plugins: [],
};
