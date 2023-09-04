/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08435e",
        orange: "#f4a462",
        yellow: "#e8c468",
        mintGreen: "#2a9d90",
        darkMintGreen: "#0e7c86"
      }
    }
  },
  plugins: []
};
