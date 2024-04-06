module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { white: { A700: "#ffffff" } },
      boxShadow: {},
      fontFamily: { baloobhai: "Baloo Bhai 2", baloo: "Baloo" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
