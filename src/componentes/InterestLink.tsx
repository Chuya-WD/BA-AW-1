import Image from "next/image";

interface InterestLinkProps {
  title: string;
  imageSrc?: string; // Opcional por si no tienes logo aún
  initials?: string; // Para mostrar letras si no hay logo
  href?: string;
}

export default function InterestLink({ title, imageSrc, initials, href = "#" }: InterestLinkProps) {
  return (
    <a href={href} className="group flex flex-col items-center gap-3 w-full">
      {/* Contenedor del Logo (Caja blanca con sombra) */}
      <div className="flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-md border border-gray-100 transition-all group-hover:scale-110 group-hover:shadow-lg">
        {imageSrc ? (
          <div className="relative w-16 h-16">
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

      {/* Título del link */}
      <span className="text-xs md:text-sm font-bold text-gray-600 text-center underline decoration-gray-300 underline-offset-4 group-hover:text-[#0f2c4c] group-hover:decoration-[#0f2c4c] transition-colors max-w-[120px]">
        {title}
      </span>
    </a>
  );
}