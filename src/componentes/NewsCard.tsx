import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category?: string;
}

interface NewsCardProps {
  news: NewsItem;
  isFeatured?: boolean;
}

export default function NewsCard({ news, isFeatured = false }: NewsCardProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-gray-900 shadow-lg transition-all hover:scale-[1.01] ${
        isFeatured ? "h-full min-h-[400px]" : "h-[190px]"
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
      <div className="absolute inset-0 left-0 p-6 w-full flex flex-col justify-end">
        <h3
          className={`font-bold leading-tight text-white mb-3 text-left ${
            isFeatured ? "text-2xl" : "text-sm md:text-base"
          }`}
        >
          {news.title}
        </h3>
        {/* Fecha con icono - Parte inferior izquierda */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
          </svg>
          <span>{news.date}</span>
        </div>
        {isFeatured && (
          <span className="mt-2 inline-flex items-center text-sm font-semibold text-white hover:underline cursor-pointer">
            Leer más →
          </span>
        )}
      </div>
    </div>
  );
}