module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4c2885",
          200: "#2a2a72",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
