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
          <p className="text-sm md:text-base font-medium mb-2 max-w-2xl leading-relaxed inline-block">
             {/* Subrayado permanente, más fino, con transición en hover */}
             <span className="transition-all duration-300 underline underline-offset-4 decoration-white/50 decoration-1 group-hover:text-white group-hover:decoration-white">
              {description}
             </span>
          </p>
        )}
        {title && (
          <h3 className="transition-all duration-300 text-xl md:text-2xl font-bold tracking-wide underline underline-offset-4 decoration-white/50 decoration-1 group-hover:text-white group-hover:decoration-white">
            {title}
          </h3>
        )}
      </div>
    </a>
  );
}