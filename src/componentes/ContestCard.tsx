import Image from "next/image";

interface ContestCardProps {
  title?: string;
  description?: string;
  image: string;
  href?: string;
}

export default function ContestCard({ title, description, image, href = "#" }: ContestCardProps) {
  return (
    <a href={href} className="group contest-card relative w-full overflow-hidden h-[300px] block">
      {/* Imagen de Fondo */}
      <Image
        src={image}
        alt={title || "Concurso"}
        fill
        className="object-cover transition-transform duration-700 contest-image"
      />
      
      {/* Capa oscura para leer el texto */}
      <div className="absolute inset-0 bg-black/40 transition-colors" />

      {/* Contenido Centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        {description && (
          <p className="text-white text-sm md:text-base font-medium mb-2 max-w-2xl leading-relaxed inline-block">
             {/* Subrayado animado al hover simulado con borde */}
             <span className="transition-all duration-300 group-hover:underline underline-offset-4 decoration-white/70 decoration-2">
              {description}
             </span>
          </p>
        )}
        {title && (
          <h3 className="transition-all duration-300 text-white text-xl md:text-2xl font-bold tracking-wide group-hover:underline underline-offset-4 decoration-white/70 decoration-2">
            {title}
          </h3>
        )}
      </div>
    </a>
  );
}