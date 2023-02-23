module.exports = {
  content: ["./src/views/*.vue", "./src/*.vue", "./src/components/*.vue"],
  theme: {
    container: () => ({
      center: true
    }),
    fontFamily: {
      sans: ["AbeeZee", "ui-sans-serif", "system-ui"],
      inter: ["Inter"]
    },
    screens: {
      sm: {min: "370px", max: "415px"}
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")]
};
