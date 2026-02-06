import type { Metadata } from "next";
import { Bitter } from "next/font/google"; // 1. Custom Font
import "./globals.css";

const bitter = Bitter({ // 2. Configure Bitter
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
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
      <body
        className={`${bitter.variable} antialiased`} // 3. Use variable
      >
        {children}
      </body>
    </html>
  );
}