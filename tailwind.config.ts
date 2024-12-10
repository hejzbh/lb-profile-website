import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColors: {
          title: "#2A3D45",
          primary: "#ffff",
          secondarY: "#2A3D45",
        },
        bgColors: {
          primary: "#2A3D45",
        },
        btnColors: {
          primary: "#EE3537",
          secondary: "#ffff",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "1128px",
        },
      });
    },
    require("tailwindcss-animate"),
  ],
} satisfies Config;
