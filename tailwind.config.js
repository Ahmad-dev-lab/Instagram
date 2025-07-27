// tailwind.config.js
module.exports = {
  content: [
    "./index.html",             // if using Vite
    "./src/**/*.{js,ts,jsx,tsx}" // include all your component files
  ],
  theme: {
    screens: {
      xxxs: "320px", // Very small devices (e.g., older phones)
      xxs: "375px",  // Small phones
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
}
