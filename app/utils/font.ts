import { Great_Vibes, Josefin_Sans, Poppins, Quicksand } from "next/font/google";
import "@fontsource/geist-sans";
import "@fontsource/geist-mono";

export const geistSans = {
  variable: "--font-geist-sans",
  className: "font-geist-sans",
};

export const geistMono = {
  variable: "--font-geist-mono", 
  className: "font-geist-mono",
};

export const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const greatvibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});