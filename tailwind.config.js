module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "calculator-pattern": "url('/src/assets/img-05.png')",
      }),
    },
  },
  plugins: [],
};
