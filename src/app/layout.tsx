import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banco ANEUPI",
  description: "Banco ANEUPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* AGREGADO: font-serif aquí para cambiar el tipo de letra global */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}