module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary:"#ca61cf",
      secondary:"#e7abdb",
      dark: "#0C0E16",
      light: "#f5f5f5",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
