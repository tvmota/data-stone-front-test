/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001B2E",
        secondary: "#294C60",
        neutral: "#ADB6C4",
      },
      boxShadowColor: {
        primary: "#001B2E",
        secondary: "#294C60",
        neutral: "#ADB6C4",
      }
    },
  },
  plugins: [],
}

