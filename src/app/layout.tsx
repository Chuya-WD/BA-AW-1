/**
 * @file layout.tsx
 * @description Estructura base de la aplicación (Root Layout).
 * Define la configuración global de fuentes, metadatos y el contenedor principal (html/body).
 */

import type { Metadata } from "next";
import { Bitter } from "next/font/google"; // 1. Custom Font
import "./globals.css";

// Configuración de la fuente "Bitter"
// Se asigna a una variable CSS (--font-bitter) para usarla en Tailwind.
const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Banco ANEUPI",
  description: "Banco ANEUPI",
};

/**
 * Componente RootLayout
 * Envuelve todas las páginas de la aplicación.
 * Aplica la fuente global y la estructura básica del HTML.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} antialiased`} // Se inyecta la variable de la fuente
      >
        {children}
      </body>
    </html>
  );
}