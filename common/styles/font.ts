import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--montserrat-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});
