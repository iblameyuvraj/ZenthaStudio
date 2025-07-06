import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import { poppins } from "./utils/font";

export const metadata: Metadata = {
  title: "Zentha studio",
  description: "Where creativity meets code and every pixel tells a story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Primary Meta Tags */}
        <title>Zentha — Where Creativity Meets Code</title>
        <meta name="title" content="Zentha — Where Creativity Meets Code" />
        <meta name="description" content="Zentha is a modern digital studio where creativity meets code and every pixel tells a story. Built by Yuvraj." />
        <meta name="keywords" content="Zentha, digital studio, creative agency, frontend developer, web design, Yuvraj, UI/UX, Next.js, portfolio" />
        <meta name="author" content="Yuvraj" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zentha.in/" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="bNTsjHtnRZTsE70x0cdeI6ckneaSzp8KCyrvOi_0WLM" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentha.in/" />
        <meta property="og:title" content="Zentha — Where Creativity Meets Code" />
        <meta property="og:description" content="Zentha is a modern digital studio where creativity meets code and every pixel tells a story." />
        <meta property="og:image" content="https://www.zentha.in/images/logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://zentha.in/" />
        <meta name="twitter:title" content="Zentha — Where Creativity Meets Code" />
        <meta name="twitter:description" content="Zentha is a modern digital studio where creativity meets code and every pixel tells a story." />
        <meta name="twitter:image" content="https://www.zentha.in/images/logo.png" />

        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" />

      </head>
      <body
        className={`${poppins.className} ${poppins.variable} antialiased`}
        >
        <LenisProvider>{children}</LenisProvider>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-001CYZ13FV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-001CYZ13FV');
            `,
          }}
        />
      </body>
    </html>
  );
}
