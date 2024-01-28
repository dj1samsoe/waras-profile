import { Montserrat, Open_Sans } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--montserrat-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const openSans = Open_Sans({
  variable: "--open-sans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700"],
});
