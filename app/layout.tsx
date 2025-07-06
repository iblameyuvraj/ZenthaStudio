import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import { poppins } from "./utils/font";


export const metadata: Metadata = {
  title: "Zentha",
  description: "Where creativity ceets code and every pixel tells a story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="bNTsjHtnRZTsE70x0cdeI6ckneaSzp8KCyrvOi_0WLM" />
        {/* Mobile viewport settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* ...other meta tags... */}
      </head>
      <body
        className={`${poppins.className} ${poppins.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}