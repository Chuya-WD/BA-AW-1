interface OtherServiceCardProps {
  title: string;
  iconPath: React.ReactNode;
  href?: string;
}

export default function OtherServiceCard({ title, iconPath, href = "#" }: OtherServiceCardProps) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center text-center bg-[#0f2c4c] p-8 text-white transition-all hover:bg-[#163a63] hover:-translate-y-1 h-full min-h-[200px]"
    >
      {/* Ícono blanco grande */}
      <div className="mb-6 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-16 w-16"
        >
          {iconPath}
        </svg>
      </div>
      {/* Título */}
      <span className="text-sm md:text-base font-medium leading-snug">
        {title}
      </span>
    </a>
  );
}