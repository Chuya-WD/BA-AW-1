/**
 * @file ProjectCard.tsx
 * @description Tarjeta simple para mostrar un proyecto institucional.
 * Incluye una imagen y un título superpuesto estilo "píldora".
 */

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  href?: string;
}

export default function ProjectCard({ title, image, href = "#" }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Contenedor Imagen */}
      <div className="relative w-[70%] aspect-square overflow-hidden shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Botón Flotante (Píldora) */}
      <div className="relative mt-4 w-[95%] bg-white shadow-lg rounded-2xl py-1.5 px-4 text-center border border-gray-100">
        <h4 className="text-xs md:text-sm font-extrabold text-[#0c476b] line-clamp-2 leading-tight">
          {title}
        </h4>
        <a
          href={href}
          className="text-[10px] md:text-xs font-bold text-[#0c476b] uppercase tracking-wider underline decoration-[#0c476b]"
        >
          LEER MÁS
        </a>
      </div>
    </div>
  );
}