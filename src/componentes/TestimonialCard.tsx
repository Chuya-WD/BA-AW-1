import Image from "next/image";
import React from "react";


interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;

  category?: "premium" | "standard";
}

export default function TestimonialCard({
  name,
  role,
  location,
  quote,
  image
}: TestimonialCardProps) {

  return (
    <div className="group h-[400px] w-full [perspective:1200px]">

      <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl">

        {/* --- CARA FRONTAL (User Profile) --- */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center p-8 [backface-visibility:hidden] border border-slate-200">
          <div className="relative w-36 h-36 mb-6 ring-4 ring-offset-4 ring-[#0c476b] rounded-full overflow-hidden shadow-inner">
            <Image
              src={image}
              alt={`Retrato de ${name}`}
              fill
              priority // Optimización para LCP
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 150px"
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-black text-[#0c476b] tracking-tight">{name}</h3>
            <p className="text-sm font-semibold text-blue-600/70 uppercase tracking-widest mt-1">{role}</p>
          </div>

          <div className="absolute bottom-8 flex items-center gap-2 px-4 py-2 bg-[#0c476b]/5 rounded-full text-[#0c476b] text-[10px] font-bold uppercase">
            <span>Interactuar</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#0c476b] animate-pulse" />
          </div>
        </div>

        {/* --- CARA TRASERA --- */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-[#0c476b] p-10 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]">


          <svg className="absolute top-8 left-8 h-12 w-12 text-blue-400/20" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8v8H6v2a2 2 0 002 2h2v4H8a6 6 0 01-6-6v-8a2 2 0 012-2h4zm14 0v8h-4v2a2 2 0 002 2h2v4h-2a6 6 0 01-6-6v-8a2 2 0 012-2h4z" />
          </svg>

          <blockquote className="relative z-10">
            <p className="text-base md:text-lg font-medium italic leading-relaxed text-blue-50">
              "{quote}"
            </p>
          </blockquote>

          <div className="mt-8 pt-6 border-t border-white/10 w-full flex flex-col items-center">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">Ubicación</span>
            <p className="text-sm text-gray-300 mt-1">📍 {location}</p>
          </div>

          <svg className="absolute bottom-8 right-8 h-12 w-12 text-blue-400/20 rotate-180" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8v8H6v2a2 2 0 002 2h2v4H8a6 6 0 01-6-6v-8a2 2 0 012-2h4zm14 0v8h-4v2a2 2 0 002 2h2v4h-2a6 6 0 01-6-6v-8a2 2 0 012-2h4z" />
          </svg>
        </div>

      </div>
    </div>
  );
}
