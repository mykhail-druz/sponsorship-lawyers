import {
  Poppins,
  Libre_Baskerville,
  Averia_Serif_Libre,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const basker = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
