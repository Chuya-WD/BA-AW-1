interface ServiceCardProps {
  title: string;
  href: string;
  iconPath: React.ReactNode; // Recibimos el SVG completo o el path
}

export default function ServiceCard({ title, href, iconPath }: ServiceCardProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-xl bg-white p-6 min-h-[96px] md:min-h-[120px] blue-shadow border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-gray-200"
    >
      {/* Contenedor del ícono (Azul oscuro y contorno) */}
      <div className="flex-shrink-0 text-[#002f5d]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 md:h-12 md:w-12"
        >
          {iconPath}
        </svg>
      </div>

      {/* Texto del servicio */}
      <span className="text-sm md:text-base font-medium text-gray-700 underline decoration-gray-400 underline-offset-4 group-hover:text-[#002f5d] group-hover:decoration-[#002f5d] transition-colors">
        {title}
      </span>
    </a>
  );
}