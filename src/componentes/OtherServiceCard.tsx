interface OtherServiceCardProps {
  title: string;
  href?: string;
}

function pickIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("universidad") || t.includes("educa")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-20 w-20">
        <path d="M12 2L3 6l9 4 9-4-9-4z" />
        <path d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6" />
      </svg>
    );
  }
  if (t.includes("red") || t.includes("tv") || t.includes("media") || t.includes("tv")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-20 w-20">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M8 6v-2" />
      </svg>
    );
  }
  if (t.includes("constructora") || t.includes("inmobiliaria") || t.includes("constru")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-20 w-20">
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M9 10h6v11" />
      </svg>
    );
  }
  // fallback icon (briefcase)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-20 w-20">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

export default function OtherServiceCard({ title, href = "#" }: OtherServiceCardProps) {
  return (
    <a href={href} className="group block perspective">
      <div className="flip-card-inner relative w-full h-[245px] md:h-[258px] lg:h-[286px]">
        <div className="flip-card-front absolute inset-0 bg-[#0f2c4c] text-white flex flex-col items-center pt-8 px-6">
          <div className="flex-none">
            {pickIcon(title)}
          </div>
          <div className="flex-1"></div>
          <span className="text-lg md:text-xl font-medium text-center pb-8">
            {title}
          </span>
        </div>
        <div className="flip-card-back absolute inset-0 bg-[#0f2c4c] text-white flex flex-col items-center justify-center px-6">
          <p className="text-center mb-6">{title}</p>
          <button className="border border-white text-white px-6 py-2">Ver más</button>
        </div>
      </div>
    </a>
  );
}