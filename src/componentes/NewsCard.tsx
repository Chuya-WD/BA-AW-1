import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category?: string; // Opcional, por si quieres poner etiquetas
}

interface NewsCardProps {
  news: NewsItem;
  isFeatured?: boolean; // Para saber si es la grandota de la izquierda
}

export default function NewsCard({ news, isFeatured = false }: NewsCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg transition-all hover:scale-[1.01] ${
        isFeatured ? "h-full min-h-[400px]" : "h-64" // Altura dinámica
      }`}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradiente oscuro para que el texto se lea bien */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Contenido del texto */}
      <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end h-full">
        {/* Icono decorativo calendario (simulado con texto simple para no instalar iconos) */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
           <span>📅 {news.date}</span>
        </div>

        <h3
          className={`font-bold leading-tight text-white mb-2 ${
            isFeatured ? "text-3xl md:text-4xl" : "text-lg md:text-xl"
          }`}
        >
          {news.title}
        </h3>

        {isFeatured && (
          <span className="mt-2 inline-flex items-center text-sm font-semibold text-white hover:underline cursor-pointer">
            Leer más &rarr;
          </span>
        )}
      </div>
    </div>
  );
}