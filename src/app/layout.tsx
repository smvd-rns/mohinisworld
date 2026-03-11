import type { Metadata } from "next";
import { Poppins, Roboto, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mohini's World | Mind of a QUEEN. Heart of a Warrior.",
  description: "Official website of Mohini - Empowering through stories, videos, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${dancingScript.variable} ${playfair.variable} font-poppins antialiased bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
