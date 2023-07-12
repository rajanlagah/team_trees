/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      primary: "#000",
      secondary: "#aaa6c3",
      tertiary: "#fff",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3"
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/big-header.png')"
      }
    }
  },
  plugins: []
};
