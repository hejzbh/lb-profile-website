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
          primary: "#2A3D45",
          secondary: "#ffff",
          active: "#EE3537",
          hover: "#EE3537",
        },
        bgColors: {
          primary: "#2A3D45",
          secondary: "#7E8D85",
          hover: "#EE3537",
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
          maxWidth: "93%",
          "@screen lg": {
            maxWidth: "95%",
          },
          "@screen xl": {
            maxWidth: "1328px",
          },
        },
      });
    },
    require("tailwindcss-animate"),
  ],
} satisfies Config;
