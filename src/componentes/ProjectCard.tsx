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
      <div className="relative w-full aspect-square overflow-hidden shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Botón Flotante (Píldora) */}
      <div className="relative -mt-6 z-10 w-[90%] bg-white shadow-lg rounded-2xl py-3 px-4 text-center border border-gray-100">
        <h4 className="text-xs md:text-sm font-bold text-[#0f2c4c] mb-1 line-clamp-2 min-h-[2.5em] flex items-center justify-center">
          {title}
        </h4>
        <a 
          href={href} 
          className="text-[10px] md:text-xs font-bold text-[#0056b3] uppercase tracking-wider hover:underline"
        >
          LEER MÁS
        </a>
      </div>
    </div>
  );
}