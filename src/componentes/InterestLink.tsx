/**
 * @file InterestLink.tsx
 * @description Enlace de interés con logo o iniciales (fallback).
 * Se utiliza en la sección de "Enlaces de Interés" al final de la página.
 */

import Image from "next/image";

interface InterestLinkProps {
  title: string;
  imageSrc?: string; // Opcional por si no hay logo aún
  initials?: string; // Para mostrar letras si no hay logo
  href?: string;
}

export default function InterestLink({ title, imageSrc, initials, href = "#" }: InterestLinkProps) {
  return (
    <a href={href} className="group flex flex-col items-center gap-3 w-full">
      {/* Contenedor del Logo (Caja blanca con sombra azul) */}
      <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl blue-shadow transition-transform group-hover:scale-110">
        {imageSrc ? (
          <div className="relative w-14 h-14">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          /* Fallback visual si no hay logo (Muestra iniciales) */
          <span className="text-2xl font-black text-gray-300 select-none">
            {initials || "??"}
          </span>
        )}
      </div>

      {/* Título del link (estático, sin hover de color) */}
      <span className="text-xs md:text-sm font-semibold text-gray-600 text-center max-w-[120px] underline">
        {title}
      </span>
    </a>
  );
}