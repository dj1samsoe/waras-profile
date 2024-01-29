import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-white": "#F5F5F5",
        "primary-purple": "#8C568B",
        "secondary-purple": "#B56FB4",
        "tertiary-purple": "#D884D8",
        "quaternary-black": "#402B3A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover", "focus"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
export default config;
