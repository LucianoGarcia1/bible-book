/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      small: "1rem",
      title: "2.4rem",
      medium: "2rem",
    },
    fontWeight: {
      light: "400",
      medium: "500",
      bold: "800",
      extra_bold: "900",
    },
    colors: {
      bg_primary: "#ffffff",
      bg_secundary: "#f1f1f1",
      color_title: "#3F51B5",
      color_text: "#333333",
      color_btn: "#FF9800",
    },
  },
  plugins: [],
};
